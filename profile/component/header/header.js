import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import MenuIcon from '@mui/icons-material/Menu';


import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


import { Button, ButtonGroup, Switch, useScrollTrigger } from '@mui/material';
import { palette } from '@mui/system';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

export default function Header(props) {
  const { darkMode, setDarkMode } = props

  const toggleThemeColorChange = event => {
    setDarkMode(event.target.checked)
  }

  ///////////////////drawer
  const [state, setState] = React.useState(false)

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
      >
        <Button key="one">One</Button>
        <Button key="two">Two</Button>
        <Button key="three">Three</Button>
      </ButtonGroup>
    </Box>
  );

  const drawerButten = (
    <div>

      <React.Fragment >
        <IconButton onClick={toggleDrawer(true)}><MenuIcon /></IconButton>
        <Drawer
          anchor={'right'}
          open={state}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
      </React.Fragment>

    </div>
  );
  //////////////////////////////////
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" >
        <Toolbar style={{ height: '70px' ,backgroundColor: '#rrr' }} disableGutters>

          <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{ display: { sm: 'block' } }}
          >
            Cheat Sheets
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Switch
            checked={darkMode}
            onChange={toggleThemeColorChange}
            aria-label='dark mode switch'
          />

          <Box sx={{ display: { xs: 'none', md: 'flex' } }} >
            <Button style={{ height: '30px' }} >
              <Typography onClick={() => { }} variant="h5">
                خانه
              </Typography>
            </Button>
            <Button style={{ height: '30px' }} >
              <Typography onClick={() => { }} variant="h5">
                تقلب ها
              </Typography>
            </Button>
            <Button style={{ height: '30px' }} >
              <Typography onClick={() => { }} variant="h5">
                انجمن
              </Typography>
            </Button>
            <Button style={{ height: '30px' }} >
              <Typography onClick={() => { }} variant="h5">
                درباره ی ما
              </Typography>
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>

            <IconButton onClick={toggleDrawer(true)}><MenuIcon /></IconButton>
            <Drawer
              anchor={'right'}
              open={state}
              onClose={toggleDrawer(false)}
            >
              {list()}
            </Drawer>


          </Box>
        </Toolbar>
      </AppBar>


    </Box>
    
  );
}
