import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import WorkSharpIcon from '@material-ui/icons/WorkSharp';

import AccountTreeSharpIcon from '@material-ui/icons/AccountTreeSharp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DesktopWindowsIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccountTreeSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Integration" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <WorkSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Projects" />
    </ListItem>
  </div>
);
