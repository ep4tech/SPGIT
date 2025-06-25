// (file cleared for rebuild)
  const [selectedOrgNodeId, setSelectedOrgNodeId] = React.useState('1');
  return (
    <div className="org-permissions-container">
      <div className="org-permissions-right">
        <OrgChartSection selectedOrgNodeId={selectedOrgNodeId} setSelectedOrgNodeId={setSelectedOrgNodeId} />
      </div>
      <div className="org-permissions-left" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ flex: 1, overflow: 'auto', borderBottom: '1px solid #eee' }}>
          <PermissionsTreeSection selectedOrgNodeId={selectedOrgNodeId} />
        </div>
        <div style={{ flex: 1, overflow: 'auto' }}>
          <RegulationsSection selectedOrgNodeId={selectedOrgNodeId} />
        </div>
      </div>
    </div>
  );
};

export default OrganizationPermissionsPage;
