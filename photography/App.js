import './App.css';
import About from './Components/About';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import SlideShow from './Components/SlideShow';
import VideoDemo from './Components/VideoDemo';
import ViewImages from './Components/ViewImages';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <SlideShow/>
     <About/>
     <Content/>
     <VideoDemo/>
     <ViewImages/>
     <Footer/>
    </div>
  );
}

export default App;
