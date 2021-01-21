import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Cart from './components/pages/Cart'
import Products from './components/pages/Products'
import Signup from './components/pages/Signup'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/cart' component={Cart} />
          <Route path='/products' component={Products} />
          <Route path='/signup' component={Signup} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
