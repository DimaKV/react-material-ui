import React, {useState} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CheckBox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Box, makeStyles } from '@material-ui/core';
import CoolButton from './CoolButton'; 



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

const useStyles = makeStyles({
  buttonStyle:{
    marginTop: 20,
    borderRadius: 0,
    backgroundColor: "green",
    color: "white",
  }
});

function App() {
  let [cool, setCool] = useState(true);
  const classes = useStyles();  
  return (
    
    <div className="App">
      <header className="App-header">
        <Box variant="contained" >
          <CheckExample label="Test1" />          
          <CheckExample label="Test2" />
        </Box>
        
        <Button
          onClick={() => setCool(!cool)}
          startIcon = {<SaveIcon/>}
          endIcon = {<SaveIcon/>}  
          variant="contained" 
          color="secondary"
          style={{fontSize: '20px'}} 
          size="large">
          Change coolButton
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.buttonStyle}
        >
          Hello World Again!
        </Button>
        
        <CoolButton color={cool} />
       
      </header>
    </div>
  );
}

export default App;
