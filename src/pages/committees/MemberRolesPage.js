// تعيين الأعضاء وتحديد أدوارهم (رئيس، مقرر، عضو...)
import React, { useState } from 'react';

const demoCommittees = [
  {
    id: 1,
    name: 'لجنة الجودة',
    members: [
      { id: 1, name: 'أحمد', role: 'رئيس' },
      { id: 2, name: 'سارة', role: 'مقرر' },
      { id: 3, name: 'محمد', role: 'عضو' },
    ]
  },
  {
    id: 2,
    name: 'فريق العمل التقني',
    members: [
      { id: 4, name: 'ليلى', role: 'رئيس' },
      { id: 5, name: 'خالد', role: 'عضو' },
    ]
  }
];

const roles = ['رئيس', 'مقرر', 'عضو'];

const MemberRolesPage = () => {
  const { t } = useTranslation();
  const [selectedCommitteeId, setSelectedCommitteeId] = useState(demoCommittees[0].id);
  const [committees, setCommittees] = useState(demoCommittees);

  const committee = committees.find(c => c.id === selectedCommitteeId);

  const handleRoleChange = (memberId, newRole) => {
    setCommittees(committees.map(c =>
      c.id !== selectedCommitteeId ? c : {
        ...c,
        members: c.members.map(m =>
          m.id !== memberId ? m : { ...m, role: newRole }
        )
      }
    ));
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', direction: 'rtl', textAlign: 'right' }}>
      <h2>{t('committees.roles.title')}</h2>
      <div style={{ margin: '16px 0' }}>
        <label>{t('committees.roles.selectCommitteeLabel')} </label>
        <select
          value={selectedCommitteeId}
          onChange={e => setSelectedCommitteeId(Number(e.target.value))}
          style={{ padding: 8, margin: '0 8px' }}
        >
          {committees.map(c => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
        <thead>
          <tr style={{ background: '#e0e0e0' }}>
            <th style={{ padding: 8, border: '1px solid #ccc' }}>{t('committees.roles.memberNameHeader')}</th>
            <th style={{ padding: 8, border: '1px solid #ccc' }}>{t('committees.roles.roleHeader')}</th>
          </tr>
        </thead>
        <tbody>
          {committee.members.map(m => (
            <tr key={m.id}>
              <td style={{ padding: 8, border: '1px solid #ccc' }}>{m.name}</td>
              <td style={{ padding: 8, border: '1px solid #ccc' }}>
                <select
                  value={m.role}
                  onChange={e => handleRoleChange(m.id, e.target.value)}
                  style={{ padding: 6 }}
                >
                  {roles.map(r => <option key={r} value={r}>{t(`committees.roles.${r.toLowerCase()}`)}</option>)}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}; // Removed any duplicate or stray icon rendering here.

export default MemberRolesPage;
