// لوحات المتابعة والتقارير
import React from 'react';

const demoTasks = [
  { id: 1, description: 'إعداد تقرير الجودة', assignedTo: 'أحمد', dueDate: '2025-06-23', priority: 'عالية', status: 'منجزة' },
  { id: 2, description: 'تجهيز العرض التقني', assignedTo: 'ليلى', dueDate: '2025-06-22', priority: 'متوسطة', status: 'قيد التنفيذ' },
  { id: 3, description: 'تحديث قاعدة البيانات', assignedTo: 'خالد', dueDate: '2025-06-20', priority: 'عالية', status: 'متأخرة' },
  { id: 4, description: 'مراجعة السياسات', assignedTo: 'سارة', dueDate: '2025-06-25', priority: 'منخفضة', status: 'قيد التنفيذ' }
];

const DashboardPage = () => {
  const total = demoTasks.length;
  const done = demoTasks.filter(t => t.status === 'منجزة').length;
  const late = demoTasks.filter(t => t.status === 'متأخرة').length;
  const inProgress = demoTasks.filter(t => t.status === 'قيد التنفيذ').length;

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', direction: 'rtl', textAlign: 'right' }}>
      <h2>{t('committees.dashboard.title')}</h2>
      <div style={{ display: 'flex', gap: 24, margin: '24px 0' }}>
        <div style={{ background: '#e3f2fd', padding: 16, borderRadius: 8, flex: 1 }}>
          <div>{t('committees.dashboard.stats.inProgress')}</div>
          <div style={{ fontWeight: 'bold', fontSize: 24 }}>{inProgress}</div>
        </div>
        <div style={{ background: '#ffcdd2', padding: 16, borderRadius: 8, flex: 1 }}>
          <div>{t('committees.dashboard.stats.late')}</div>
          <div style={{ fontWeight: 'bold', fontSize: 24 }}>{late}</div>
        </div>
        <div style={{ background: '#c8e6c9', padding: 16, borderRadius: 8, flex: 1 }}>
          <div>{t('committees.dashboard.stats.completed')}</div>
          <div style={{ fontWeight: 'bold', fontSize: 24 }}>{done}</div>
        </div>
        <div style={{ background: '#b3e5fc', padding: 16, borderRadius: 8, flex: 1 }}>
          <div>{t('committees.dashboard.stats.total')}</div>
          <div style={{ fontWeight: 'bold', fontSize: 24 }}>{total}</div>
        </div>
      </div>
      <div style={{ color: '#d32f2f', marginBottom: 16 }}>
        <b>{t('committees.dashboard.alerts.title')}</b><br />
        {t('committees.dashboard.alerts.message')}
      </div>
      <table style={{ width: '100%', background: '#fff', borderRadius: 8, borderCollapse: 'collapse', marginBottom: 24 }}>
        <thead>
          <tr style={{ background: '#f5f5f5' }}>
            <th style={{ padding: 8, border: '1px solid #ccc' }}>{t('committees.dashboard.table.headers.description')}</th>
            <th style={{ padding: 8, border: '1px solid #ccc' }}>{t('committees.dashboard.table.headers.assignedTo')}</th>
            <th style={{ padding: 8, border: '1px solid #ccc' }}>{t('committees.dashboard.table.headers.dueDate')}</th>
            <th style={{ padding: 8, border: '1px solid #ccc' }}>{t('committees.dashboard.table.headers.priority')}</th>
            <th style={{ padding: 8, border: '1px solid #ccc' }}>{t('committees.dashboard.table.headers.status')}</th>
          </tr>
        </thead>
        <tbody>
          {demoTasks.map(t => (
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

export default DashboardPage;
