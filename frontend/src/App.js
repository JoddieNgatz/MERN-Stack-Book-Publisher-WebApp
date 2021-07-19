
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import  AddBook from './components/add-book.component';
import  books  from './components/book.component';
import  booklists  from './components/books-list.component';


class App extends Component { //class component to hold state
  render() {
    return (
      <Router>
        <div className="App">
          <div class='topnav'>
            <nav>
              <Link class="active" to="#home">Home</Link>
              <Link to={"/books"}>Books</Link>
              <Link to={"/add"}>Add Book</Link>
              <Link to={"/about"}>About</Link>
              <Link id='signIn' to={"/about"}>Sign In</Link>
            </nav>
          </div>
          <header className="App-header">
          <div>
            <Switch>  {/*switch object */}
              <Route exact path={["/", "/books"]} component={booklists} />
              <Route exact path="/add" component={AddBook} />
              <Route path="/books/:id" component={books} />
          </Switch> 
         
          </div>
        
          </header>

        </div>
      </Router>
    );
  }
}

export default App;
