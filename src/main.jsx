// React and Router Imports
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ComponentsPlayGround from './Pages/ComponentsPlayGround';
import SecondPage from './Pages/SecondPage';
import PageN5 from './Pages/PageN5';
import PageN7 from './Pages/PageN7';
import Pagen8 from './Pages/PageN8';



// Style Sheets Imports
import '/public/assets/css/index.css';
import Map from './Map/Map.jsx';
import Charts from './Charts/Charts.jsx';
import Dragon from './Dragon/Dragon.jsx';
import CopiedInput from './CopiedInput/CopiedInput.jsx';

// Application Component
export function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComponentsPlayGround />} />
        <Route path="/secondPage" element={<SecondPage />} />
        <Route path="/dragon" element={<Dragon />} />
        <Route path="/input" element={<CopiedInput />} />

        <Route path="/pageN5" element={<PageN5 />} />
        <Route path="/pageN7" element={<PageN7 />} />
        <Route path="/pageN8" element={<Pagen8 />} />
        <Route path="/map" element={<Map />} />
        <Route path="/chart" element={<Charts />} />


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