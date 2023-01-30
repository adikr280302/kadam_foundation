import './App.css';
import Home from './Home';
import{ BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar';
import Contact from './contact';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/contact' element={[<Navbar key={3}/>, <Contact key={4} />]} />
          <Route path='/' element={[<Navbar key={3}/>, <Home key={1}/> ]} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
