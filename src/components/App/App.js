import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from './Details';

function App() {
  return (
    <div className="App">
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        <Route path="/details/:id">
          <Details />
        </Route>

      </Router>
    </div>
  );
}


export default App;
