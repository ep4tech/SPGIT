import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CommitteeOverviewPage from './CommitteeOverviewPage';
import CommitteeDetailsPage from './CommitteeDetailsPage';
import CommitteeMembersPage from './CommitteeMembersPage';
import CommitteeAssignmentsPage from './CommitteeAssignmentsPage';
import CommitteeMeetingsPage from './CommitteeMeetingsPage';
import CommitteeFeedbackPage from './CommitteeFeedbackPage';
import CommitteeDocumentsPage from './CommitteeDocumentsPage';
import MeetingDetailsPage from './MeetingDetailsPage';

import { useParams } from 'react-router-dom';

const CommitteeDetailsRoutes = ({
  committees,
  editCommittee,
  deleteCommittee,
  addMember,
  editMember,
  deleteMember,
  addAssignment,
  editAssignment,
  deleteAssignment,
  addMeeting,
  editMeeting,
  deleteMeeting,
  addFeedback,
  editFeedback,
  deleteFeedback,
  addDocument,
  editDocument,
  deleteDocument
}) => {
  const { committeeId } = useParams();
  const committee = committees.find(c => String(c.id) === String(committeeId));

  return (
    <Routes>
      <Route index element={<CommitteeOverviewPage committee={committee} />} />
      <Route path="overview" element={<CommitteeOverviewPage committee={committee} />} />
      <Route path="details" element={<CommitteeDetailsPage committee={committee} editCommittee={editCommittee} deleteCommittee={deleteCommittee} />} />
      <Route path="members" element={<CommitteeMembersPage committee={committee} addMember={addMember} editMember={editMember} deleteMember={deleteMember} />} />
      <Route path="assignments" element={<CommitteeAssignmentsPage committee={committee} addAssignment={addAssignment} editAssignment={editAssignment} deleteAssignment={deleteAssignment} />} />
      <Route path="meetings" element={<CommitteeMeetingsPage committee={committee} addMeeting={addMeeting} editMeeting={editMeeting} deleteMeeting={deleteMeeting} />} />
      <Route path="feedback" element={<CommitteeFeedbackPage committee={committee} addFeedback={addFeedback} editFeedback={editFeedback} deleteFeedback={deleteFeedback} />} />
      <Route path="documents" element={<CommitteeDocumentsPage committee={committee} addDocument={addDocument} editDocument={editDocument} deleteDocument={deleteDocument} />} />
      <Route path="meetings/:meetingId" element={<MeetingDetailsPage committee={committee} />} />
      {/* Default fallback to overview */}
      <Route path="*" element={<Navigate to="overview" replace />} />
    </Routes>
  );
};

export default CommitteeDetailsRoutes;
