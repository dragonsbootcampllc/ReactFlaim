// React and Router Imports
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from './Pages/Landing';

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
        <Route path="/" element={<Landing />}></Route>
        <Route path="/dragon" element={<Dragon />} />
        <Route path="/input" element={<CopiedInput />} />

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