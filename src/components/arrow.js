import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownCircleRoundedIcon from '@material-ui/icons/ArrowDropDownCircleRounded';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    arrow: {
    "&:hover": {
            color: theme.palette.inherit,
        }
    }
  })); 


export default function Arrow(props){
    const classes = useStyles();
    return (
        <div style={{padding: "4%"}}>
            <Link to="/projects" onClick={props.handleClick}>
                <IconButton aria-label="click for projects">
                    <ArrowDropDownCircleRoundedIcon fontSize="large" className={classes.arrow}/>
                </IconButton>
            </Link>
        </div>
    )

};


