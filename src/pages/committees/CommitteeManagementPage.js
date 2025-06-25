// إدارة اللجان وفرق العمل: إنشاء اللجان وتحديد أهدافها وصلاحياتها
import React, { useState } from 'react';

const roles = ['رئيس', 'مقرر', 'عضو'];
const initialMember = { name: '', role: 'عضو', email: '' };
const initialForm = {
  name: '',
  objectives: '',
  startDate: '',
  endDate: '',
  permissions: '',
  members: []
};

const CommitteeManagementPage = () => {
  const [form, setForm] = useState(initialForm);
  const [member, setMember] = useState(initialMember);
  const [committees, setCommittees] = useState([]);

  // Navigation (for demo only - replace with your router)
  const goTo = (page) => {
    window.location.href = `/committees/${page}`;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleMemberChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const addMember = (e) => {
    e.preventDefault();
    if (!member.name) return;
    setForm({ ...form, members: [...form.members, { ...member, id: Date.now() }] });
    setMember(initialMember);
  };

  const removeMember = (id) => {
    setForm({ ...form, members: form.members.filter((m) => m.id !== id) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.objectives) return;
    setCommittees([
      ...committees,
      { ...form, id: Date.now() },
    ]);
    setForm(initialForm);
  };

  const { t } = require('react-i18next').useTranslation();
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', direction: 'rtl', textAlign: 'right' }}>
      <h2>{t('committees.management.title')}</h2>
      <div style={{ margin: '16px 0', display: 'flex', gap: 8 }}>
        <button onClick={() => goTo('roles')}>{t('committees.management.assignRoles')}</button>
        <button onClick={() => goTo('meetings')}>{t('committees.management.manageMeetings')}</button>
        <button onClick={() => goTo('docs')}>{t('committees.management.meetingDocs')}</button>
        <button onClick={() => goTo('tasks')}>{t('committees.management.manageTasks')}</button>
        <button onClick={() => goTo('dashboard')}>{t('committees.management.dashboard')}</button>
      </div>
      <form onSubmit={handleSubmit} style={{ marginBottom: 32, background: '#f6f6f6', padding: 16, borderRadius: 8 }}>
        <div style={{ marginBottom: 12 }}>
          <label>{t('committees.management.nameLabel')}</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={t('committees.management.namePlaceholder')}
            style={{ width: '100%', padding: 8 }}
            required
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>{t('committees.management.objectivesLabel')}</label>
          <textarea
            name="objectives"
            value={form.objectives}
            onChange={handleChange}
            placeholder={t('committees.management.objectivesPlaceholder')}
            style={{ width: '100%', padding: 8 }}
            required
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>{t('committees.management.startDateLabel')}</label>
          <input
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
            style={{ width: '100%', padding: 8 }}
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>{t('committees.management.endDateLabel')}</label>
          <input
            type="date"
            name="endDate"
            value={form.endDate}
            onChange={handleChange}
            style={{ width: '100%', padding: 8 }}
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>{t('committees.management.permissionsLabel')}</label>
          <input
            type="text"
            name="permissions"
            value={form.permissions}
            onChange={handleChange}
            placeholder={t('committees.management.permissionsPlaceholder')}
            style={{ width: '100%', padding: 8 }}
          />
        </div>
        <div style={{ marginBottom: 12, background: '#e9f7ef', padding: 12, borderRadius: 6 }}>
          <label>{t('committees.management.membersLabel')}</label>
          <form onSubmit={addMember} style={{ display: 'flex', gap: 8, margin: '8px 0' }}>
            <input
              type="text"
              name="name"
              value={member.name}
              onChange={handleMemberChange}
              placeholder={t('committees.management.memberNamePlaceholder')}
              style={{ flex: 2, padding: 6 }}
              required
            />
            <input
              type="email"
              name="email"
              value={member.email}
              onChange={handleMemberChange}
              placeholder={t('committees.management.memberEmailPlaceholder')}
              style={{ flex: 2, padding: 6 }}
            />
            <select
              name="role"
              value={member.role}
              onChange={handleMemberChange}
              style={{ flex: 1, padding: 6 }}
            >
              {roles.map((r) => (
                <option key={r} value={r}>{t(`committees.management.role.${r}`)}</option>
              ))}
            </select>
            <button type="submit" style={{ flex: 1 }}>{t('committees.management.addMemberButton')}</button>
          </form>
          <ul style={{ margin: 0, padding: 0 }}>
            {form.members.map((m) => (
              <li key={m.id}>{m.name} - {t(`committees.management.role.${m.role}`)} <button onClick={() => removeMember(m.id)}>{t('committees.management.removeMemberButton')}</button></li>
            ))}
          </ul>
        </div>
        <button type="submit" style={{ padding: '8px 24px', background: '#1976d2', color: '#fff', border: 'none', borderRadius: 4 }}>
          {t('committees.management.addCommitteeButton')}
        </button>
      </form>
      <h3>{t('committees.management.addedCommitteesTitle')}</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
        <thead>
          <tr style={{ background: '#e0e0e0' }}>
            <th style={{ padding: 8, border: '1px solid #ccc' }}>{t('committees.management.table.name')}</th>
            <th style={{ padding: 8, border: '1px solid #ccc' }}>{t('committees.management.table.members')}</th>
            <th style={{ padding: 8, border: '1px solid #ccc' }}>{t('committees.management.table.objectives')}</th>
            <th style={{ padding: 8, border: '1px solid #ccc' }}>{t('committees.management.table.period')}</th>
            <th style={{ padding: 8, border: '1px solid #ccc' }}>{t('committees.management.table.permissions')}</th>
          </tr>
        </thead>
        <tbody>
          {committees.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center', padding: 16 }}>
                {t('committees.management.noCommittees')}
              </td>
            </tr>
          ) : (
            committees.map((c) => (
              <tr key={c.id}>
                <td style={{ padding: 8, border: '1px solid #ccc' }}>{c.name}</td>
                <td style={{ padding: 8, border: '1px solid #ccc' }}>{c.members.map(m => m.name + ' (' + t(`committees.management.role.${m.role}`) + ')').join(', ')}</td>
                <td style={{ padding: 8, border: '1px solid #ccc' }}>{c.objectives}</td>
                <td style={{ padding: 8, border: '1px solid #ccc' }}>{c.startDate} - {c.endDate}</td>
                <td style={{ padding: 8, border: '1px solid #ccc' }}>{c.permissions}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CommitteeManagementPage;
