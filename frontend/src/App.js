
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AddBooks from './components/add-book.component';
import books from './components/book.component';
import booklists from './components/books-list.component';

function App() {
  return (
    <Router>
    <div className="App">
    <div class='topnav'>
            <nav>
            <Link class="active" to="#home">Home</Link>
            <Link  to={"/books"}>Books</Link>
            <Link  to={"/add"}>Add Book</Link>
            <Link to={"/about"}>About</Link>
            <Link id='signIn' to={"/about"}>Sign In</Link>
            </nav>
       </div>  
      <header className="App-header"> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        </header>
        <div>
          <Switch>  {/*switch object */}
            <Route exact path={['/', '/books']} component={ booklists}/>
            <Route exact path='/add' component={AddBooks}/>
            <Route path='/books/:id' component={ books}/>
          </Switch>
        </div>
    </div>
    </Router>
      );
    
}

export default App;
