import React from 'react';

class Api extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: true
    }
  }

  // Jika komponen siap fungsi akan dijalankan
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ items: data, isLoading: false }))
  }

  render() {
    const {items, isLoading} = this.state

    if(isLoading) {
      return <p>Loading....</p>
    }

    return (
      <div>
        <ul>
          { items.map((item, index) => <li key={index}> {item.name} </li> )}
        </ul>
      </div>
    );
  }
}

export default Api;
