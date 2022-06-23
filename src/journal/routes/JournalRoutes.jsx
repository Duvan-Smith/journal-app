import { Routes, Route, Navigate } from "react-router-dom";
import { JournalRoutes } from "../pages";

export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<JournalRoutes />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
