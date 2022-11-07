import config from './config.json';
import First from './components/First';
import Components from './components';
import './App.css';
import { useState } from 'react';







function App() {

 

  return (
    <div className="App">
    <h1>hello</h1>

   <div className='m-4 p-4 border '>
    {config.components.map(item=>Components(item))
    }
   </div>

<div>


 
  </div>





    </div>
  );
}

export default App;
