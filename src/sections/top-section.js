import React from "react";
import { Grid } from '@material-ui/core';

import IntroHeader from "../components/intro-header";
import Arrow from "../components/arrow";

function TopSection(props){

    return (
        <header >
            <Grid container justify="center" style={{margin: "10% auto 3%", padding: "2%"}}>
                <Grid item xs={10} lg={8}>
                    <IntroHeader handleClick={props.handleClick}/>
                </Grid>
            </Grid>
            <Arrow handleClick={props.handleClick}/>
        </header>
    )
};

export default TopSection;