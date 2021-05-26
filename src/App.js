import './App.css';
import Welcome from './Components/Welcome/Welcome'
import Showcase from './Components/Showcase/Showcase'
import CodeShowcase from './Components/CodeShowcase/CodeShowcase';

function App() {
  return (
    <div className="App">
      <Welcome />
      <Showcase />
      <CodeShowcase />
    </div>
  );
}

export default App;
