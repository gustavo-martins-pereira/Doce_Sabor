import styled from "styled-components";

const HeaderStyled = styled.header`
    background-image: var(--header-linear-gradient);

    padding: 1.5rem;

    color: var(--header-text-color);
    font-family: var(--ultra-font);
    font-size: 2rem;
    text-align: center;
`;

export function Header() {
    return (
        <HeaderStyled>Doce Sabor</HeaderStyled>
    );
}
