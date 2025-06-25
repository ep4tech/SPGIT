// إدارة المهام الناتجة عن الاجتماعات
import React, { useState } from 'react';

const demoMembers = ['أحمد', 'سارة', 'محمد', 'ليلى', 'خالد'];
const priorities = ['عالية', 'متوسطة', 'منخفضة'];
const statuses = ['قيد التنفيذ', 'منجزة', 'متأخرة'];

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    description: '',
    assignedTo: demoMembers[0],
    dueDate: '',
    priority: priorities[0],
    status: statuses[0]
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    setTasks([
      ...tasks,
      { ...form, id: Date.now() }
    ]);
    setForm({ description: '', assignedTo: demoMembers[0], dueDate: '', priority: priorities[0], status: statuses[0] });
  };

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', direction: 'rtl', textAlign: 'right' }}>
      <h2>{t('committees.tasks.title')}</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: 24, background: '#f6f6f6', padding: 16, borderRadius: 8 }}>
        <div style={{ marginBottom: 10 }}>
          <label>{t('committees.tasks.descriptionLabel')}:</label>
          <input type="text" name="description" value={form.description} onChange={handleChange} style={{ width: '100%', padding: 8 }} placeholder={t('committees.tasks.descriptionPlaceholder')} required />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>{t('committees.tasks.assignedToLabel')}:</label>
          <select name="assignedTo" value={form.assignedTo} onChange={handleChange} style={{ padding: 8 }}>
            {demoMembers.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>{t('committees.tasks.dueDateLabel')}:</label>
          <input type="date" name="dueDate" value={form.dueDate} onChange={handleChange} style={{ padding: 8 }} />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>{t('committees.tasks.priorityLabel')}:</label>
          <select name="priority" value={form.priority} onChange={handleChange} style={{ padding: 8 }}>
            {priorities.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>{t('committees.tasks.statusLabel')}:</label>
          <select name="status" value={form.status} onChange={handleChange} style={{ padding: 8 }}>
            {statuses.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <button type="submit" style={{ padding: '8px 24px', background: '#1976d2', color: '#fff', border: 'none', borderRadius: 4 }}>{t('committees.tasks.addTaskButton')}</button>
      </form>
      <h3>{t('committees.tasks.tasksTableTitle')}</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
        <thead>
          <tr style={{ background: '#e0e0e0' }}>
            <th style={{ padding: 8, border: '1px solid #ccc' }}>{t('committees.tasks.tasksTable.descriptionHeader')}</th>
            <th style={{ padding: 8, border: '1px solid #ccc' }}>{t('committees.tasks.tasksTable.assignedToHeader')}</th>
            <th style={{ padding: 8, border: '1px solid #ccc' }}>{t('committees.tasks.tasksTable.dueDateHeader')}</th>
            <th style={{ padding: 8, border: '1px solid #ccc' }}>{t('committees.tasks.tasksTable.priorityHeader')}</th>
            <th style={{ padding: 8, border: '1px solid #ccc' }}>{t('committees.tasks.tasksTable.statusHeader')}</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length === 0 ? (
            <tr><td colSpan="5" style={{ textAlign: 'center', padding: 16 }}>{t('committees.tasks.noTasksMessage')}</td></tr>
          ) : tasks.map(t => (
            <tr key={t.id}>
              <td style={{ padding: 8, border: '1px solid #ccc' }}>{t.description}</td>
              <td style={{ padding: 8, border: '1px solid #ccc' }}>{t.assignedTo}</td>
              <td style={{ padding: 8, border: '1px solid #ccc' }}>{t.dueDate}</td>
              <td style={{ padding: 8, border: '1px solid #ccc' }}>{t.priority}</td>
              <td style={{ padding: 8, border: '1px solid #ccc' }}>{t.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TasksPage;
