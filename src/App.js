import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Sharedlayout from './Pages/Sharedlayout';
import Error from './Pages/Error';
import Question from './Pages/Question';
import './App.css';
import About from './Pages/About';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import {useState} from "react"
import ProtectedRoute from './Pages/ProtectedRoute';
import Directed from './Pages/Directed';



function App() {
  const [user, setUser] = useState(null);
  return(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Sharedlayout />}>
        <Route index element={<Home />} />
        <Route path='Question' element={<Question />} />
        <Route path='Login' element={<Login setUser={setUser}></Login>} />
        <Route path='About' element={<About />} />
        <Route path='Register' element={<Register />} />
        <Route path='Dashboard' element={
          <ProtectedRoute user={user}>
          <Dashboard user={user} />
        </ProtectedRoute>
        } />
        <Route path='Directed' element={<Directed />} />
      </Route>
      <Route path='*' element={<Error />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
