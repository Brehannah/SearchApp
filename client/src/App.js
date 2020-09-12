import React from 'react';
import Stock from './Stock';
import StockIBM from './StockIBM';
import './App.css';
import Jumbotron from './Jumbotron';
import StockTSLA from './StockTSLA';
import StockFB from './StockFB';
import StockAAPL from './StockAAPL';

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <StockAAPL/>
      <StockTSLA />
      <StockFB />
      <Stock></Stock>
      <StockIBM></StockIBM>
      {/* <NameForm/> */}
      <img src="./images/trade.jpg" alt="" />
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
// password : 'root',
// // database : 'mysql'
// });

// const app = express();

// app.listen('3001', () => {
//   console.log('server started on port 3001');
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
