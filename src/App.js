import './App.css';
import NavigationBar from './components/NavigationBar';
import Advantage from './components/Advantage';
import Highlight from './components/Highlight';
import Carousel from './components/Carousel';
import Details from './components/Details';
import Hero from './components/Hero';
import Achievements from './components/Achievements';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Advantage />
      <Highlight />
      <Carousel />
      <Details />
      <Hero />
      <Achievements />
    </div>
  );
}

export default App;
