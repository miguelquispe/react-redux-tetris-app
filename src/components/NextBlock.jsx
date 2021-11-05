import { useSelector } from "react-redux";
import { shapes } from "../utils";
import GridSquare from "./GridSquare";

// Draws the "next" block view showing the next block to drop
const NextBlock = () => {
  const nextShape = useSelector(state => state.game.nextShape);
  const box = shapes[nextShape][0];

  // Map the block to the grid
  const grid = box.map((rowArray, row) => {
    return rowArray.map((square, col) => {
      return <GridSquare key={`${row}${col}`} color={square} />
    })
  })
  return (
    <div className="next-block">
      {grid}
    </div>
  );
}
 
export default NextBlock;