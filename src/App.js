import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link, Route, Switch} from 'react-router-dom';
import { Component } from 'react';
import AddCard from './components/AddCard';
import CardList from './components/CardList';
import Card from './components/Card';

function App() {
  return (
                <div>
                    <nav className="navbar navbar-expand-lg bg-light">
              <div className="container-fluid">
                <Link className="navbar-brand" href="#">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link to={"/cartas"}className="nav-link" href="#">Cartas</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/add"}>Agregar</Link>
                    </li>
                  </ul>
                  <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                  </form>
                </div>
              </div>
            </nav>
    <div className="container mt-3">
      <Switch>
        <Route exact path={["/", "/cartas"]} component={CardList}></Route>
        <Route path={"/add"} component={AddCard}></Route>
        <Route path={"/cartas/:id"} component={Card}></Route>
      </Switch>

    </div>

    </div>
  );
}

export default App;
