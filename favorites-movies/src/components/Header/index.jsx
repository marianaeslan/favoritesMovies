import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarLinks, NavbarLink } from "./styles";

export default function NavBar() {
  return (
    <Navbar>
      <NavbarBrand>
        <NavbarLink to="/">Movie App</NavbarLink>
      </NavbarBrand>
      <NavbarLinks>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/favorites">Favorites</NavbarLink>
      </NavbarLinks>
    </Navbar>
  );
}
