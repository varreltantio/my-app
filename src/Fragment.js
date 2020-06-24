import React, { Component } from 'react';

class Column extends Component {
  render() {
    return (
      // Untuk menghilangkan tag pembungkus bisa menggunakan tag <React.Fragment>
      <React.Fragment>
        <td> Data 1 </td>
        <td> Data 2 </td>
      </React.Fragment>
    );
  }
}

class Fragment extends Component {
  render() {
    return (
      <table>
          <tr>
            <Column />
          </tr>
      </table>
    );
  }
}

export default Fragment;
