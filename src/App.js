import './App.scss';
import Main from './sections/Main';
import Home from './sections/Home';
import Se from 'sections/Se';
import Cj from 'sections/Cj';
import Kosdaq from 'sections/Kosdaq';
import Kakao from 'sections/Kakao';
import Netflix from 'sections/Netflix';
import Facebook from 'sections/Facebook';
import Off from 'sections/Off';
import Face from 'sections/Face';
import Settings from 'sections/Settings';
import Introduce from 'sections/Introduce';
import Menu from 'sections/Menu';
import Call from 'sections/Call';




function App() {
  return (
    <div className="app"> 
    <>
    <Main />
    <Face />
    <Settings />
    <Call />
    <Introduce />
    <Menu />
    <Home />
    <Se />
    <Cj />
    <Kosdaq />
    <Kakao />
    <Netflix />
    <Facebook />
    <Off />
    </>  
    </div>
  );
}

export default App;
