import { Route, Routes } from 'react-router-dom'
import Home from './Home';
import Mainpage from './Mainpage';
import CreateData from './CreateData';
import UpdateData from './UpdateData';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Mainpage/>} />
      <Route path='/show' element={<Home/>} />
      <Route path='/create' element={<CreateData/>} />
      <Route path='/update/:id' element={<UpdateData/>} />
      
    </Routes>
    </>
  );
}

export default App;
