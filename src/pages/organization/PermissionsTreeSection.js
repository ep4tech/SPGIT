// (file cleared for rebuild)

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
              { id: 'f1', name: 'نموذج 1', type: 'form', children: [] },
            ],
          },
        ],
      },
    ],
  },
];

const typeIcon = {
  permission: <SecurityIcon color="primary" />,
  task: <AssignmentIcon color="secondary" />,
  procedure: <BuildIcon color="action" />,
  form: <DescriptionIcon color="success" />,
};

function renderTree(nodes, onEdit, onDelete, onAdd, selectedNodeId, editingNodeId, editValue, setEditValue, onEditSave, onEditCancel) {
  return nodes.map(node => (
    <TreeItem key={node.id} nodeId={node.id} label={
      <span style={{ display: 'flex', alignItems: 'center' }}>
        {typeIcon[node.type]} {' '}
        {editingNodeId === node.id ? (
          <>
            <input
              value={editValue}
              onChange={e => setEditValue(e.target.value)}
              style={{ marginRight: 4 }}
            />
            <button onClick={() => onEditSave(node.id)} style={{ marginRight: 2 }}>✔</button>
            <button onClick={onEditCancel}>✖</button>
          </>
        ) : (
          <>
            {node.name}
            {selectedNodeId === node.id && (
              <>
                <IconButton size="small" onClick={e => { e.stopPropagation(); onAdd(node); }}><AddIcon fontSize="small" /></IconButton>
                <IconButton size="small" onClick={e => { e.stopPropagation(); setDeleteDialogOpen(true); setDeleteTarget(node.id); }}><DeleteIcon fontSize="small" /></IconButton>


                <IconButton size="small" onClick={e => { e.stopPropagation(); onEdit(node.id, node.name); }}>✎</IconButton>
              </>
            )}
          </>
        )}
      </span>
    }>
      {node.children && node.children.length > 0 ? renderTree(node.children, onEdit, onDelete, onAdd, selectedNodeId, editingNodeId, editValue, setEditValue, onEditSave, onEditCancel) : null}
    </TreeItem>
  ));
}

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

const PermissionsTreeSection = (props) => {
  // Helper function to find node name by id
  function findNodeName(nodes, id) {
    for (const node of nodes) {
      if (node.id === id) return node.name;
      if (node.children) {
        const result = findNodeName(node.children, id);
        if (result) return result;
      }
    }
    return null;
  }
  console.log('======>> We are in pages/organization/PermissionsTreeSection.js');
  const { t, i18n } = useTranslation();
  // Permissions are now stored per org node
  const [permissionsByOrg, setPermissionsByOrg] = useState({
    '1': initialTree,
  });
  const tree = permissionsByOrg[props.selectedOrgNodeId] || [];
  const [inputValue, setInputValue] = useState('');
  const [editingNodeId, setEditingNodeId] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [selectedNodeType, setSelectedNodeType] = useState(null);

  // Context-sensitive add
  function handleAdd() {
    if (!inputValue.trim()) return;
    // Helper to add a child to the correct node
    function addChild(nodes, parentId, child) {
      return nodes.map(node => {
        if (node.id === parentId) {
          return { ...node, children: [...(node.children || []), child] };
        } else if (node.children) {
          return { ...node, children: addChild(node.children, parentId, child) };
        }
        return node;
      });
    }
    let newTree;
    if (!selectedNodeId) {
      // Add a new permission at root
      newTree = [
        ...tree,
        {
          id: 'p' + Date.now(),
          name: inputValue,
          type: 'permission',
          children: [],
        },
      ];
    } else {
      // Add child of appropriate type
      let typeToAdd = null;
      if (selectedNodeType === 'permission') typeToAdd = 'task';
      else if (selectedNodeType === 'task') typeToAdd = 'procedure';
      else if (selectedNodeType === 'procedure') typeToAdd = 'form';
      if (!typeToAdd) return; // Don't add under form
      const newNode = {
        id: typeToAdd[0] + Date.now(),
        name: inputValue,
        type: typeToAdd,
        children: [],
      };
      newTree = addChild(tree, selectedNodeId, newNode);
    }
    setPermissionsByOrg(prev => ({
      ...prev,
      [props.selectedOrgNodeId]: newTree
    }));
    setInputValue('');
  }

  // Edit logic
  function handleEdit(nodeId, nodeName) {
    setEditingNodeId(nodeId);
    setEditValue(nodeName);
  }
  function handleEditSave(nodeId) {
    function updateNode(nodes) {
      return nodes.map(node => {
        if (node.id === nodeId) {
          return { ...node, name: editValue };
        } else if (node.children) {
          return { ...node, children: updateNode(node.children) };
        }
        return node;
      });
    }
    setTree(prev => updateNode(prev));
    setEditingNodeId(null);
    setEditValue('');
  }
  function handleEditCancel() {
    setEditingNodeId(null);
    setEditValue('');
  }
  // Delete logic
  function handleDelete(nodeId) {
    function deleteNode(nodes) {
      return nodes.filter(node => {
        if (node.id === nodeId) return false;
        if (node.children) node.children = deleteNode(node.children);
        return true;
      });
    }
    setTree(prev => deleteNode(prev));
  }

  return (
    <div className="permissions-tree-section">
      <div className="permissions-tree-toolbar">
        <TextField size="small" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder={t('organizationPermissions.permissionsTree.namePlaceholder')}
          onKeyDown={e => { if (e.key === 'Enter') handleAdd(); }}
          dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
        />
      </div>
      <TreeView 
        defaultCollapseIcon={<span>-</span>} 
        defaultExpandIcon={<span>+</span>}
        selected={selectedNodeId}
        onNodeSelect={(e, nodeId) => {
          function findNode(nodes, id) {
            for (let n of nodes) {
              if (n.id === id) return n;
              if (n.children) {
                const found = findNode(n.children, id);
                if (found) return found;
              }
            }
            return null;
          }
          const node = findNode(tree, nodeId);
          setSelectedNodeId(nodeId);
          setSelectedNodeType(node ? node.type : null);
        }}
      >
        {renderTree(
          tree,
          handleEdit,
          handleDelete,
          (node) => {
            // Add a child node of the correct type under the selected node
            if (!inputValue.trim()) return;
            function addChild(nodes, parentId, child) {
              return nodes.map(node => {
                if (node.id === parentId) {
                  return { ...node, children: [...(node.children || []), child] };
                } else if (node.children) {
                  return { ...node, children: addChild(node.children, parentId, child) };
                }
                return node;
              });
            }
            let typeToAdd = 'permission';
            if (node.type === 'permission') typeToAdd = 'task';
            else if (node.type === 'task') typeToAdd = 'procedure';
            else if (node.type === 'procedure') typeToAdd = 'form';
            const newNode = {
              id: typeToAdd[0] + Date.now(),
              name: inputValue,
              type: typeToAdd,
              children: [],
            };
            setTree(prev => addChild(prev, node.id, newNode));
            setInputValue('');
          },
          selectedNodeId,
          editingNodeId,
          editValue,
          setEditValue,
          handleEditSave,
          handleEditCancel
        )}
      </TreeView>
    </div>
  );
};

export default PermissionsTreeSection;
