import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Summary from './Summary/Summary';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/summary' element={<Summary/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
