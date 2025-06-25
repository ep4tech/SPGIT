// OrganizationPage.js
// الصفحة الرئيسية للهيكل التنظيمي - بناء أولي

import React, { useState } from 'react';
import { Box, Grid, Paper, Typography, Divider, IconButton, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

import OrgChartTree from './OrgChartTree';
import PermissionsTree from './PermissionsTree';
import RegulationsList from './RegulationsList';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

// Helper to deeply find and update a node by id
function updateNodeById(tree, id, updater) {
  if (!tree) return tree;
  if (tree.id === id) return updater(tree);
  return {
    ...tree,
    children: (tree.children || []).map(child => updateNodeById(child, id, updater)),
  };
}

const initialTree = {
  id: '1',
  name: 'الرئيس التنفيذي',
  permissions: [],
  regulations: [],
  children: [
    { id: '2', name: 'الإدارة المالية', permissions: [], regulations: [], children: [] },
    { id: '3', name: 'إدارة الموارد البشرية', permissions: [], regulations: [], children: [] },
  ],
};

const OrganizationPage = () => {
  const { i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';
  const [orgTree, setOrgTree] = useState(initialTree);
  const [selectedNodeId, setSelectedNodeId] = useState('1');
  const [editingName, setEditingName] = useState(false);
  const [nameValue, setNameValue] = useState('');
  const [selectedPermissionId, setSelectedPermissionId] = useState(null);

  // Helper to find node
  function findNodeById(node, id) {
    if (!node) return null;
    if (node.id === id) return node;
    for (let child of (node.children || [])) {
      const found = findNodeById(child, id);
      if (found) return found;
    }
    return null;
  }

  const selectedOrgNode = findNodeById(orgTree, selectedNodeId) || orgTree;

  // When org chart node changes, clear selected permission
  const handleSelectOrgNode = (nodeId) => {
    setSelectedNodeId(nodeId);
    setSelectedPermissionId(null);
  }
  // Inline edit for name
  const handleEditName = () => {
    setEditingName(true);
    setNameValue(selectedOrgNode.name);
  };
  const handleSaveName = () => {
    setOrgTree(updateNodeById(orgTree, selectedNodeId, node => ({ ...node, name: nameValue })));
    setEditingName(false);
  };

  // Permissions handlers
  const handlePermissionsChange = (newPermissions) => {
    setOrgTree(updateNodeById(orgTree, selectedNodeId, node => ({ ...node, permissions: newPermissions })));
  };

  // Regulations handlers
  const handleRegulationsChange = (newRegulations) => {
    setOrgTree(updateNodeById(orgTree, selectedNodeId, node => ({ ...node, regulations: newRegulations })));
  };

  // Org chart change handler
  const handleOrgTreeChange = (newTree) => {
    setOrgTree(newTree);
  };

  return (
    <Box sx={{ direction: isRtl ? 'rtl' : 'ltr', minHeight: '100vh', background: '#f4f6fa', px: 4, pb: 4 }}>
      <Grid container spacing={2}>
        {isRtl ? (
          <React.Fragment>
            {/* Details panel LEFT in RTL */}
            <Grid item xs={12} md={3} lg={3} order={1}>
              <Paper elevation={3} sx={{ height: '100%', p: 2, display: 'flex', flexDirection: 'column', borderRadius: 3, boxShadow: 3 }}>
                {/* القسم العلوي: تفاصيل النقطة المختارة + إضافة صلاحية */}
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    تفاصيل النقطة المختارة
                  </Typography>
                  {/* تفاصيل النقطة المختارة */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    {editingName ? (
                      <>
                        <TextField size="small" value={nameValue} onChange={e => setNameValue(e.target.value)} sx={{ width: 180 }} />
                        <IconButton color="primary" onClick={handleSaveName}><SaveIcon /></IconButton>
                      </>
                    ) : (
                      <>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{selectedOrgNode.name}</Typography>
                        <IconButton color="info" onClick={handleEditName}><EditIcon /></IconButton>
                      </>
                    )}
                  </Box>
                  <Box sx={{ color: 'text.secondary', fontSize: 14, mb: 1 }}>
                    <span>معرف: {selectedOrgNode.id}</span> | <span>عدد الوحدات الفرعية: {selectedOrgNode.children.length}</span> | <span>الصلاحيات: {selectedOrgNode.permissions.length}</span> | <span>اللوائح: {selectedOrgNode.regulations.length}</span>
                  </Box>
                </Box>
                <Divider />
                {/* القسم الأوسط: شجرة الصلاحيات */}
                <Box sx={{ flex: 1, my: 2 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    شجرة الصلاحيات
                  </Typography>
                  <PermissionsTree
                    permissions={selectedOrgNode.permissions}
                    onChange={handlePermissionsChange}
                    selectedPermissionId={selectedPermissionId}
                    setSelectedPermissionId={setSelectedPermissionId}
                  />  
                </Box>
                <Divider />
                {/* القسم السفلي: اللوائح */}
                <Box sx={{ mt: 2 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    اللوائح
                  </Typography>
                  <RegulationsList regulations={selectedOrgNode.regulations} onChange={handleRegulationsChange} />
                </Box>
              </Paper>
            </Grid>
            {/* Org chart RIGHT in RTL */}
            <Grid item xs={12} md={9} lg={9} order={2}>
              <Paper elevation={3} sx={{ height: '100%', p: 2, borderRadius: 3, boxShadow: 3 }}>
                <OrgChartTree
                  orgTree={orgTree}
                  setOrgTree={setOrgTree}
                  selectedNodeId={selectedNodeId}
                  setSelectedNodeId={handleSelectOrgNode}
                />
              </Paper>
            </Grid>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* Org chart LEFT in LTR */}
            <Grid item xs={12} md={9} lg={9} order={1}>
              <Paper elevation={3} sx={{ height: '100%', p: 2, borderRadius: 3, boxShadow: 3 }}>
                <OrgChartTree
                  orgTree={orgTree}
                  setOrgTree={setOrgTree}
                  selectedNodeId={selectedNodeId}
                  setSelectedNodeId={handleSelectOrgNode}
                />
              </Paper>
            </Grid>
            {/* Details panel RIGHT in LTR */}
            <Grid item xs={12} md={3} lg={3} order={2}>
              <Paper elevation={3} sx={{ height: '100%', p: 2, display: 'flex', flexDirection: 'column', borderRadius: 3, boxShadow: 3 }}>
                {/* القسم العلوي: تفاصيل النقطة المختارة + إضافة صلاحية */}
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    تفاصيل النقطة المختارة
                  </Typography>
                  {/* تفاصيل النقطة المختارة */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    {editingName ? (
                      <>
                        <TextField size="small" value={nameValue} onChange={e => setNameValue(e.target.value)} sx={{ width: 180 }} />
                        <IconButton color="primary" onClick={handleSaveName}><SaveIcon /></IconButton>
                      </>
                    ) : (
                      <>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{selectedOrgNode.name}</Typography>
                        <IconButton color="info" onClick={handleEditName}><EditIcon /></IconButton>
                      </>
                    )}
                  </Box>
                  <Box sx={{ color: 'text.secondary', fontSize: 14, mb: 1 }}>
                    <span>معرف: {selectedOrgNode.id}</span> | <span>عدد الوحدات الفرعية: {selectedOrgNode.children.length}</span> | <span>الصلاحيات: {selectedOrgNode.permissions.length}</span> | <span>اللوائح: {selectedOrgNode.regulations.length}</span>
                  </Box>
                </Box>
                <Divider />
                {/* القسم الأوسط: شجرة الصلاحيات */}
                <Box sx={{ flex: 1, my: 2 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    شجرة الصلاحيات
                  </Typography>
                  <PermissionsTree
                    permissions={selectedOrgNode.permissions}
                    onChange={handlePermissionsChange}
                    selectedPermissionId={selectedPermissionId}
                    setSelectedPermissionId={setSelectedPermissionId}
                  />
                </Box>
                <Divider />
                {/* القسم السفلي: اللوائح */}
                <Box sx={{ mt: 2 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    اللوائح
                  </Typography>
                  <RegulationsList regulations={selectedOrgNode.regulations} onChange={handleRegulationsChange} />
                </Box>
              </Paper>
            </Grid>
          </React.Fragment>
        )}
      </Grid>
    </Box>
  );
};

export default OrganizationPage;