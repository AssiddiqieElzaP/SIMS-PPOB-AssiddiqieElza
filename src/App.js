import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import ProfileAcc from './pages/ProfileAcc';
import ProfileAccEdit from './pages/ProfileAccEdit';
import Transaction from './pages/Transaction';
import Payment from './pages/Payment';
import TopUp from './pages/TopUp';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/registerasi' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/top-up' element={<TopUp/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/transaction' element={<Transaction/>}/>
        <Route path='/profile' element={<ProfileAcc/>}/>
        <Route path='/profile-edit' element={<ProfileAccEdit/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
