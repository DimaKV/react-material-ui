import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CheckBox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Box } from '@material-ui/core';



const CheckExample = ({label}) => {
  const [checked, setChecked] = useState(true);
  return(
    <FormControlLabel
      control={
        <CheckBox
        checked={checked}
        // onClick={() => {
        //   setChecked( (checked) => !checked )
        // }}
        onChange={(e)=>setChecked(e.target.checked)}
        />
      }
      label={label}
    />
    
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box variant="contained" >
          <CheckExample label="Test1" />          
          <CheckExample label="Test2" />
        </Box>
        
        <Button
          startIcon = {<SaveIcon/>}
          endIcon = {<SaveIcon/>}  
          variant="contained" 
          color="secondary"
          style={{fontSize: '20px'}} 
          size="large">
          Hello World
        </Button>
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
    </div>
  );
}

export default App;
