import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail'
import CreateActivity from './components/CreateActivity/CreateActivity'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element= { < LandingPage />}/>
          <Route path='/home' element={ < Home /> }/>
          <Route path='/home/:id' element={ < Detail />} />
          <Route path='/activities' element={ < CreateActivity />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
