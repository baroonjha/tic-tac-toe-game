import './App.css';
import Board from './components/Board';

function App(props) {

  return (
    <>
    <h1> Tic <span style={{color:'red'}}> Tac</span> Toe Game</h1>
    <Board />
    </>
  );
}

export default App;
