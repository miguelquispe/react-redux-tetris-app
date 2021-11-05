import { useDispatch, useSelector } from "react-redux";
import { moveDown, moveLeft, moveRight, rotate } from "../slices/gameSlice";

const Controls = (props) => {
  const dispatch = useDispatch();
  const isRunning = useSelector(state => state.game.isRunning)

  return (
    <div className="controls">
      {/* left */}
      <button className="control-button" onClick={(e) => {
        dispatch(moveLeft())
      }}>Left</button>

      {/* right */}
      <button className="control-button" onClick={(e) => {
        dispatch(moveRight())
      }}>Right</button>

      {/* rotate */}
      <button className="control-button" onClick={(e) => {
        dispatch(rotate);
      }}>Rotate</button>

      {/* down */}
      <button className="control-button" onClick={(e) => {
        dispatch(moveDown())
      }}>Down</button>
    </div>
  );
}
 
export default Controls;