
import Square from '../Components/Square';
import { TURNS } from '../Components/Constants';

export const BoardComponents = ({ board, updateBoard }) => {
  return (
    <section className='game'>
      {board.map((square, index) => (
        <Square key={index} index={index} updateBoard={updateBoard}>
          {square}
        </Square>
      ))}
    </section>
  );
};

export const TurnIndicators = ({ turn }) => {
  return (
    <section className='turn'>
      <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
      <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
    </section>
  );
};

// export const WinnerModal = ({ resetGame, winner }) => {
//   return (
//     <div className='modal'>
//       {winner && (
//         <div className='modal-content'>
//           <h2>{`${winner} ganó!`}</h2>
//           <button onClick={resetGame}>Reiniciar</button>
//         </div>
//       )}
//     </div>
//   );
// };

export const ResetButton = ({ handleResetClick }) => {
  return <button onClick={handleResetClick}>Reiniciar</button>;
};