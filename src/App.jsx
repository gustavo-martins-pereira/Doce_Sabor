import React, { useEffect, useRef, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { LuListFilter } from "react-icons/lu";
import { TbLogout } from "react-icons/tb";

import { Header } from "@/components/Header/Header";
import { Product } from "@/components/Product/Product";
import { Overlay } from "@/components/Overlay/Overlay";

import "reset-css";
import "normalize.css";

import { LayoutMeasures } from "@/utils/layoutMeasures";

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
        --black-25-color: hsla(0, 0%, 0%, 0.25);
        --white-color: hsl(0, 0%, 100%);
        --red-color: hsl(0, 100%, 50%);
        --paradiso-color: hsl(180, 41%, 36%);
        --camelot-color: hsl(325, 45%, 32%);
        --rouge-color: hsl(325, 46%, 46%);
        --blush-color: hsl(325, 46%, 48%);
        --flirt-color: hsl(325, 100%, 32%);
        --rose-color: hsl(325, 100%, 43%);
        --rose-25-color: hsla(325, 100%, 43%, 0.25);
        --rose-50-color: hsla(325, 100%, 43%, 0.5);
    

        /*=============== BACKGROUNDS ===============*/
        /*======= HOME =======*/
        --filters-background-color: var(--white-color);
        /*======= HEADER =======*/
        --header-linear-gradient: linear-gradient(to right, var(--rouge-color), var(--camelot-color));
        /*======= INPUTS =======*/
        --input-range-background-color: var(--rose-25-color);
        --input-range-ball-background-color: var(--rose-color);
        /*======= INPUTS =======*/
        --overlay-background-color: var(--black-25-color);


        /*=============== BORDERS ===============*/
        --input-range-ball-active-box-shadow-color: var(--rose-25-color);

    
        /*=============== TEXT COLORS ===============*/
        /*======= GENERIC =======*/
        --icon-text-color: var(--rose-color);
        --icon-hover-text-color: var(--flirt-color);
        /*======= HOME =======*/
        --close-filters-text-color: var(--red-color);
        /*======= HEADER =======*/
        --header-text-color: var(--white-color);
        /*======= PRODUCT =======*/
        --product-name-text-color: var(--blush-color);
        --product-price-text-color: var(--paradiso-color);

    
        /*=============== FONTS ===============*/
        /*======= GENERIC =======*/
        --ultra-font: "Ultra", "Arial", "Helvetica", serif;
        --comic-neue-font: "Comic Neue", "Arial", "Helvetica", sans-serif;
    }
    
    /*============================== GENERIC ELEMENTS ==============================*/
    html,
    body {
        font-family: var(--comic-neue-font);
        font-size: 16px;
    }

    body {
        overflow-y: scroll;
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

const Home = styled.main`
    display: flex;
    flex-direction: column;

    position: relative;

    overflow: hidden;
`;

const FilterIcon = styled(LuListFilter)`
    display: inline-block;
    
    margin: 1rem;
    margin-left: auto;

    color: var(--icon-text-color);
    font-size: 4rem;

    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        color: var(--icon-hover-text-color);
    }
`;

const Filters = styled.article`
    background-color: var(--filters-background-color);

    max-width: 80vw;

    position: absolute;
    top: 0;
    right: 0;

    border-bottom-left-radius: 10px;
    box-shadow: 0 0 4px var(--black-25-color);
    padding: 1rem;

    transform: translateX(${props => props.$shouldShowFilter ? "0%" : "110%"});
    transition: transform 0.2s;
    z-index: 1;
`;

const CloseFiltersWrapper = styled.button`
    background-color: unset;

    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    border: none;

    color: var(--close-filters-text-color);

    cursor: pointer;
    transition: color 0.2s;

    &:hover,
    &:focus {
        color: color-mix(in srgb, var(--close-filters-text-color) 80%, black);
    }
`;

const CloseIcon = styled(TbLogout)`
    font-size: 2.5rem;
`;

const CloseText = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
`;

const FiltersForm = styled.form`
    margin: 2rem auto 1rem;
`;

const Input = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const MinPrice = styled.span`
    min-width: 2rem;

    display: inline-block;

    font-weight: bold;
`;

const PriceFilter = styled.input`
    appearance: none;

    background-color: var(--input-range-background-color);

    height: 0.5rem;

    display: block;

    border-radius: 1rem;

    cursor: pointer;

    &::-webkit-slider-thumb {
        appearance: none;

        background-color: var(--input-range-ball-background-color);

        width: 1rem;
        height: 1rem;

        display: block;

        border-radius: 50%;
    }

    &:active::-webkit-slider-thumb {
        box-shadow: 0 0 2px 6px var(--input-range-ball-active-box-shadow-color);
    }
`;

const ProductsWrapper = styled.section`
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
    const productPrices = products.map(product => product.price);
    const initialMinPrice = Math.floor(productPrices.reduce((prev, current) => prev < current ? prev : current, Number.MAX_VALUE));
    const initialMaxPrice = Math.floor(productPrices.reduce((prev, current) => prev > current ? prev : current, 0));

    const [shouldShowFilter, setShouldShowFilter] = useState(false);
    const [minPrice, setMinPrice] = useState(0);
    const [productsOnPage, setProductsOnPage] = useState([]);
    const [shouldShowOverlay, setShouldShowOverlay] = useState(false);

    const filtersRef = useRef();


    useEffect(() => {
        setProductsOnPage(products);
        setMinPrice(initialMinPrice);
    }, []);


    function handlerOnOpenFilters() {
        setShouldShowFilter(true);
        setShouldShowOverlay(true);
    }
    
    function handleOnCloseFilters() {
        setShouldShowFilter(false);
        setShouldShowOverlay(false);
    }

    function handleOnChangeMinPrice(event) {
        setMinPrice(event.target.value);

        const filteredProducts = products.filter(product => product.price > event.target.value);
        setProductsOnPage(filteredProducts);
    }

    return (
        <React.Fragment>
            <GlobalStyle />

            <Header />
            
            <Home>
                <FilterIcon onClick={handlerOnOpenFilters} />

                <Filters $shouldShowFilter={shouldShowFilter} ref={filtersRef}>
                    <CloseFiltersWrapper aria-label="Fechar filtros" onClick={handleOnCloseFilters}>
                        <CloseIcon />
                        <CloseText>Fechar</CloseText>
                    </CloseFiltersWrapper>

                    <FiltersForm>
                        <Input>
                            <label>Preço Mínimo: R$ <MinPrice>{minPrice}</MinPrice></label>
                            <PriceFilter
                                type="range"
                                value={minPrice}
                                min={initialMinPrice}
                                max={initialMaxPrice}
                                onChange={handleOnChangeMinPrice}
                            />
                        </Input>
                    </FiltersForm>
                </Filters>

                <ProductsWrapper>
                    {productsOnPage.map(product => {
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
            </Home>

            {
                shouldShowOverlay &&
                <Overlay />
            }
        </React.Fragment>
    );
}
