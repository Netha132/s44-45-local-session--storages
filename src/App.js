
import './App.css';
import LogIn from './components/LogIn';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Services from './components/Services';
import ForgotPassword from './components/ForgotPassword';
import CricBuzz from './components/CricBuzz';
import LiveScore from './components/LiveScore';
import Schedule from './components/Schedule';
import Archives from './components/Archives';
import News from './components/News';
import 'bootstrap/dist/css/bootstrap.min.css';
import Series from './components/Series';
import Teams from './components/Teams';
import Videos from './components/Videos';
import Rankings from './components/Rankings';
import AllStories from './components/AllStories';
import PremiumEditorials from './components/PremiumEditorials';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
        <Route path='/' element={<LogIn/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/forgotpassword' element={<ForgotPassword/>}></Route>
        <Route path='/cricbuzz' element={<CricBuzz/>}></Route>
        <Route path='/livescore' element={<LiveScore/>}></Route>
        <Route path='/schedule' element={<Schedule/>}></Route>
        <Route path='/archive' element={<Archives/>}></Route>
        <Route path='/news' element={<News/>}></Route>
        <Route path='/series' element={<Series/>}></Route>
        <Route path='/teams' element={<Teams/>}></Route>
        <Route path='/videos' element={<Videos/>}></Route>
        <Route path='/ranking' element={<Rankings/>}></Route>
        <Route path='/more' element={<Rankings/>}></Route>
        <Route path='/allstories' element={<AllStories/>}></Route>
        <Route path='/premiumeditorial' element={<PremiumEditorials/>}></Route>
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
