import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

function Home() {
  return <h2> Home </h2>
}

function ListView() {
  return (
    <div>
      <h2> User </h2>
      <ul>
        <li><Link to='/users/varrel'> Varrel </Link></li>
        <li><Link to='/users/tantio'> Tantio </Link></li>
      </ul>
    </div>
  );
}

function DetailView({ match }) {
  return <h2>Ini Halaman {match.params.name}</h2>
}

function NoMatch() {
  return <h2> 404, PAGE NOT FOUND </h2>
}

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/users'>User</Link></li>
          </nav>

          <main>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/users' exact component={ListView} />
              <Route path='/users/:name' exact component={DetailView} />
              <Route component={NoMatch} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }

}

export default AppRouter;
