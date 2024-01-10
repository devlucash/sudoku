import React, { useState } from 'react';
import './sukoku.css';

const App = () => {
    const [board, setBoard] = useState(Array(81).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
  
    const handleClick = (index) => {}
};

function Square({ value, onSquareClick }) {
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
  }


  // generates a 9x9 board with index to 81 e.g.
  // 1  2  3  4  5  6  7  8  9
  // 10 11 12 13 14 15 16 17 18
  // 19 20 21 22 23 24 25 26 27
  // 28 29 30 31 32 33 34 35 36
  // 37 38 39 40 41 42 43 44 45
  // 46 47 48 49 50 51 52 53 54
  // 55 56 57 58 59 60 61 62 63
  // 64 65 66 67 68 69 70 71 72
  // 73 74 75 76 77 78 79 80 81

  const generateBoard = () => {
    const rows = [];

    for (let i = 0; i < 9; i++) {
      const row = [];
      for (let j = 0; j < 9; j++) {
        const index = i * 9 + j;
        row.push(renderSquare(index));
      }
      rows.push(<div key={i} className="board-row">{row}</div>);
    }
    return rows;
  };

  function checkRow({ value, onSquareClick }) {}    // check for 1-9 horizontally
  function checkColumn({ value, onSquareClick }) {} // check for 1-9 vertically
  function checkCell({ value, onSquareClick }) {}   // check for 1-9 in a 3x3 grid

  return (
    <div>
      <div className="status">{status}</div>
      {generateBoard()}
    </div>
  );
