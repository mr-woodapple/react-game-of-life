import { LandParcel } from "../core/LandParcel"

export const Form = ({ grid, setGrid }) => {
    
    // handles the click on the input button, forwards grid & setGrid
    function handleInput(e) {
        e.preventDefault();
        LandParcel.renderNextStep(grid, setGrid)
    }

    // debugging only
    function giveInfo(status, x, y) {
        console.log(status, x, y);
    }

    return(
        <form className="form">

            <div className="parcelForm">
                {grid.map((row, x) => row.map((col, y) => (
                    <div className={grid[x][y].status ? "alive" : "dead"} onClick={() => giveInfo(grid[x][y], x, y)}/>
                    ))
                )}
            </div>

            <input type="submit" value="Start" className="btn btn-danger btn-block" onClick={handleInput}></input>
          </form>
    )
}