import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import { Header } from "@/components/Header/Header";

import "reset-css";
import "normalize.css";

const GlobalStyle = createGlobalStyle`
    /*============================== Configurations ==============================*/
    :root {
        /*=============== COLORS ===============*/
        --white-color: hsl(0, 0%, 100%);
        --camelot-color: hsl(325, 45%, 32%);
        --rouge-color: hsl(325, 46%, 46%);
    
        /*=============== BACKGROUNDS ===============*/
        --header-linear-gradient: linear-gradient(to right, var(--rouge-color), var(--camelot-color));
    
        /*=============== BORDERS ===============*/
    
    
        /*=============== TEXT COLORS ===============*/
        --header-text-color: var(--white-color);
    
        /*=============== FONTS ===============*/
        /*======= GENERIC =======*/
        --ultra-font: "Ultra", "Arial", "Helvetica", serif;
    }
    
    /*============================== GENERIC ELEMENTS ==============================*/
    html,
    body {
        font-size: 16px;
    }
    
    /*============================== GENERIC CLASSES ==============================*/
    
`;

export function App() {
    return (
        <React.Fragment>
            <GlobalStyle />

            <Header />
        </React.Fragment>
    );
}
