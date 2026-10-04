import './App.css';
import listings from './data/data';
import ResortContainer from './Components/ResortContainer';

function App() {
  return <>
  <h1>Resorts Lite</h1>
  <ResortContainer data={listings} />
  </>;
}

export default App
