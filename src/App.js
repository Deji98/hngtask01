import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Sharedlayout from './Pages/Sharedlayout';
import Error from './Pages/Error';
import Question from './Pages/Question';
import './App.css';
import About from './Pages/About';
import Register from './Pages/Register';


function App() {
  return(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Sharedlayout />}>
        <Route index element={<Home />} />
        <Route path='Question' element={<Question />} />
        <Route path='Login' element={<Login />} />
        <Route path='About' element={<About />} />
        <Route path='Register' element={<Register />} />
      </Route>
      <Route path='*' element={<Error />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
