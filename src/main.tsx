import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.tsx'
import About from './pages/about.tsx'
import Home from './pages/home.tsx';
import Docs from './pages/docs.tsx';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} >
          <Route path='' index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='docs' element={<Docs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
