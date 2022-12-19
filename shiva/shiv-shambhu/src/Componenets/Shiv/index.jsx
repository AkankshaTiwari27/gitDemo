

import * as React from 'react';
import Switch from '@mui/material/Switch';
import { useState } from 'react';

export default function Shhiva() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
    <div style={{display:"flex"}}>
  
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
    
    </div>
     <img src={checked?"shivling.gif":"Shambhu.png"}/>
     </div>
  );
}