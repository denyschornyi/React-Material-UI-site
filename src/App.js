import React from 'react';
import './App.css';
import {AppBar, Container, Toolbar, IconButton, Typography, Box, Button, Paper, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu' ;
import { makeStyles } from '@material-ui/core/styles' ;


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },


  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, .5)"
  },
  mainFeaturesPostContent: {
    position: "relative",
    marginTop: theme.spacing(3),
    padding: theme.spacing(8),
  }
}))

function App() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
            <MenuIcon></MenuIcon>
          </IconButton>
          <Typography variant="h6" className={classes.title}> React Material UI</Typography>
          <Box mr={3}>
            <Button color="inherit" variant="outlined" >Log In</Button>
          </Box>
          <Button color="secondary" variant="contained">Sign Up</Button>
        </Toolbar>
      </Container>
    </AppBar>


    <main>
      <Paper className={classes.mainFeaturesPost} style={{backgroundImage: `url(https://source.unsplash.com/random)`}} >
          <Container fixed>
            <div className={classes.overlay}/>
            <Grid container>
                <Grid item md={6}>
                  <div className={classes.mainFeaturesPostContent}>
                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                        React Landing Page based on Mterial UI
                    </Typography>
                    <Typography  variant="h5" color="inherit" paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, minus. Cupiditate, laboriosam sit? Fugiat cumque magni deleniti vel ea labore accusamus autem deserunt odit illo?
                    </Typography>
                    <Button variant="contained" color="secondary">
                      Learn More
                    </Button>
                  </div>
                </Grid>
            </Grid>
          </Container>
      </Paper>
    </main>
    </>
  );
}

export default App;
