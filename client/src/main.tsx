import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import NavBar from './components/layout/NavBar';
import Notes from './views/Notes';
import Meals from './views/Meals';
import Todos from './views/Todos';
import NotFound from './views/error/NotFound';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <main className="h-screen flex flex-col pt-4 overflow-auto">
      <BrowserRouter>
        <section className="flex-grow w-4/5 mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/meals" element={<Meals />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </section>
        <NavBar />
      </BrowserRouter>
    </main>
  </React.StrictMode>
);
