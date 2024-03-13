import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import { Header } from "@/components/Header/Header";
import { Product } from "@/components/Product/Product";

import "reset-css";
import "normalize.css";

import { LayoutMeasures } from "./utils/layoutMeasures";

import Product1 from "@/images/product-1.png";
import Product2 from "@/images/product-2.png";
import Product3 from "@/images/product-3.png";
import Product4 from "@/images/product-4.png";
import Product5 from "@/images/product-5.png";
import Product6 from "@/images/product-6.png";
import Product7 from "@/images/product-7.png";
import Product8 from "@/images/product-8.png";
import Product9 from "@/images/product-9.png";

const GlobalStyle = createGlobalStyle`
    /*============================== Configurations ==============================*/
    :root {
        /*=============== COLORS ===============*/
        --white-color: hsl(0, 0%, 100%);
        --paradiso-color: hsl(180, 41%, 36%);
        --camelot-color: hsl(325, 45%, 32%);
        --rouge-color: hsl(325, 46%, 46%);
        --blush-color: hsl(325, 46%, 48%);
    
        /*=============== BACKGROUNDS ===============*/
        --header-linear-gradient: linear-gradient(to right, var(--rouge-color), var(--camelot-color));
    
        /*=============== BORDERS ===============*/
    
    
        /*=============== TEXT COLORS ===============*/
        /*======= HEADER =======*/
        --header-text-color: var(--white-color);
        /*======= PRODUCT =======*/
        --product-name-text-color: var(--blush-color);
        --product-price-text-color: var(--paradiso-color);

    
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
    

    /*=============== RESPONSIVE LAYOUTS ===============*/
    /*======= TABLET =======*/
    @media screen and (min-width: ${LayoutMeasures.tablet}) {
        html,
        body {
            font-size: 20px;
        }
    }

    /*======= DESKTOP =======*/
    @media screen and (min-width: ${LayoutMeasures.desktop}) {
        html,
        body {
            font-size: 24px;
        }
    }
`;

const ProductsWrapper = styled.main`
    max-width: 50rem;

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 3rem 1rem;

    margin: auto;
    padding: 1.25rem;
`;

const products = [
    {
        id: 1,
        src: Product1,
        name: "Bolo de Morango",
        price: 16.99,
    },
    {
        id: 2,
        src: Product2,
        name: "Marshmallow",
        price: 11.99,
    },
    {
        id: 3,
        src: Product3,
        name: "Torta de Morango",
        price: 14.00,
    },
    {
        id: 4,
        src: Product4,
        name: "Cupcake de Chocolate",
        price: 16.00,
    },
    {
        id: 5,
        src: Product5,
        name: "Jujubas",
        price: 18.00,
    },
    {
        id: 6,
        src: Product6,
        name: "Macarons",
        price: 17.99,
    },
    {
        id: 7,
        src: Product7,
        name: "Pirulitos de Chocolate",
        price: 10.99,
    },
    {
        id: 8,
        src: Product8,
        name: "Cakesicles",
        price: 19.00,
    },
    {
        id: 9,
        src: Product9,
        name: "Brigadeiros",
        price: 13.99,
    },
];

export function App() {
    return (
        <React.Fragment>
            <GlobalStyle />

            <Header />
            <ProductsWrapper>
                {products.map(product => {
                    return (
                        <Product
                            key={product.id}
                            src={product.src}
                            name={product.name}
                            price={product.price}
                        />
                    );
                })}
            </ProductsWrapper>
        </React.Fragment>
    );
}
