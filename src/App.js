import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Welcome from './Components/Welcome/Welcome'
import Interests from './Components/Interests/Interests'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Interests />
      <Contact />
    </div>
  );
}

export default App;
