import './App.css';
import Main from './Pages/Main'
import Nav from './Components/Nav'
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resources from './Pages/Resources';
import Login from './Components/Login';
import Contact from './Pages/Contact';
import CreditStore from './Pages/CreditStore';
import Challenges from './Pages/Challenges';
import Home from './Pages/Home';
import Signup from './Components/Signup'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path="/main" element={<Main />} />
          <Route path="/resources" element={<Resources />} />
          <Route path='/credit_store' element={<CreditStore />} />
          <Route path='/challenges' element={<Challenges />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Nav />
      </Router>
    </div>
  );
}

export default App;
