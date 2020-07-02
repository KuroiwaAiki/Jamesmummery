import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
// components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// icons
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import FaceIcon from '@material-ui/icons/Face';
import DescriptionIcon from '@material-ui/icons/Description';

import Resume from "./../resume-2020.pdf";


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  appBar: {
    boxShadow: "none",
    [theme.breakpoints.up('md')]: {
      padding: "0 2%",
    },
  },
  button: {
    margin: theme.spacing(2),
    padding: "8px 11px",
    borderRadius: "20% / 40%",
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
    <Link to="/projects" onClick={props.handleClick}>
      <MenuItem onClick={handleMobileMenuClose}>
        <IconButton aria-label="projects" color="inherit">
            <OfflineBoltIcon />
        </IconButton>
        <p>Projects</p>
      </MenuItem>
    </Link>
    <Link to="/about">
      <MenuItem onClick={handleMobileMenuClose}>
        <IconButton aria-label="about" color="inherit">
            <FaceIcon />
        </IconButton>
        <p>About</p>
      </MenuItem>
    </Link>
    <a href={Resume} target="_blank" rel="noopener noreferrer">
      <MenuItem onClick={handleMobileMenuClose}>
        <IconButton aria-label="resume" color="inherit">
            <DescriptionIcon />
        </IconButton>
        <p>Resume</p>
      </MenuItem>
    </a>
    <MenuItem onClick={handleMobileMenuClose}>
      <IconButton onClick={props.handleChange} aria-label="change theme" color="inherit">
        {props.iconChange }
      </IconButton>
      <p onClick={props.handleChange}>Theme</p>
    </MenuItem>

    </Menu>

  );

  return (
    <div className={classes.grow}>
      <AppBar color="transparent" className={classes.appBar} position="static">
        <Toolbar>
          <Link to="/">
            <Typography className={classes.title} variant="h6" noWrap>
              James Mummery
            </Typography>
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/projects" onClick={props.handleClick}>
              <Button
                aria-label="projects"
                color="inherit"
                className={classes.button}
                size="large"
                startIcon={<OfflineBoltIcon />}
                >
                Projects
              </Button>
            </Link>
            <Link to="/about" >
              <Button
                aria-label="about"
                color="inherit"
                className={classes.button}
                size="large"
                startIcon={<FaceIcon />}
                >
                About
              </Button>
            </Link>
            <a href={Resume} target="_blank" rel="noopener noreferrer">
              <Button
                aria-label="resume"
                color="inherit"
                className={classes.button}
                size="large"
                startIcon={<DescriptionIcon />}
                >
                Resume
              </Button>
            </a>
            <IconButton onClick={props.handleChange} aria-label="change theme" color="inherit" className={classes.button} >
              {props.iconChange }
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
