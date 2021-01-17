import React, { useState, useEffect } from 'react';
import Circle from './components/Circle/Circle'





function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  
  
 
  
  
  const mouseMoveHandler = event => {
    
    
    setX(event.clientX);
    setY(event.clientY);
  };
  
 
 
  


  return (
    <div  onMouseMove={useEffect(() => {
     
    
      document.addEventListener("mousemove", mouseMoveHandler);
      
      return () => {
        
        document.removeEventListener("mousemove", mouseMoveHandler);
      };
    }, [])}>
      
      
      

      <Circle width={100} height={100} color={"black"} left={x} top={y}>
        
      </Circle>



    </div>
  );
}

export default App;
