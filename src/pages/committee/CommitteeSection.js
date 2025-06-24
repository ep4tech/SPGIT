import React, { useState, createContext, useContext } from 'react';

const CommitteeContext = createContext();

export const useCommittee = () => useContext(CommitteeContext);

export const CommitteeSection = ({ children }) => {
  const [committees, setCommittees] = useState([
    {
      id: 1,
      name: 'Steering Committee',
      type: 'دائم',
      status: 'نشط',
      membersCount: 5,
      members: [
        { id: 1, name: 'Ali Saleh', role: 'Chair' },
        { id: 2, name: 'Sara Mansour', role: 'Member' }
      ],
      assignments: [
        { id: 1, title: 'Prepare Report', assignee: 'Ali Saleh' }
      ],
      meetings: [
        { id: 1, topic: 'Q2 Planning', date: '2025-07-01' }
      ],
      feedback: [
        { id: 1, author: 'Sara Mansour', comment: 'Great progress' }
      ],
      documents: [
        { id: 1, title: 'Charter', fileName: 'charter.pdf' }
      ]
    },
    {
      id: 2,
      name: 'Project Alpha Review',
      type: 'مؤقت',
      status: 'نشط',
      membersCount: 3,
      members: [],
      assignments: [],
      meetings: [],
      feedback: [],
      documents: []
    },
    {
      id: 3,
      name: 'Ethics Board',
      type: 'دائم',
      status: 'غير نشط',
      membersCount: 7,
      members: [],
      assignments: [],
      meetings: [],
      feedback: [],
      documents: []
    }
  ]);

  // CRUD functions for committees and related entities
  const addCommittee = (committee) => {
    setCommittees(prev => [
      ...prev,
      {
        ...committee,
        id: Date.now(),
        members: [],
        assignments: [],
        meetings: [],
        feedback: [],
        documents: [],
      }
    ]);
  };
  const editCommittee = (id, updatedCommittee) => {
    setCommittees(prev => prev.map(c => c.id === id ? { ...c, ...updatedCommittee } : c));
  };
  const deleteCommittee = (id) => {
    setCommittees(prev => prev.filter(c => c.id !== id));
  };
  // Add similar CRUD for members, assignments, meetings, feedback, documents as in App.js

  // ... (copy the rest of the CRUD handlers from App.js)

  return (
    <CommitteeContext.Provider value={{ committees, addCommittee, editCommittee, deleteCommittee, setCommittees }}>
      {children}
    </CommitteeContext.Provider>
  );
};

export default CommitteeSection;
