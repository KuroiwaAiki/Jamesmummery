import React from "react";
import { Grid, Link } from '@material-ui/core';

import MediaCard from "./card.js";
import projectsMain from "./project-data";

function ProjectItems(){

    return (
        <Grid container justify="center" spacing={4} style={{padding:"4%"}}>
            {projectsMain.map((value, index) =>
                <Grid item xs={10} md={6} lg={4} key={index}>
                    <Link href={value.link} target="_blank" style={{textDecoration: "none"}}>
                        <MediaCard imageUrl={value.imageUrl} alt={value.name} title={value.title} description={value.description} skills={value.skills} />
                    </Link>
                </Grid>
            )}
        </Grid>
    )
};

export default ProjectItems;