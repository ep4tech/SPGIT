// إدارة الاجتماعات: جدولة الاجتماعات وربطها باللجان أو الفرق المعنية
import React, { useState } from 'react';

const demoCommittees = [
  { id: 1, name: 'لجنة الجودة', members: ['أحمد', 'سارة', 'محمد'] },
  { id: 2, name: 'فريق العمل التقني', members: ['ليلى', 'خالد'] }
];

const MeetingsPage = () => {
  const [meetings, setMeetings] = useState([]);
  const [form, setForm] = useState({
    committeeId: demoCommittees[0].id,
    date: '',
    time: '',
    invited: [],
    attendance: {},
    notes: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleCommitteeChange = e => {
    const committeeId = Number(e.target.value);
    setForm({ ...form, committeeId, invited: demoCommittees.find(c => c.id === committeeId).members });
  };
  const handleAttendance = (member, status) => {
    setForm({ ...form, attendance: { ...form.attendance, [member]: status } });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setMeetings([
      ...meetings,
      { ...form, id: Date.now() }
    ]);
    setForm({
      committeeId: demoCommittees[0].id,
      date: '', time: '', invited: demoCommittees[0].members, attendance: {}, notes: ''
    });
  };

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', direction: 'rtl', textAlign: 'right' }}>
      <h2>إدارة الاجتماعات</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: 24, background: '#f6f6f6', padding: 16, borderRadius: 8 }}>
        <div style={{ marginBottom: 10 }}>
          <label>اللجنة/الفريق: </label>
          <select name="committeeId" value={form.committeeId} onChange={handleCommitteeChange} style={{ padding: 8 }}>
            {demoCommittees.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>تاريخ الاجتماع: </label>
          <input type="date" name="date" value={form.date} onChange={handleChange} style={{ padding: 8 }} />
          <label style={{ marginRight: 12 }}>{t('committees.meetings.timeLabel')} </label>
          <input type="time" name="time" value={form.time} onChange={handleChange} style={{ padding: 8 }} />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>{t('committees.meetings.invitedMembersLabel')}:</label>
          <ul style={{ margin: 0, padding: 0 }}>
            {demoCommittees.find(c => c.id === Number(form.committeeId)).members.map(m => (
              <li key={m}>
                {m}
                <select
                  value={form.attendance[m] || ''}
                  onChange={e => handleAttendance(m, e.target.value)}
                  style={{ marginRight: 8 }}
                >
                  <option value="">{t('committees.meetings.attendancePlaceholder')}</option>
                  <option value="حاضر">{t('committees.meetings.attendancePresent')}</option>
                  <option value="اعتذار">{t('committees.meetings.attendanceAbsent')}</option>
                </select>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>{t('committees.meetings.notesLabel')} </label>
          <textarea name="notes" value={form.notes} onChange={handleChange} style={{ width: '100%', padding: 8 }} />
        </div>
        <button type="submit" style={{ padding: '8px 24px', background: '#1976d2', color: '#fff', border: 'none', borderRadius: 4 }}>{t('committees.meetings.addMeetingButton')}</button>
      </form>
      <h3>{t('committees.meetings.scheduledMeetingsTitle')}</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
        <thead>
          <tr style={{ background: '#e0e0e0' }}>
            <th style={{ padding: 8, border: '1px solid #ccc' }}>{t('committees.meetings.tableHeaderCommittee')}</th>
            <th style={{ padding: 8, border: '1px solid #ccc' }}>{t('committees.meetings.tableHeaderDate')}</th>
            <th style={{ padding: 8, border: '1px solid #ccc' }}>{t('committees.meetings.tableHeaderTime')}</th>
            <th style={{ padding: 8, border: '1px solid #ccc' }}>{t('committees.meetings.tableHeaderAttendance')}</th>
            <th style={{ padding: 8, border: '1px solid #ccc' }}>{t('committees.meetings.tableHeaderAbsent')}</th>
            <th style={{ padding: 8, border: '1px solid #ccc' }}>{t('committees.meetings.tableHeaderNotes')}</th>
          </tr>
        </thead>
        <tbody>
          {meetings.length === 0 ? (
            <tr><td colSpan="6" style={{ textAlign: 'center', padding: 16 }}>{t('committees.meetings.noMeetingsFound')}</td></tr>
          ) : meetings.map(m => (
            <tr key={m.id}>
              <td style={{ padding: 8, border: '1px solid #ccc' }}>{demoCommittees.find(c => c.id === Number(m.committeeId)).name}</td>
              <td style={{ padding: 8, border: '1px solid #ccc' }}>{m.date}</td>
              <td style={{ padding: 8, border: '1px solid #ccc' }}>{m.time}</td>
              <td style={{ padding: 8, border: '1px solid #ccc' }}>{Object.entries(m.attendance).filter(([_, v]) => v === 'حاضر').map(([k]) => k).join(', ')}</td>
              <td style={{ padding: 8, border: '1px solid #ccc' }}>{Object.entries(m.attendance).filter(([_, v]) => v === 'اعتذار').map(([k]) => k).join(', ')}</td>
              <td style={{ padding: 8, border: '1px solid #ccc' }}>{m.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}; // Removed any duplicate or stray icon rendering here.

export default MeetingsPage;
