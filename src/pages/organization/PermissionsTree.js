// PermissionsTree.js
// الجزء الأيسر: شجرة الصلاحيات (MUI TreeView) مع إضافة/تعديل/حذف/مرفقات

import React, { useState } from 'react';
import { Box, IconButton, TextField, Tooltip, Dialog, DialogTitle, DialogActions, Button, MenuItem, Select } from '@mui/material';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import SecurityIcon from '@mui/icons-material/Security';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BuildIcon from '@mui/icons-material/Build';
import DescriptionIcon from '@mui/icons-material/Description';

const typeIcons = {
  permission: <SecurityIcon color="primary" />,
  task: <AssignmentIcon color="secondary" />,
  procedure: <BuildIcon color="action" />,
  form: <DescriptionIcon color="success" />,
};

const typeLabels = {
  permission: 'صلاحية',
  task: 'مهمة',
  procedure: 'إجراء',
  form: 'نموذج',
};

const initialTree = [
  {
    id: 'p1',
    name: 'صلاحية 1',
    type: 'permission',
    children: [
      {
        id: 't1',
        name: 'مهمة 1',
        type: 'task',
        children: [
          {
            id: 'pr1',
            name: 'إجراء 1',
            type: 'procedure',
            children: [
              { id: 'f1', name: 'نموذج 1', type: 'form', children: [], file: null },
            ],
          },
        ],
      },
    ],
  },
];

function getNextType(type) {
  if (type === 'permission') return 'task';
  if (type === 'task') return 'procedure';
  if (type === 'procedure') return 'form';
  return null;
}

import { useTranslation } from 'react-i18next';

const PermissionsTree = ({ permissions, onChange, selectedPermissionId, setSelectedPermissionId }) => {
  const { i18n } = useTranslation();
  const dir = i18n.dir();
  const tree = permissions;
  const [addValue, setAddValue] = useState('');
  const [editValue, setEditValue] = useState('');
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [file, setFile] = useState(null);
  // selectedPermissionId and setSelectedPermissionId are now controlled by parent (OrganizationPage) via props

  // Helper to find node by id
  function findNode(nodes, id) {
    for (let node of nodes) {
      if (node.id === id) return node;
      if (node.children) {
        const found = findNode(node.children, id);
        if (found) return found;
      }
    }
    return null;
  }

  // Add node
  const handleAdd = () => {
    if (!addValue.trim()) return;
    let typeToAdd = 'permission';
    if (selectedPermissionId) {
      const selected = findNode(tree, selectedPermissionId);
      typeToAdd = getNextType(selected.type);
      if (!typeToAdd) return;
    }
    const addNode = (nodes) => {
      if (!selectedPermissionId) {
        // Add to root
        return [
          ...nodes,
          { id: Date.now().toString(), name: addValue, type: 'permission', children: [] },
        ];
      }
      return nodes.map(node => {
        if (node.id === selectedPermissionId) {
          return {
            ...node,
            children: [
              ...node.children,
              typeToAdd === 'form' ? { id: Date.now().toString(), name: addValue, type: typeToAdd, children: [], file } : { id: Date.now().toString(), name: addValue, type: typeToAdd, children: [] }
            ],
          };
        }
        return { ...node, children: addNode(node.children) };
      });
    };
    onChange(addNode(tree));
    setAddValue('');
    setFile(null);
  };

  // Edit node
  const handleEdit = () => {
    if (!editValue.trim() || !selectedPermissionId) return;
    const editNode = (nodes) => nodes.map(node => {
      if (node.id === selectedPermissionId) return { ...node, name: editValue };
      return { ...node, children: editNode(node.children) };
    });
    onChange(editNode(tree));
    setShowEdit(false);
  };

  // Delete node
  const handleDelete = () => {
    const deleteNode = (nodes) => nodes.filter(node => {
      if (node.id === selectedPermissionId) return false;
      node.children = deleteNode(node.children);
      return true;
    });
    onChange(deleteNode(tree));
    setSelectedPermissionId(null);
    setShowDelete(false);
  };

  // Render tree with indentation by depth
  const renderTree = (nodes, depth = 0) => nodes.map(node => {
    return (
      <TreeItem
        key={node.id}
        nodeId={node.id}
        label={
          <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: selectedPermissionId === node.id ? '#e3f2fd' : 'white', borderRadius: 1, px: 1, py: 0.5, minWidth: 120, textAlign: dir === 'rtl' ? 'right' : 'left', justifyContent: dir === 'rtl' ? 'flex-end' : 'flex-start' }}>
            <span style={dir === 'rtl' ? { marginRight: depth * 20 } : { marginLeft: depth * 20 }}>
              {typeIcons[node.type]} <span style={{ marginRight: 8 }}>{node.name}</span>
              {node.type === 'form' && node.file && (
                <IconButton size="small" component="a" href={URL.createObjectURL(node.file)} download>
                  <UploadFileIcon fontSize="small" />
                </IconButton>
              )}
            </span>
          </Box>
        }
        
      >
        {node.children && node.children.length > 0 && renderTree(node.children, depth + 1)}
      </TreeItem>
    );
  });

  // Get selected node type
  const selectedNode = findNode(tree, selectedPermissionId);
  const nextType = selectedNode ? getNextType(selectedNode.type) : 'permission';

  return (
    <Box>
      {/* حقل الإضافة */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
        <TextField size="small" placeholder={`إضافة ${typeLabels[nextType]}`} value={addValue} onChange={e => setAddValue(e.target.value)} sx={{ width: 180 }} />
        {nextType === 'form' && (
          <Button component="label" startIcon={<UploadFileIcon />} size="small" variant="outlined">
            مرفق
            <input hidden type="file" onChange={e => setFile(e.target.files[0])} />
          </Button>
        )}
        <Tooltip title="إضافة"><IconButton color="primary" onClick={handleAdd}><AddIcon /></IconButton></Tooltip>
        <Tooltip title="تعديل"><IconButton color="info" disabled={!selectedPermissionId} onClick={() => { setEditValue(selectedNode?.name || ''); setShowEdit(true); }}><EditIcon /></IconButton></Tooltip>
        <Tooltip title="حذف"><IconButton color="error" disabled={!selectedPermissionId} onClick={() => setShowDelete(true)}><DeleteIcon /></IconButton></Tooltip>
      </Box>
      {/* شجرة الصلاحيات */}
      <Box sx={{ border: '1px solid #eee', borderRadius: 2, p: 2, bgcolor: '#fafbfc', minHeight: 220 }}>
        <TreeView
          selected={selectedPermissionId}
          onNodeSelect={(e, id) => setSelectedPermissionId(id)}
          defaultCollapseIcon={<span>-</span>}
          defaultExpandIcon={<span>+</span>}
        >
          {renderTree(tree)}
        </TreeView>
      </Box>
      {/* حوار التعديل */}
      <Dialog open={showEdit} onClose={() => setShowEdit(false)}>
        <DialogTitle>تعديل اسم العنصر</DialogTitle>
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
        <Box sx={{ p: 2 }}>هل أنت متأكد من حذف هذا العنصر وكل ما يتفرع منه؟</Box>
        <DialogActions>
          <Button onClick={() => setShowDelete(false)}>إلغاء</Button>
          <Button variant="contained" color="error" onClick={handleDelete}>حذف</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PermissionsTree;
