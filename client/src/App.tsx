import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TasksPage from "./pages/TasksPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<TasksPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
