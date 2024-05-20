// React and Router Imports
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ComponentsPlayGround from './Pages/ComponentsPlayGround';
import TeamComponent1_Wrapper from './Components/Teams/TeamComponent1_Wrapper';



// Style Sheets Imports
import '/public/assets/css/index.css';

// Application Component
export function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComponentsPlayGround />} />
        <Route path="/team" element={<TeamComponent1_Wrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

// Rendering the Application
const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(<Application />);
} else {
  console.error('Failed to find the root element');
}