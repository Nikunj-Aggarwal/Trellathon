import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Trending from './Pages/Trending';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <>
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/trending' component={Trending}/>
        <Route path='/dashboard' component={Dashboard}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
