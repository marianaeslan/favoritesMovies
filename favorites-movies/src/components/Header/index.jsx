import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarLinks, NavLink } from "./styles";

export default function NavBar() {
  return (
    <Navbar>
      <NavbarBrand>
        <NavLink to="/">Movie App</NavLink>
      </NavbarBrand>
      <NavbarLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </NavbarLinks>
    </Navbar>
  );
}
