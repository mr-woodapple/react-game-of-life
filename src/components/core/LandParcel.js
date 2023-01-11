
export class LandParcel {

    constructor(status) {
        this.status = status;
    }


    static createForm() {
        const rows = [];
        for (let i = 0; i < 20; i++) {
            rows.push(Array.from(Array(20), () => new LandParcel((Math.random() > 0.9 ? 1 : 0)))); 
        }
        
        console.log(rows)
        return rows;
    }


    static renderNextStep(grid, setGrid) {

        // create a proper copy of grid, because we don't want to mutate the state!
        let gridCopy = [...grid]
        
        // array we can iterate over to check all neighbor cells
        const possibleNeighbors = [
            [1, 0],
            [1, 1],
            [0, 1],
            [-1, 1],
            [-1, 0],
            [-1, -1],
            [0, -1],
            [1, -1],
        ]

        // this loop iterates over each entry, checks it surrounding cells and updates the values if needed
        for (let x = 0; x < 19; x++) {
            for (let y = 0; y < 19; y++) {
                //console.log('current node status =', grid[x][y].status)

                // reset the neighbors counter
                let neighbors = 0;

                possibleNeighbors.forEach(([x1, y1]) => {
                    // set the new x and y values
                    let newX = x + x1;
                    let newY = y + y1;

                    // handle the edge cases (pun intended)
                    if (newX < 0 && newY < 0) {
                        newX = 19;
                        newY = 19;
                    } else if (newX < 0) {
                        newX = 19;
                    } else if (newX > 19) {
                        newX = 0;
                    } else if (newY < 0) {
                        newY = 19;
                    } else if (newY > 19) {
                        newY = 0;
                    }

                    // update the neighbors count
                    neighbors = neighbors + grid[newX][newY].status
                })

                // check if cell is active or dead -> rules what happens to the cell change depending on that!!
                if (grid[x][y].status === 1) {
                    // update the cell status depending on the neighbor count
                    if (neighbors < 2 || neighbors > 3) {
                        gridCopy[x][y].status = 0
                        //console.log('cell died at ', x, y, 'status is now = ', gridCopy[x][y].status)
                    } else if (1 < neighbors < 4) {
                        gridCopy[x][y].status = 1
                        //console.log('cell is alive at ', x, y, 'status is now = ', gridCopy[x][y].status)
                    }
                } else {
                    if (neighbors === 3) {
                        gridCopy[x][y].status = 1
                    }
                }
                

            }
        }

        setGrid(gridCopy)

        //this.waitBeforeCalcNextStep()

    }

    static waitBeforeCalcNextStep() {
        setTimeout(this.renderNextStep, "1000")
    }

    static createSpecificForm() {

        const rows = [];

        rows.push(Array.from(
            [
                {"status": 0},
                {"status": 1},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 1},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 1},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
            ]
        )); 
        rows.push(Array.from(
            [
                {"status": 0},
                {"status": 0},
                {"status": 1},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 1},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
            ]
        )); 
        rows.push(Array.from(
            [
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 1},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
            ]
        )); 
        rows.push(Array.from(
            [
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
            ]
        )); 
        rows.push(Array.from(
            [
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
            ]
        )); 
        rows.push(Array.from(
            [
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 1},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
            ]
        )); 
        rows.push(Array.from(
            [
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 1},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
            ]
        )); 
        rows.push(Array.from(
            [
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 1},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
            ]
        )); 
        rows.push(Array.from(
            [
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 1},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
            ]
        )); 
        rows.push(Array.from(
            [
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 1},
                {"status": 0},
                {"status": 0},
                {"status": 1},
                {"status": 0},
            ]
        )); 
        rows.push(Array.from(
            [
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 1},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
            ]
        )); 
        rows.push(Array.from(
            [
                {"status": 1},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
            ]
        )); 
        rows.push(Array.from(
            [
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 1},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 1},
                {"status": 0},
            ]
        )); 
        rows.push(Array.from(
            [
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
            ]
        )); 
        rows.push(Array.from(
            [
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 1},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
            ]
        )); 
        rows.push(Array.from(
            [
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 1},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 1},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
            ]
        )); 
        rows.push(Array.from(
            [
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
            ]
        )); 
        rows.push(Array.from(
            [
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 1},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 1},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
            ]
        )); 
        rows.push(Array.from(
            [
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
            ]
        )); 
        rows.push(Array.from(
            [
                {"status": 1},
                {"status": 1},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 1},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
                {"status": 0},
            ]
        )); 
        
        
        return rows;
        
    }

}