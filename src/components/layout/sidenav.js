import React, { useState } from 'react';
import clsx from 'clsx';
import logo from '../../logo.svg';
import '../../App.css';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import ChartSelector from './chartSelector';
import LineChart from '../pages/dashboard1';
import BarChart from '../pages/dashboard2';
import PieChart from '../pages/dashboard3';
// selection imports
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';


function Copyright() {
    return (
      <Typography variant="root" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Awesome Test to get the Job
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const drawerWidth = 240;
  
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
      backgroundColor: '#282c34'
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      width: '100%',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(1),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 320,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
  export default function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const [selectedOption, setSelectedOption] = useState("Dashboard1");
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };
    const handleChange = sel => {
      setSelectedOption(sel.target.value);
      console.log("Option selected: ", selectedOption);
  };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Dashboard Test
            </Typography>
            <IconButton color="inherit">
              
                <img src={logo} className="App-logo" alt="logo" />
              
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
           {/* Selector of components */}
           <FormControl className={classes.formControl}>
            <InputLabel  id="demo-simple-select-label">
              Select a dashboard
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedOption}
              onChange={handleChange}
            >
              <MenuItem value={"Dashboard1"}>Dashboard #1</MenuItem>
              <MenuItem value={"Dashboard2"}>Dashboard #2</MenuItem>
              <MenuItem value={"Dashboard3"}>Dashboard #3</MenuItem>
            </Select>
          </FormControl>
           {/* End selector */}
          <div className={classes.appBarSpacer} />
            <Grid container spacing={1}>
            <div>
            { selectedOption === "Dashboard1" && 
                <Grid container spacing={1}>
                <Grid item md={4}>
                <LineChart></LineChart>
                </Grid>
                <Grid item md={4}>
                <LineChart></LineChart>
                </Grid>
                <Grid item md={4}>
                <LineChart></LineChart>
                </Grid>
                </Grid>
              }
              { selectedOption === "Dashboard2" && 
                <Grid container spacing={1}>
                <Grid item md={4}>
                <BarChart></BarChart>
                </Grid>
                <Grid item md={4}>
                <BarChart></BarChart>
                </Grid>
                <Grid item md={4}>
                <BarChart></BarChart>
                </Grid>
                </Grid>
              }
                { selectedOption === "Dashboard3" && 
                <Grid container spacing={1}>
                <Grid item md={4}>
                <PieChart></PieChart>
                </Grid>
                <Grid item md={4}>
                <PieChart></PieChart>
                </Grid>
                <Grid item md={4}>
                <PieChart></PieChart>
                </Grid>
                </Grid>
              }
            </div>
            </Grid>
            <Grid container spacing={1}>
              
            </Grid>
            
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
    );
  }