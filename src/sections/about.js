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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>

        </Grid>
        )
}