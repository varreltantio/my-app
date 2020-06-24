import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List.js';
import Api from './Api.js';
import AppRouter from './Router.js';
import Fragment from './Fragment.js';


// komponen dan properties
function Umur(props) {
  return <span> Umur {props.age} </span>
}


function Greeting(props) {
  return <h1> Hallo {props.name} - <Umur age={props.age} /> </h1>
}


// state
class Timer extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        time : props.start
      }
  }


  // Lifecycle
  componentDidMount() {
    this.addInterval = setInterval( () => this.increase(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.addInterval)
  }

  increase() {
    //update state time tiap detik
    this.setState((state, props) => ({
      time: parseInt(state.time) + 1
    }))
  }

  render() {
    return (
      <div> {this.state.time} Detik</div>
    )
  }
}


function Clicker() {
  function handleClick(e) {
    alert("OK")
    e.preventDefault()
  }

  return (
    <a href="#" onClick={handleClick} > Klik Disini </a>
  )
}


class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleStatus : true
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({
      toggleStatus: !state.toggleStatus
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.toggleStatus ? 'ON' : 'OFF'}
        <p> Kondisi Sekarang {this.state.toggleStatus ? 'ON' : 'OFF'}</p>
      </button>
    )
  }
}


class Data extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoItem : '',
      items : []
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState ({
      items : [...this.state.items , this.state.todoItem],
      todoItem : ''
    })
  }

  handleChange = (event) => {
    this.setState ({
      todoItem: event.target.value
    })

  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.todoItem} onChange={this.handleChange} />
          <button> Add </button>
        </form>

        <List items={this.state.items} />

      </div>
    );
  }
}


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Greeting name="Varrel" age="16" />
            <Greeting name="Tantio" age="17" />
            <Timer start="0" />
            <Timer start="5" />
          </p>
          <Clicker />
          <Toggle />
          <Data />
          <Api />
          <AppRouter />
          <Fragment />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
