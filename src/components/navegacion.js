import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;

    @media(min-width: 768px){
        padding: 0;
        flex-direction: row;
    }

`;

const Navlink = styled(Link)`
    color: #FFF;
    font-weight: 700;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    padding: .5rem;
    margin-right: 1rem;
    &:last-of-type {
        margin-tight: 0;
    }
    &.pagina-actual {
        border-bottom: 2px solid #FFF;
        margin: .5rem;
        
    }
`;

const Navegacion = () => {
    return ( 
        <Nav>
            <Navlink
                to={'/'}
                activeClassName="pagina-actual"
            >Inicio</Navlink>
            <Navlink to={'/nosotros'}
            activeClassName="pagina-actual"
            >Nosotros</Navlink>
            <Navlink to={'/propiedades'}
            activeClassName="pagina-actual"
            >Propiedades</Navlink>
        </Nav>
     );
}
 
export default Navegacion;