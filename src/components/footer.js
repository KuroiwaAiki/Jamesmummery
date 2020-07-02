import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';



const useStyles = makeStyles((theme) => ({

  appBar: {
    minHeight: 72,
    boxShadow: "none",
    paddingTop: "4%",
  },
  toolBar: {
      flexDirection: "column",
  },
  button: {
    margin: theme.spacing(2),
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  return (
      <AppBar color="transparent" position="static" className={classes.appBar} component="footer">
        <Toolbar className={classes.toolBar}>
            <div style={{width: "100%"}}>
              <Button
                  href="mailto:james.aiki@gmail.com"
                  target="_blank"
                  color="inherit"
                  className={classes.button}
                  startIcon={<EmailRoundedIcon />}
              >
                  Email
              </Button>
              <Button
                  href="https://www.linkedin.com/in/james-mummery-b62861128/"
                  target="_blank"
                  color="inherit"
                  className={classes.button}
                  startIcon={<LinkedInIcon />}

              >
                  LinkedIn
              </Button>
              <Button
                  href="https://github.com/KuroiwaAiki"
                  target="_blank"
                  color="inherit"
                  size="large"
                  className={classes.button}
                  startIcon={<GitHubIcon />}
              >
                  GitHub
              </Button>
            </div>
            <Typography variant="body2" component="p" className={classes.button}>
              © Copyright 2020
            </Typography>
        </Toolbar>

      </AppBar>
  );
}