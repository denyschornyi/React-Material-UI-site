import React from 'react';
import './App.css';

import {AppBar, Container, Toolbar, IconButton, Typography, Box, Button, Paper, Grid, Card, CardMedia, CardContent, CardActions, BottomNavigation, BottomNavigationAction } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import RestoreIcon from '@material-ui/icons/Restore';
import FolderIcon from '@material-ui/icons/Folder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

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
    marginTop: theme.spacing(6),
    padding: theme.spacing(8),
  },


  cardMedia: {
    paddingTop: "56.25%"
  },
  cardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: theme.spacing(4)
  }
}))

const cards = [1,2,3,4,5,6];

function App() {

  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

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


      <div className={classes.mainContent}>
        <Container maxWidth="md">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
            Landing Page using React + Material UI
          </Typography>
          <Typography variant="h5" align="justify" color="textSecondary" paragraph>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae praesentium nam non saepe neque recusandae dolore ab odio, mollitia autem nemo deserunt similique quisquam minus repellendus assumenda et itaque. Atque.
          </Typography>
          <div className={classes.mainButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">Start Now</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">Learn more</Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>

      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map(card => {
            return (
              <Grid item key={card} xs={12} sm={6} md={4} >
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="image title"/>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      Blog post
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, itaque.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>

                    <LayerIcon/>
                    <PlayCircleFilledIcon/>
                  </CardActions>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </main>

    

    <footer>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
          <BottomNavigationAction  label="Recents" value="recents" icon={<RestoreIcon/>}/>
          <BottomNavigationAction  label="Favorites" value="favorites" icon={<FavoriteIcon/>}/>
          <BottomNavigationAction  label="Nearby" value="nearby" icon={<LocationOnIcon/>}/>
          <BottomNavigationAction  label="Folder" value="folder" icon={<FolderIcon/>}/>
      </BottomNavigation>
      <Typography align="center" color="textSecondary" paragraph >
        Landing page using React.js + Material UI
      </Typography>
    </footer>
    </>
  );
}

export default App;
