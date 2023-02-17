import { useSelector } from "react-redux";
import DarkModeToggle from './DarkModeToggle';

import {Head,Nav,Logo,NavList,NavItem,Pad, StyledLink} from '../styles/Header'
// import {Header,Nav,Logo,NavList,NavItem,Pad} from '../styles/DarkModeToggle'


const Header = () => {
  const userFirst = useSelector((state) => state.user.firstName);
  const userLast = useSelector((state) => state.user.lastName);
  const totalQuantity = useSelector(state => state.cart.cartTotalQuantity)

  return (
    <header>
      <Nav>
        <Logo>
          <StyledLink to="/">
            ESHOP
          </StyledLink>
        </Logo>
        <NavList>

          <Pad><StyledLink to="/user"> &#x1F9D1;  {userFirst} {userLast}</StyledLink></Pad>

          <Pad><StyledLink to="/cart"> &#x1F6D2; {totalQuantity} {totalQuantity <= 1 ? "Item" : "Items"} </StyledLink></Pad>

          <NavItem><DarkModeToggle /></NavItem>


        </NavList>
      </Nav>
    </header>
  );
};

export default Header;