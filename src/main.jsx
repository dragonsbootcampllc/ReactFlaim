// React and Router Imports
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from './Pages/Landing';
import SecondPage from './Pages/SecondPage';
import PageN5 from './Pages/PageN5';


// Style Sheets Imports
import '/public/assets/css/index.css';

// Application Component
export function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/secondPage" element={<SecondPage />} />
        <Route path="/pageN5" element={<PageN5  />} />
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