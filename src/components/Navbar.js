import { Link, useMatch, useResolvedPath } from "react-router-dom";
import style from "./Navbar.module.css";
import { ReactComponent as TickBlue } from "./assets/down-arrow-blue.svg";
export default function Navbar() {
  return (
    <nav className={style.Nav}>
      <Link to="/" className={style.ItemLogo}>
        {<TickBlue height="35px" width="40px" />}
      </Link>
      <ul className={style.List}>
        <CustomLink to="/todolist">Todo List</CustomLink>
        <CustomLink to="/outdated">Outdated</CustomLink>
      </ul>
    </nav>
  );
}
function CustomLink({ to, children }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? style.active : ""}>
      <Link to={to}>{children}</Link>
    </li>
  );
}
