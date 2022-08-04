import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'
import Wallpaper from './components/Wallpaper'
import Widget from './components/Widget'
import Icon from './components/Icon'

import {data} from './data'
import {createContext} from 'react'

export const AppContext = createContext();

export default function App(){
  return(
    <AppContext.Provider value={data}>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wallpaper" element={<Wallpaper />} />
        <Route path="/widget" element={<Widget />} />
        <Route path="/icon" element={<Icon />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </AppContext.Provider>
  );
}