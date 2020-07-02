import React from "react";
import { makeStyles } from '@material-ui/core/styles'; 
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    linkStyle: {
        color: theme.palette.primary.main,
        "&:hover": {
            fontStyle: "italic",
        }
    }
}));

export default function IntroHeader(props, ){
    const classes = useStyles();

    return (
        <Typography variant="h1" style={{fontSize: "calc(1vw + 1.5rem)", fontWeight: "500", lineHeight: "1.8"}}>
            Hi, I'm <Link to="/about" className={classes.linkStyle}
            >James</Link> - a fullstack developer based in San Diego
            - passionate about clean code, quality, and innovation.
            Currently specializing in React and progresive web app development.  
            Check out my latest work on the <Link to="/projects" onClick={props.handleClick} className={classes.linkStyle}>projects</Link> page.
        </Typography>
    )
};