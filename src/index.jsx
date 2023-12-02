import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ContextProvider } from './Components/utils/global.context';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import Home from './Routes/Home';
import Detail from './Routes/Detail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path='contact' element={<Contact />} />
            <Route path='fav' element={<Favs />} />
            <Route path='detail/:id' element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);


