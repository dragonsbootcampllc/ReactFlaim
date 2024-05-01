// React and Router Imports
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from './Pages/Landing';
import SecondPage from './Pages/SecondPage';
import PageN5 from './Pages/PageN5';
import PageN7 from './Pages/PageN7';
import Pagen8 from './Pages/PageN8';



// Style Sheets Imports
import '/public/assets/css/index.css';
import FirstPage from './Component/FirstPage/FirstPage.jsx';
import Customer from './Component/Customer/Customer.jsx';
import Section from './Component/Section/Section.jsx';

// Application Component
export function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/secondPage" element={<SecondPage />} />
        <Route path="/pageN5" element={<PageN5 />} />
        <Route path="/pageN7" element={<PageN7 />} />
        <Route path="/pageN8" element={<Pagen8 />} />
        <Route path="/first" element={<FirstPage/>} />
        <Route path="/customer" element={<Customer/>} />
        <Route path="/section" element={<Section/>} />


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