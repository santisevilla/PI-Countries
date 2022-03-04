import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path='/' element= { < LandingPage />}/>
          <Route exact path='/home' element={ < Home /> }/>
          <Route path='/home/:countryId' element={ < Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
