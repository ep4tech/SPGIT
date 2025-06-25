// توثيق الاجتماعات: تسجيل محضر الاجتماع وأرشفة المحاضر وإرفاق الملفات
import React, { useState } from 'react';

const demoMeetings = [
  { id: 1, title: 'اجتماع لجنة الجودة', date: '2025-06-20' },
  { id: 2, title: 'اجتماع الفريق التقني', date: '2025-06-22' }
];

const MeetingDocsPage = () => {
  const [docs, setDocs] = useState([]);
  const [form, setForm] = useState({ meetingId: demoMeetings[0].id, minutes: '', file: null });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFile = e => {
    setForm({ ...form, file: e.target.files[0] });
  };
  const handleSubmit = e => {
    e.preventDefault();
    setDocs([
      ...docs,
      { ...form, id: Date.now(), fileName: form.file ? form.file.name : '' }
    ]);
    setForm({ meetingId: demoMeetings[0].id, minutes: '', file: null });
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', direction: 'rtl', textAlign: 'right' }}>
      <h2>{t('committees.meetingDocs.title')}</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: 24, background: '#f6f6f6', padding: 16, borderRadius: 8 }}>
        <div style={{ marginBottom: 10 }}>
          <label>{t('committees.meetingDocs.meetingLabel')}:</label>
          <select name="meetingId" value={form.meetingId} onChange={handleChange} style={{ padding: 8 }}>
            {demoMeetings.map(m => <option key={m.id} value={m.id}>{m.title} ({m.date})</option>)}
          </select>
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>{t('committees.meetingDocs.minutesLabel')}:</label>
          <textarea name="minutes" value={form.minutes} onChange={handleChange} style={{ width: '100%', padding: 8 }} required placeholder={t('committees.meetingDocs.minutesPlaceholder')} />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>{t('committees.meetingDocs.fileLabel')}:</label>
          <input type="file" name="file" onChange={handleFile} />
        </div>
        <button type="submit" style={{ padding: '8px 24px', background: '#1976d2', color: '#fff', border: 'none', borderRadius: 4 }}>{t('committees.meetingDocs.uploadButton')}</button>
      </form>
      <h3>{t('committees.meetingDocs.docsTitle')}</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
        <thead>
          <tr style={{ background: '#e0e0e0' }}>
            <th style={{ padding: 8, border: '1px solid #ccc' }}>{t('committees.meetingDocs.meetingHeader')}</th>
            <th style={{ padding: 8, border: '1px solid #ccc' }}>{t('committees.meetingDocs.minutesHeader')}</th>
            <th style={{ padding: 8, border: '1px solid #ccc' }}>{t('committees.meetingDocs.fileHeader')}</th>
          </tr>
        </thead>
        <tbody>
          {docs.length === 0 ? (
            <tr><td colSpan="3" style={{ textAlign: 'center', padding: 16 }}>{t('committees.meetingDocs.noDocsMessage')}</td></tr>
          ) : docs.map(d => (
            <tr key={d.id}>
              <td style={{ padding: 8, border: '1px solid #ccc' }}>{demoMeetings.find(m => m.id === Number(d.meetingId)).title}</td>
              <td style={{ padding: 8, border: '1px solid #ccc' }}>{d.minutes}</td>
              <td style={{ padding: 8, border: '1px solid #ccc' }}>{d.fileName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MeetingDocsPage;
