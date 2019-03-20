import React, { Component } from 'react';
import logo from './resources/stravalogo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Jærnesheias sprekeste</p>
        </header>
        <body className="App-body">
          <table>
            <tr>
              <th className="Tabell" colspan="3">Kvernhusheia climb</th>
            </tr>
            <tr>
            <th className="Tabell">Plass</th>
            <th className="Tabell">Navn</th>
            <th className="Tabell">Tid</th>
            </tr>
            <tr>
              <td className="Tabell">1</td>
              <td className="Tabell">Vegar</td>
              <td className="Tabell">3:10</td>
            </tr>
          </table>
          </body>
      </div>
    );
  }
}

export default App;
