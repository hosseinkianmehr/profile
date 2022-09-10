import { AppBar, Box, Button, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemText, Stack, Switch, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link'
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
  const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };
  const list = () => (
    <Box
      sx={{ width: 200 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List sx={style} component="nav" aria-label="mailbox folders">
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
  return (
    <>
      <AppBar>
        <Grid container>

          <Grid xs={4} sm={4} md={4} item
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Switch
                checked={darkMode}
                onChange={toggleThemeColorChange}
                aria-label='dark mode switch'
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
              <Typography variant='h3'>hello</Typography>
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
