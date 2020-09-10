import React from 'react';
import Stock from './stock';
import './App.css';

function App() {
  return (
    <div className="App">
      <Stock></Stock>
    </div>
  );
}

export default App;
// const express = require('express');
// const mysql = require('mysql');

// // create connection
// const db = mysql.createConnection({
// host : 'localhost',
// user : 'root',
// password : 'happyBre3',
// // database : 'mysql'
// });

// const app = express();

// app.listen('3000', () => {
//   console.log('server started on port 3000');
// })

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
