// React and Router Imports
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from './Pages/Landing';
import SecondPage from './Pages/SecondPage';
import PageN5 from './Pages/PageN5';
import PageN7 from './Pages/PageN7';
import Pagen8 from './Pages/PageN8';
import LogosComp from './Pages/LogosComp';
import SearchBar from './Pages/SearchBar';
import Task from './Pages/UsingMapFunTask'


// Style Sheets Imports
import '/public/assets/css/index.css';

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
        <Route path="/LogosComp" element={<LogosComp />} />
        <Route path="/SearchBar" element={<SearchBar />} />
        <Route path="/Task" element={<Task />}></Route>
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