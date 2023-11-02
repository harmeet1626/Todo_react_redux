import logo from './logo.svg';
import './App.css';
import Router_view from './routes';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Link to='/'>home</Link>|||
      <Link to='/about'>About </Link> */}
      <Router_view />
    </div>
  );
}

export default App;
