import styled from "styled-components";

const ProductWrapper = styled.section`
    width: min-content;
    
    font-family: var(--ultra-font);
    text-align: center;
`;

const ProductImage = styled.img`
    max-width: 7.5rem;

    border-radius: 50%;
`;

const Name = styled.h2`
    margin-top: 1.5rem;

    color: var(--product-name-text-color);
`;

const Price = styled.h3`
    margin-top: 1rem;

    color: var(--product-price-text-color);
`;

export function Product({ src, name, price }) {
    return (
        <ProductWrapper>
            <ProductImage src={src} alt={name} />
            <Name>{name}</Name>
            <Price>R$ {String(price).replace(".", ",")}</Price>
        </ProductWrapper>
    );
}
