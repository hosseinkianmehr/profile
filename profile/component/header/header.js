import { AppBar, Box, Button, ButtonGroup, Drawer, Grid, IconButton, Stack, Switch, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

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
            </Stack>
          </Grid>
        </Grid>


      </AppBar>
    </>
  )
}
