import { useDispatch, useSelector } from "react-redux";
import { pause, restart, resume } from "../slices/gameSlice";

const ScoreBoard = (props) => {
  const dispatch = useDispatch();
  const game = useSelector(state => state.game);
  const {score, isRunning, gameOver} = game;

  const handleClick = () => {
    if (gameOver) return;
    if (isRunning) {
      dispatch(pause())
    } else {
      dispatch(resume())
    }
  }

  const handleRestart = () => {
    dispatch(restart());
  }

  return (
    <div className="score-board">
      <div>Score: {props?.score}</div>
      <div>Level: 1</div>
      <button className="score-board-button" onClick={handleClick}>{isRunning ? 'Pause': 'Play'}</button>
      <button className="score-board-button" onClick={handleRestart}>Restart</button>
    </div>
  );
}
 
export default ScoreBoard;