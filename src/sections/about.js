import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import James from ".././images/James.jpg";

const useStyles = makeStyles((theme) => ({
  gridLeft: {
      [theme.breakpoints.up("md")]: {
        textAlign: "right",
      }
    },
  imgStyle: {
      borderRadius: 7,
        width: "100%",
  },
  gridRight: {
      textAlign: "left", 
      fontSize: "1.2rem"
    },
}));

export default function About(){
    const classes = useStyles();
    return (
        <Grid container justify="center" style={{padding: "4%"}}>
            <Grid item xs={12} style={{padding: "4%"}}>
                <Typography id="about" variant="h2">
                    About
                </Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={10} style={{padding: "4%"}}>
                <Paper elevation={8}>
                    <Grid container justify="center" spacing={6} style={{padding:"4%"}}>
                        <Grid item md={4} xs={10} className={classes.gridLeft}>
                            <img src={James} className={classes.imgStyle} alt="profile"></img>
                        </Grid>
                        <Grid item md={8} xs={10} >
                            <Typography variant="body1" className={classes.gridRight}>
                            Hi, I'm James and I’m passionate about thinking strategically to figure out the why and how to solve complex challenges and turn them into elegantly simple solutions. 
                            I'm a Full Stack Developer and recent graduate of Complete Web Development Bootcamp. 
                            Expertise in web and progressive web app development using React, JavaScript, CSS, HTML, Node.js, Express, MongoDB and more. 
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>

        </Grid>
        )
}