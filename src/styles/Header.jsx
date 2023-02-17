
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
export const Head = styled.header`
 
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5c123;
    height: 80px;
    border-bottom: 1px solid #ccc;
  
`; 

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
`;

export const Logo = styled.div`
    font-size: 24px;
    font-weight: bold;
`;

export const NavList  = styled.ul`
    display: flex;
    list-style: none;
    margin-left: auto;
`;

export const NavItem = styled.li`
    margin: 0 10px;
    font-size: 18px;
    font-weight: bold;
`;

export const Pad = styled.li`
    margin: 0 10px;
    font-size: 18px;
    font-weight: bold;
    padding: 10px 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: #841f82;
  }
  &:active {
    color: #220822;
  }
`;