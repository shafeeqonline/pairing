import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState('#ffffff');

  const handleInputChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="colour-picker">
      Colour:
      <input 
        type="text" 
        placeholder="#webhex" 
        onChange={handleInputChange} 
        style={{ marginRight: '20px' }} 
      />
      <div className="swatch" style={{ backgroundColor: color }}></div>
    </div>
  );
}

export default App;
