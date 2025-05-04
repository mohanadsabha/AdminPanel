import { Link, useLocation } from "react-router-dom";
import CmsNavItem from "./CmsNavItem";

export default function CmsNav(props) {
  const location = useLocation();
  return (
    <li className="nav-item">
      <Link
        className={
          location.pathname.includes(props.path)
            ? "nav-link active"
            : "nav-link"
        }
      >
        <i className="nav-icon fas fa-table"></i>
        <p>
          {props.label}
          <i className="fas fa-angle-left right"></i>
        </p>
      </Link>
      <ul className="nav nav-treeview" style={{ display: "none" }}>
        {props.items.map((element, i) => (
          <CmsNavItem key={i} item={element} />
        ))}
      </ul>
    </li>
  );
}
