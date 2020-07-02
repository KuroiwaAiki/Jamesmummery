import React, { useState, useEffect } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import cyan from '@material-ui/core/colors/cyan';
import orange from '@material-ui/core/colors/orange';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import ButtonAppBar from "../components/simple-app-bar";
import BackToTop from "../components/scroll-top";
import TopSection from "./top-section";
import ProjectsSection from "./projects-section";
import Tech from "./tech";
import About from "./about";
import Footer from "../components/footer";

import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

export default function App(props){

    const userMode = localStorage.getItem("darkMode");
    const [darkMode, setDarkMode] = useState(userMode);

    function handleChange(){
      setDarkMode(darkMode === "true" ? "false" : "true");
    };

    useEffect(()=> {
        localStorage.setItem("darkMode", darkMode);
    },
    [darkMode]
    );

    const theme = createMuiTheme({
        palette: {
            type: darkMode === "true" ? "dark" : "light",
            primary: {
                main: darkMode === "true" ? cyan[500] : orange[500],
            },
        },
        typography: {
            fontFamily: '"Work Sans", "Roboto", "Helvetica", "Arial",  sans-serif',
        }
    });

    const handleClick = () => {
            setTimeout(() => {
            const anchor = document.querySelector("#projects");
            console.log (anchor);
            if (anchor) {
                anchor.scrollIntoView({ behavior: 'smooth'});
              }
            }, 0);
      }

    return (
            <ThemeProvider theme={theme}>
                <Router >
                    <CssBaseline />
                    <ButtonAppBar handleChange={handleChange} handleClick={handleClick} iconChange={darkMode ? <WbSunnyIcon /> : <NightsStayIcon />}/>
                    <BackToTop />
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/projects">
                            <TopSection handleClick={handleClick}/>
                            <ProjectsSection />
                            <Tech />
                        </Route>
                        <Route path="/" >
                            <TopSection  />
                            <ProjectsSection />
                            <Tech />
                        </Route>
                    </Switch>
                    <div style={{display: "flex", flexGrow: "2"}}></div>
                    <Footer />
                </Router>
            </ThemeProvider>
    );
};