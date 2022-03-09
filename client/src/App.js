import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail'
import CreateActivity from './components/CreateActivity/CreateActivity'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path='/' element= { < LandingPage />}/>
          <Route exact path='/home' element={ < Home /> }/>
          <Route path='/home/:countryId' element={ < Detail />} />
          <Route path='/activities' element={ < CreateActivity />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
