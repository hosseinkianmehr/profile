import { AppBar, Box, Button, Divider, Drawer, FormControlLabel, Grid, IconButton, List, ListItem, ListItemText, Stack, Switch, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link'
import { styled, useTheme } from '@mui/material/styles';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#CDF0EA',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#065471',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#0C2233',
    borderRadius: 20 / 2,
  },
}));

export default function Header(props) {
  const { darkMode, setDarkMode } = props
  const theme = useTheme()
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
      sx={{ width: 150,height:1000000 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      style={{backgroundColor: theme.palette.primary.main}}
    >
      <List sx={{width:'100%', maxWidth: 360}} component="nav" aria-label="mailbox folders" >
        <Link href="/">
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Divider />
        <Link href="/image">
          <ListItem button divider>
            <ListItemText primary="Photo" />
          </ListItem>
        </Link>
        <Link href="/abute">
          <ListItem button>
            <ListItemText primary="Abute" />
          </ListItem>
        </Link>

      </List>
    </Box>
  );

  
  return (
    <>
      <AppBar>
        <Grid container>
          {/* dark mode*/}
          <Grid xs={4} sm={4} md={4} item
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
                <MaterialUISwitch sx={{ m: 1 }} 
                  checked={darkMode}
                  onChange={toggleThemeColorChange}
                />
            </Stack>
          </Grid>
          <Grid xs={4} sm={4} md={4} item>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Link href={'/'}>
                <Button>
                  <Typography variant='h3'>hello</Typography>
                </Button>
              </Link>
            </Stack>

          </Grid>
          <Grid xs={4} sm={4} md={4} item
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Box sx={{ display: { xs: 'none', md: 'flex' } }} >
                <Link href="/">
                  <Button style={{ height: '30px' }} >
                    <Typography onClick={() => { }} variant="h5">
                      Home
                    </Typography>
                  </Button>
                </Link>
                <Link href="/image">
                  <Button style={{ height: '30px' }} >
                    <Typography onClick={() => { }} variant="h5">
                      Photo
                    </Typography>
                  </Button>
                </Link>
                <Link href="/abute">
                  <Button style={{ height: '30px' }} >
                    <Typography onClick={() => { }} variant="h5">
                      Abute
                    </Typography>
                  </Button>
                </Link>
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
            </Stack>
          </Grid>
        </Grid>


      </AppBar>
    </>
  )
}
