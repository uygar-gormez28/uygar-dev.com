import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import ProjectDetail from "./component/ProjectDetail";
import EventDetail from "./component/EventDetail";
import BlogDetail from "./component/BlogDetail";

import ScrollToTopOnMount from "./component/ScrollToTopOnMount";

function App() {
  return (
    <Router>
      <ScrollToTopOnMount />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
