import './App.css';
import Welcome from './Components/Welcome/Welcome'
import Showcase from './Components/Showcase/Showcase'
import CodeShowcase from './Components/CodeShowcase/CodeShowcase'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Welcome />
      <Showcase />
      <CodeShowcase />
      <Contact />
    </div>
  );
}

export default App;
