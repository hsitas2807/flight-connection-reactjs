import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { StoriesContainer } from "./containers/StoriesContainer";
import { TopStoriesContainer } from "./containers/TopStoriesContainer";
import Home from "./containers/Home";

function App() {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "20px",
    fontFamily: "Arial",
    fontSize: '50px',
    borderRadius: '4px',
  };

  const wrapper = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '20px',
    color: '#0d1a26',
    border: '1px solid #1890ff',
    background: '#1890ff',
  };
  return (

    <div className="App">

      <Router>
        <div style={wrapper}>
          <Link style={mystyle} to="/">Home</Link>   <Link style={mystyle} to="/newStories">New Stories</Link>   <Link style={mystyle} to="/topStores">Top Stories</Link>
        </div>

        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/newStories' component={StoriesContainer}></Route>
          <Route exact path='/topStores' component={TopStoriesContainer}></Route>
        </Switch>

      </Router>


    </div>
  );
}

export default App;
