import styled from "styled-components";

const OverlayStyled = styled.div`
    background-color: var(--overlay-background-color);

    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;
`;

export function Overlay() {
    return (
        <OverlayStyled />
    );
}
