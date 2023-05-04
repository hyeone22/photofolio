import './App.scss';
import Main from './sections/Main';
import Home from './sections/Home';
import Se from 'sections/Se';
import Cj from 'sections/Cj';
import Kosdaq from 'sections/Kosdaq';
import Kakao from 'sections/Kakao';




function App() {
  return (
    <div className="app"> 
    <>
    <Main />
    <Home />
    <Se />
    <Cj />
    <Kosdaq />
    <Kakao />
    </>  
    </div>
  );
}

export default App;
