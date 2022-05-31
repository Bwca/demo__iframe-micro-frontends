import { Navigate, Route, Routes } from 'react-router-dom';

import { Activity } from './activity/activity';

export function App() {
  return (
    <Routes>
      <Route path="/activity" element={<Activity />} />
      <Route path="*" element={<Navigate to="/activity" replace />} />
    </Routes>
  );
}
