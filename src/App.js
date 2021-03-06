import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import { StoriesContainer } from "./containers/StoriesContainer";
import { TopStoriesContainer } from "./containers/TopStoriesContainer";
import  Home  from "./containers/Home";

function App() {
  return (
    <div className="App">
      <Router> 
        <ul className="App-header"> 
          <li> 
            <Link to="/">Home</Link> 
          </li> 
          <li> 
            <Link to="/newStories">New Stories</Link> 
          </li> 
          <li> 
            <Link to="/topStores">Top Stories</Link> 
          </li> 
        </ul> 
        <hr/>
        <Switch> 
          <Route exact path='/' component={Home}></Route> 
          <Route exact path='/newStories' component={StoriesContainer }></Route> 
          <Route exact path='/topStores' component={TopStoriesContainer}></Route> 
        </Switch> 
         
      </Router> 

     
    </div>
  );
}

export default App;
