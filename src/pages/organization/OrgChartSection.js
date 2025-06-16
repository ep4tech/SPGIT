import React, { useState } from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import { Button, TextField, IconButton, Tooltip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { useTranslation } from 'react-i18next';

const initialTree = {
  id: '1',
  name: 'الرئيس التنفيذي',
  children: [
    { id: '2', name: 'إدارة الموارد البشرية', children: [] },
    { id: '3', name: 'إدارة المالية', children: [] },
  ],
};

function renderNode(node, setSelectedOrgNodeId, selectedOrgNodeId) {
  return (
    <TreeNode
      key={node.id}
      label={<div
        style={{
          background: node.id === selectedOrgNodeId ? '#e0f7fa' : '#fff',
          padding: 6,
          borderRadius: 4,
          cursor: 'pointer',
          border: node.id === selectedOrgNodeId ? '2px solid #0288d1' : '1px solid #ccc',
        }}
        onClick={e => {
          e.stopPropagation();
          console.log('Node selected:', node.id, typeof node.id);
          setSelectedOrgNodeId(String(node.id));
        }}
      >{node.name}</div>}
    >
      {node.children && node.children.map(child => renderNode(child, setSelectedOrgNodeId, selectedOrgNodeId))}
    </TreeNode>
  );
}

const OrgChartSection = ({ selectedOrgNodeId, setSelectedOrgNodeId }) => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const { t } = useTranslation();
  const [tree, setTree] = useState(initialTree);

  const [newNodeName, setNewNodeName] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editNodeName, setEditNodeName] = useState('');
  const [moveTargetId, setMoveTargetId] = useState('');

  // Helper functions for add/edit/delete/move (mocked for now)
  // Find node by id
  function findNodeById(node, id) {
    if (node.id === id) return node;
    for (let child of node.children || []) {
      const found = findNodeById(child, id);
      if (found) return found;
    }
    return null;
  }
  // Get all nodes (flat list)
  function getAllNodes(node, acc = []) {
    if (!node) return acc;
    acc.push({ id: node.id, name: node.name });
    for (let child of node.children || []) {
      getAllNodes(child, acc);
    }
    return acc;
  }
  // Check if targetId is a descendant of nodeId
  function isDescendant(node, nodeId, targetId) {
    if (node.id === nodeId) {
      // Search for targetId in subtree
      return findNodeById(node, targetId) !== null;
    }
    for (let child of node.children || []) {
      if (isDescendant(child, nodeId, targetId)) return true;
    }
    return false;
  }
  // Move node under new parent
  function moveNode() {
    if (!moveTargetId) return;
    if (selectedOrgNodeId === tree.id) return; // don't move root
    const newTree = JSON.parse(JSON.stringify(tree));
    let movingNode = null;
    // Remove node from current parent
    function removeNode(node, parent) {
      if (!parent) return false;
      const idx = parent.children.findIndex(child => child.id === selectedOrgNodeId);
      if (idx !== -1) {
        movingNode = parent.children[idx];
        parent.children.splice(idx, 1);
        return true;
      }
      for (let child of node.children || []) {
        if (removeNode(child, node)) return true;
      }
      return false;
    }
    removeNode(newTree, null);
    if (!movingNode) return; // Node not found, abort
    // Add node to new parent
    function addToTarget(node) {
      if (node.id === parseInt(moveTargetId)) {
        node.children = node.children || [];
        node.children.push(movingNode);
      } else if (node.children) {
        node.children.forEach(addToTarget);
      }
    }
    addToTarget(newTree);
    setTree(newTree);
    setSelectedOrgNodeId(movingNode.id);
    setMoveTargetId('');
  }

  // Add subunit
  function addSubunit() {
    if (!newNodeName.trim()) return;
    function addRec(node) {
      if (node.id === selectedOrgNodeId) {
        node.children = node.children || [];
        node.children.push({ id: String(Date.now()), name: newNodeName, children: [] });
      } else if (node.children) {
        node.children.forEach(addRec);
      }
    }
    const newTree = JSON.parse(JSON.stringify(tree));
    addRec(newTree);
    setTree(newTree);
    setNewNodeName('');
  }
  // Edit node
  function editNode() {
    function editRec(node) {
      if (node.id === selectedOrgNodeId) {
        node.name = editNodeName;
      } else if (node.children) {
        node.children.forEach(editRec);
      }
    }
    const newTree = JSON.parse(JSON.stringify(tree));
    editRec(newTree);
    setTree(newTree);
    setEditMode(false);
    setEditNodeName('');
  }
  // Delete a node from the org chart (except root)
  function deleteNode() {
    // Don't allow deleting the root node
    if (String(tree.id) === String(selectedOrgNodeId)) {
      console.warn('Cannot delete the root node.');
      return;
    }

    // Recursively remove the node with selectedOrgNodeId from the tree
    function removeNodeRecursive(node, targetId) {
      if (!node.children) return;
      node.children = node.children.filter(child => String(child.id) !== String(targetId));
      node.children.forEach(child => removeNodeRecursive(child, targetId));
    }

    // Deep clone the tree to avoid mutating state directly
    const newTree = JSON.parse(JSON.stringify(tree));
    removeNodeRecursive(newTree, selectedOrgNodeId);
    setTree(newTree);
    setSelectedOrgNodeId(newTree.id);
  }

  return (
    <div className="org-chart-section" style={{ direction: 'ltr' }}>
      <div className="org-chart-toolbar">
        <Tooltip title={t('organizationPermissions.orgChart.addSubunit')}><IconButton onClick={addSubunit}><AddIcon /></IconButton></Tooltip>
        <TextField size="small" value={newNodeName} onChange={e => setNewNodeName(e.target.value)} placeholder={t('organizationPermissions.orgChart.newUnitName')} />
        <Tooltip title={t('organizationPermissions.orgChart.editUnit')}><IconButton onClick={() => {
          setEditMode(true);
          setEditNodeName(findNodeById(tree, selectedOrgNodeId)?.name || '');
        }}><EditIcon /></IconButton></Tooltip>
        <Tooltip title={t('organizationPermissions.orgChart.deleteUnit')}><IconButton onClick={() => setDeleteDialogOpen(true)}><DeleteIcon /></IconButton></Tooltip>
        <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
          <DialogTitle>{t('organizationPermissions.orgChart.deleteUnit')}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {t('organizationPermissions.orgChart.deleteConfirm', 'Are you sure you want to delete this unit?')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDeleteDialogOpen(false)}>{t('cancel', 'Cancel')}</Button>
            <Button color="error" onClick={() => { deleteNode(); setDeleteDialogOpen(false); }} autoFocus>{t('delete', 'Delete')}</Button>
          </DialogActions>
        </Dialog>
        <Tooltip title={t('organizationPermissions.orgChart.moveUnit')}><IconButton onClick={() => setMoveTargetId('')}><SwapHorizIcon /></IconButton></Tooltip>
        <select
          value={moveTargetId}
          onChange={e => setMoveTargetId(e.target.value)}
          style={{ marginLeft: 8, minWidth: 120 }}
        >
          <option value="">{t('organizationPermissions.orgChart.selectTarget')}</option>
          {tree && getAllNodes(tree)
            .filter(n => n.id !== selectedId && !isDescendant(tree, selectedId, n.id))
            .map(n => (
              <option key={n.id} value={n.id}>{n.name}</option>
            ))}
        </select>
        <Button
          disabled={!moveTargetId}
          onClick={moveNode}
          style={{ marginLeft: 8 }}
        >
          {t('organizationPermissions.orgChart.moveUnit')}
        </Button>
        {editMode && (
          <>
            <TextField size="small" value={editNodeName} onChange={e => setEditNodeName(e.target.value)} />
            <Button onClick={editNode}>{t('organizationPermissions.orgChart.editUnit')}</Button>
            <Button onClick={() => setEditMode(false)}>{t('cancel')}</Button>
          </>
        )}
      </div>
      <div className="org-chart-tree" style={{ direction: 'ltr' }}>
        <Tree
          key={JSON.stringify(tree)}
          lineWidth={'2px'}
          lineColor={'#bbc'}
          lineBorderRadius={'10px'}
        >
          {renderNode(tree, setSelectedOrgNodeId, selectedOrgNodeId)}
        </Tree>
      </div>
    </div>
  );
};

export default OrgChartSection;
