import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LocalSeeIcon from '@mui/icons-material/LocalSee';
import HomeIcon from '@mui/icons-material/Home';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Typography } from '@mui/material';
import Link from 'next/link'

export default function NestedList() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <Typography variant='h5'>site</Typography>
      }
    >
      <Link href="/">
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
      </Link>
      <Link href="/image">

        <ListItemButton>
          <ListItemIcon>
            <LocalSeeIcon />
          </ListItemIcon>
          <ListItemText primary="Photo" />
        </ListItemButton>
      </Link>

      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <AssignmentIndIcon />
        </ListItemIcon>
        <ListItemText primary="Abute" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link href="/abute">
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="HOSSEIN KIANMEHR" />
            </ListItemButton>
          </Link>
          <Link href="/abute">
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Site" />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>
    </List>
  );
}
