import React from "react";
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import nodejsLight from "./../images/tech/nodejs-light.png"
import nodejsDark from "./../images/tech/nodejs-dark.png"
import mongoDBLight from "./../images/tech/mongodb-light.png"
import mongoDBDark from "./../images/tech/mongodb-dark.png"
import octocat from "./../images/tech/octocat.png"
import expressLight from "./../images/tech/express-light.png"
import expressDark from "./../images/tech/express-dark.png"
import mailchimpLight from "./../images/tech/mailchimp-light.png"
import mailchimpDark from "./../images/tech/mailchimp-dark.png"
import materialUI from "./../images/tech/material-ui.svg"
import postman from "./../images/tech/postman.svg"

import heroku from "./../images/tech/heroku.png"
import react from "./../images/tech/react.png"
import bootstrap from "./../images/tech/bootstrap.svg"


function Tech(){    
    const theme = useTheme();
    console.log(theme);
    return ( 
    
    <div>
        <Grid container justify="center" style={{padding: "4%"}}>
            <Grid item xs={12} style={{paddingBottom: "4%"}}>
                <Typography id="favtech" variant="h2" style={{paddingBottom: "4%"}}>
                    Tools I Use
                </Typography>
            </Grid>
            <Paper id="paper" elevation={8} style={{padding: "4%"}}>
                <Grid container justify="center" spacing={6} style={{padding:"4%", alignItems: "center"}}>
                    <Grid item lg={2} md={3} xs={4} >
                        <img src={theme.palette.type === "light" ? nodejsLight : nodejsDark} alt="nodejs logo" width="100%" />
                    </Grid>
                    <Grid item lg={2} md={3} xs={4} >
                        <img src={theme.palette.type === "light" ? mongoDBLight : mongoDBDark} alt="mongodb logo" width="100%" />
                    </Grid>
                    <Grid item lg={2} md={3} xs={4} >
                        <img src={react} alt="react logo" width="100%" />
                    </Grid>
                    <Grid item lg={2} md={3} xs={4} >
                        <img src={heroku} alt="heroku logo" width="100%"/>
                    </Grid>
                    <Grid item lg={2} md={3} xs={4} >
                        <img src={bootstrap} alt="bootstrap logo" width="100%"/>
                    </Grid>
                    <Grid item lg={2} md={3} xs={4} >
                        <img src={octocat} alt="github logo" width="100%"/>
                    </Grid>
                    <Grid item lg={2} md={3} xs={4} >
                        <img src={theme.palette.type === "light" ? expressLight : expressDark} alt="express logo" width="100%"/>
                    </Grid>
                    <Grid item lg={2} md={3} xs={4} >
                        <img src={theme.palette.type === "light" ? mailchimpLight : mailchimpDark} alt="mailchimp logo" width="100%"/>
                    </Grid>
                    <Grid item lg={2} md={3} xs={4} >
                        <img src={materialUI} alt="material ui logo" width="100%"/>
                    </Grid>
                    <Grid item lg={2} md={3} xs={4} >
                        <img src={postman} alt="postman ui logo" width="100%"/>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    </div>
        
    )
}

export default Tech;