import { useState } from 'react';
import './App.css';
import { LandParcel } from './components/core/LandParcel';
import { Form } from './components/ui/Form';


function App() {


  // set the grid with random variables
  const [ grid, setGrid ] = useState(LandParcel.createForm)

  return (
    <div className="container mt-4">
      <h1 className="text-center">Game of Life</h1>

      {/* load the grip, pass the states forward */}
      <Form
        grid={ grid }
        setGrid={ setGrid }
      />

    </div>
  );
}

export default App;
