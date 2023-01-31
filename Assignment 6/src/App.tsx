import React from 'react';

import './App.css';
import Principal from './Components/Principal';
import Student from './Components/Student';
import Teacher from './Components/Teacher';

const App=()=>{
  return (
    <div>
      <Student/>
      <Teacher/>
      <Principal/>
        </div>

  );
}

export default App;
