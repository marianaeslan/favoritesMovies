import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid #ecefde;
`;

export const NavbarBrand = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ecefde;

  a {
    text-decoration: none;
    color: #ecefde;
  }
`;

export const NavbarLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #ecefde;
  font-size: 1rem;
  padding: 0 8px;
  transition: all 0.3s ease-in;

  &:hover {
    color: #ced0c1;
    border-bottom: 1px solid #ecefde;
  }
`;
