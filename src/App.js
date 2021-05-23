import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Welcome from './Components/Welcome/Welcome'
import Interests from './Components/Interests/Interests'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Interests />
    </div>
  );
}

export default App;
