import TextScroller from './components/TextScroller';
import Navbar from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import Team from './components/Team';
import Events from './components/Events';

function App() {
  return (
    <div className="App" >
      {/* <Navbar />
      <Hero/> */}
      <Hero2/>
      <Team/>
      {/* <div className='past-events text-white' >past events</div> */}
      {/* <div className='projects text-white' >projects</div>
      <div className='team text-white' >team</div>
      <div className='contact text-white' >contact</div>
     */}
     <Events/>
     
    </div>
    

  );
}

export default App;
