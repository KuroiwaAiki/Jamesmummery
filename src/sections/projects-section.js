import React from 'react';
import Typography from '@material-ui/core/Typography';

import ProjectItems from "../components/project-items";

function ProjectsSection(){

    return (
        <section >
            <Typography id="projects" variant="h2" style={{padding: "4%"}}>
                PROJECTS
            </Typography>
            <ProjectItems />
        </section>
    )
}

export default ProjectsSection;