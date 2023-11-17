import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Films from './pages/films/Films';
import Home from './pages/home/Home';
import People from './pages/people/People';
import Planet from './pages/planets/Planet';
import Species from './pages/species/Species';
import Starship from './pages/starship/Starship';
import Vehicles from './pages/vehicles/Vehicles';

function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/films' element={<Films/>}></Route>
          <Route path='/people' element={<People/>}></Route>
          <Route path='/planets' element={<Planet/>}></Route>
          <Route path='/species' element={<Species/>}></Route>
          <Route path='/starships' element={<Starship/>}></Route>
          <Route path='/vehicles' element={<Vehicles/>}></Route>
        </Routes>
      </BrowserRouter>  
  );
}

export default App;
