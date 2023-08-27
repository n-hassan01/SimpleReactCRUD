import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './Components/AddUser';
import AllUsers from './Components/AllUsers';
import EditUser from './Components/EditUser';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import PrivateRoute from './Components/PrivateRoute';
import Remark from './Components/Remark';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Remark />} />
          <Route path="/all" element={<AllUsers />} />
          <Route path="/add" element={<PrivateRoute><AddUser /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
