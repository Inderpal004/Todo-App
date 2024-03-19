import React from 'react'
import TodoPage from './Components/TodoPage/TodoPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Components/Login/Login';

export default function App() {
  return (
    <BrowserRouter>
    <div className='app'>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/todoPage/:username' element={<TodoPage/>} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}
