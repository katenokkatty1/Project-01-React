import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";
import clsx from "clsx";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  clsx(s.link, isActive && s.active);

export default function NavBar() {
  return (
    <nav className={s.container}>
      <NavLink to={"/"} className={navLinkClass}>Home</NavLink>
        <NavLink to={"/products"} className={navLinkClass}>Products</NavLink>
      <NavLink to={"/counter"} className={navLinkClass}>Counter</NavLink>
      <NavLink to={"/gender-reveal"} className={navLinkClass}>Gender Reveal</NavLink>
      <NavLink to={"/national-reveal"} className={navLinkClass}>Nationalize</NavLink>
      <NavLink to={"/space-mission-form"} className={navLinkClass}>Space Mission</NavLink>
      <NavLink to={"/ideal-weight-calculator"} className={navLinkClass}>Ideal Weight Calculator</NavLink>
      <NavLink to={"/about"} className={navLinkClass}>About</NavLink>
      <NavLink to={"/profile"} className={navLinkClass}>Profile</NavLink>
      <NavLink to={"/contact"} className={navLinkClass}>Contact</NavLink>
   
    </nav>
  );
}