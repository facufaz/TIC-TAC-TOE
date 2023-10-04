import { useState } from 'react';
import confetti from 'canvas-confetti';
import { checkWinnerFrom } from './CheckWinner';
import { TURNS } from '../Components/Constants';
import { BoardComponents, TurnIndicators, ResetButton } from '../Components/boardComponents';
import { WinnerModal } from '../Components/WinnerModal.jsx';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null);
  };

  const handleResetClick = () => {
    resetGame();
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <main className='board'>
      <h1>TA TE TI</h1>

      <ResetButton handleResetClick={handleResetClick} />
      <BoardComponents board={board} updateBoard={updateBoard} />
      <TurnIndicators turn={turn} />
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  );
};

export default Board;