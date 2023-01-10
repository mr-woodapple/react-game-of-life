// eslint-disable-next-line
import { useState } from 'react';
import './App.css';
import { LandParcel } from './components/core/LandParcel';
import { Form } from './components/ui/Form';


function App() {


  // set the grid with random variables
  const [ grid, setGrid ] = useState(LandParcel.createForm)

  function showGrid(grid) {
    console.log('grid to be handed over to Form = ', grid)
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center" onClick={() => showGrid(grid)}>Game of Life</h1>

      {/* load the grip, pass the states forward */}
      <Form
        grid={ grid }
        setGrid={ setGrid }
      />

    </div>
  );
}

export default App;
