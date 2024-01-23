import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import SlideScreen from './Components/SlideScreen';

function App() {
    const [tabOpen, handleTab] =  useState(false)

    useEffect(() => {
    }, [tabOpen])

  return (
    <div className="App">
      <Header isOpen={tabOpen} handleOpen={() => handleTab(!tabOpen)}/>
        <div>

        <SlideScreen isOpen={tabOpen} amount={100} time={5}/>
        </div>
    </div>
  );
}

export default App;
