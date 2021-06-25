
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
       <div class='topnav'>
            <nav>
            <a class="active" href="#home">Home</a>
            <a href={"/books"}>Books</a>
            <a href={"/add"}>Add Book</a>
            <a href="#about">About</a>
            <a id='signIn' href="#sign In">Sign In</a>
            </nav>
          </div>    
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      </header>
    </div>
    </Router>
      );
    
}

export default App;
