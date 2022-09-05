import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { AppBar, Button, FormControlLabel, FormGroup, Grid, Stack, Switch, Typography } from '@mui/material';

import { RingVolumeTwoTone } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    marginTop:'30px',
    height:'80px'
  },
  stack:{
    height: '30px',
    width: '300px'
  }
});

export default function Header(darkMode, setDarkMode) {
  const [value, setValue] = React.useState('one');
  const classes = useStyles()
  /////////////////////////////////////////////////////////


  const toggleThemeColorChange = event => {
    setDarkMode(event.target.checked)
  }
  ////////////////////////////////////////////////
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position='absolute'>

        <Stack
        className={classes.stack}
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
        >
          <Button variant="contained" disableElevation>
            <Typography  onMouseOver={() => { }}>
              خانه
            </Typography>
          </Button>
          <Button variant="contained" disableElevation>
            <Typography  onMouseOver={() => { }}>
              خانه
            </Typography>
          </Button>
          <Button variant="contained" disableElevation>
            <Typography  onMouseOver={() => { }}>
              خانه
            </Typography>
          </Button>
        </Stack>
      </AppBar>
    </>
  )

  /*
  return (
    <AppBar sx={{ width: '100%' }} className={classes.root} >
      <Grid container spacing={1}> 

      <Grid item xs={6} md={6} style={{backgroundColor:'red'}}>

      <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                      checked={darkMode}
                      onChange={()=>{}}
                      aria-label='dark mode switch'
                      />
                    }
                    label={darkMode ? 'Dark' : 'Light'}
                    />
      </FormGroup>

      </Grid>
      <Grid item xs={6} md={6}>

      <Tabs
        
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        
        >
        <Tab value="one" label="خانه " />
        <Tab value="two" label="تقلب ها" />
        <Tab value="three" label="انجمن" />
      </Tabs>
          </Grid>
          </Grid>
    </AppBar>
  );*/
}