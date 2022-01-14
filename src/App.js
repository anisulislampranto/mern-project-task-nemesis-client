import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddAdmin from './Components/AddAdmin';
import AddUser from './Components/AddUser/AddUser';
import Login from './Components/Login/Login';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login></Login>}/>
      <Route path="/adduser" element={<AddUser></AddUser>}/>
      <Route path="/addadmin" element={<AddAdmin />}/>
    </Routes>
  );
}

export default App;
