// OrgChartTree.js
// الجزء الأيمن: شجرة الهيكل التنظيمي مع شريط الأدوات

import React, { useState } from 'react';
import { Box, IconButton, TextField, Select, MenuItem, Dialog, DialogTitle, DialogActions, Button, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { Tree, TreeNode } from 'react-organizational-chart';

// بيانات تجريبية افتراضية
const initialTree = {
  id: '1',
  name: 'الرئيس التنفيذي',
  children: [
    { id: '2', name: 'الإدارة المالية', children: [] },
    { id: '3', name: 'إدارة الموارد البشرية', children: [] },
  ],
};

function findNodeById(node, id) {
  if (!node) return null;
  if (node.id === id) return node;
  for (let child of (node.children || [])) {
    const found = findNodeById(child, id);
    if (found) return found;
  }
  return null;
}

function getAllNodes(node, list = []) {
  if (!node) return list;
  list.push({ id: node.id, name: node.name });
  for (let child of (node.children || [])) {
    getAllNodes(child, list);
  }
  return list;
}

const OrgChartTree = ({ orgTree, setOrgTree, selectedNodeId, setSelectedNodeId }) => {
  const tree = orgTree;
  const [addValue, setAddValue] = useState('');
  const [editValue, setEditValue] = useState('');
  const [moveTarget, setMoveTarget] = useState('');
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  // إضافة نقطة جديدة
  const handleAdd = () => {
    if (!addValue.trim() || !selectedNodeId) return;
    const addChild = (node) => {
      if (node.id === selectedNodeId) {
        return {
          ...node,
          children: [
            ...(node.children || []),
            { id: Date.now().toString(), name: addValue, permissions: [], regulations: [], children: [] },
          ],
        };
      }
      return { ...node, children: node.children.map(addChild) };
    };
    setOrgTree(addChild(tree));
    setAddValue('');
  };

  // تعديل اسم نقطة
  const handleEdit = () => {
    if (!editValue.trim() || !selectedNodeId) return;
    const editNode = (node) => {
      if (node.id === selectedNodeId) return { ...node, name: editValue };
      return { ...node, children: node.children.map(editNode) };
    };
    setOrgTree(editNode(tree));
    setShowEdit(false);
  };

  // حذف نقطة
  const handleDelete = () => {
    const deleteNode = (node, id) => {
      if (!node) return null;
      if (node.id === id) return null;
      return { ...node, children: node.children.map(child => deleteNode(child, id)).filter(Boolean) };
    };
    setOrgTree(deleteNode(tree, selectedNodeId));
    setSelectedNodeId(tree.id); // عد للرئيس التنفيذي
    setShowDelete(false);
  };

  // نقل نقطة
  const handleMove = () => {
    if (!moveTarget || !selectedNodeId || moveTarget === selectedNodeId) return;
    let movingNode = null;
    const removeNode = (node, id) => {
      if (node.id === id) {
        movingNode = { ...node };
        return null;
      }
      return { ...node, children: node.children.map(child => removeNode(child, id)).filter(Boolean) };
    };
    let newTree = removeNode(tree, selectedNodeId);
    const addNode = (node, targetId) => {
      if (node.id === targetId) {
        return { ...node, children: [...(node.children || []), movingNode] };
      }
      return { ...node, children: node.children.map(child => addNode(child, targetId)) };
    };
    newTree = addNode(newTree, moveTarget);
    setOrgTree(newTree);
    setMoveTarget('');
  };

  // رسم الشجرة
  const renderTree = (node) => (
    <TreeNode
      key={node.id}
      label={
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: selectedNodeId === node.id ? '#e3f2fd' : 'white',
            borderRadius: 1,
            px: 1,
            py: 0.5,
            cursor: 'pointer',
            minWidth: 120,
            width: '100%',
            textAlign: 'center',
          }}
          onClick={() => setSelectedNodeId(node.id)}
        >
          <span style={{ width: '100%', textAlign: 'center', fontWeight: 500 }}>{node.name}</span>
        </Box>
      }
    >
      {(node.children || []).map(renderTree)}
    </TreeNode>
  );

  // قائمة كل النقاط للنقل
  const allNodes = getAllNodes(tree).filter(n => n.id !== selectedNodeId);

  // اسم النقطة المختارة
  const selectedNode = findNodeById(tree, selectedNodeId) || tree;

  return (
    <Box>
      {/* شريط الأدوات */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
        <Tooltip title="إضافة نقطة"><IconButton color="primary" onClick={handleAdd}><AddIcon /></IconButton></Tooltip>
        <TextField size="small" placeholder="اسم جديد" value={addValue} onChange={e => setAddValue(e.target.value)} sx={{ width: 120 }} />
        <Tooltip title="تعديل"><IconButton color="info" onClick={() => { setEditValue(selectedNode.name); setShowEdit(true); }} disabled={!selectedNodeId}><EditIcon /></IconButton></Tooltip>
        <Tooltip title="حذف"><IconButton color="error" onClick={() => setShowDelete(true)} disabled={!selectedNodeId}><DeleteIcon /></IconButton></Tooltip>
        <Tooltip title="نقل"><IconButton color="secondary" onClick={handleMove} disabled={!moveTarget || !selectedNodeId}><SwapHorizIcon /></IconButton></Tooltip>
        <Select size="small" value={moveTarget} onChange={e => setMoveTarget(e.target.value)} displayEmpty sx={{ minWidth: 100 }}>
          <MenuItem value=""><em>اختر نقطة</em></MenuItem>
          {allNodes.map(n => <MenuItem key={n.id} value={n.id}>{n.name}</MenuItem>)}
        </Select>
      </Box>
      {/* شجرة الهيكل التنظيمي */}
      <Box sx={{ overflow: 'auto', border: '1px solid #eee', borderRadius: 2, p: 2, bgcolor: '#fafbfc', minHeight: 350 }}>
        <Tree
          lineWidth={'2px'}
          lineColor={'#1976d2'}
          lineBorderRadius={'10px'}
          label={<Box sx={{ fontWeight: 'bold', color: '#1976d2', p: 1 }}>الهيكل التنظيمي</Box>}
        >
          {renderTree(tree)}
        </Tree>
      </Box>
      {/* حوار التعديل */}
      <Dialog open={showEdit} onClose={() => setShowEdit(false)}>
        <DialogTitle>تعديل اسم النقطة</DialogTitle>
        <Box sx={{ p: 2 }}>
          <TextField fullWidth value={editValue} onChange={e => setEditValue(e.target.value)} />
        </Box>
        <DialogActions>
          <Button onClick={() => setShowEdit(false)}>إلغاء</Button>
          <Button variant="contained" onClick={handleEdit}>حفظ</Button>
        </DialogActions>
      </Dialog>
      {/* حوار الحذف */}
      <Dialog open={showDelete} onClose={() => setShowDelete(false)}>
        <DialogTitle>تأكيد الحذف</DialogTitle>
        <Box sx={{ p: 2 }}>هل أنت متأكد من حذف هذه النقطة وكل ما يتفرع منها؟</Box>
        <DialogActions>
          <Button onClick={() => setShowDelete(false)}>إلغاء</Button>
          <Button variant="contained" color="error" onClick={handleDelete}>حذف</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default OrgChartTree;
