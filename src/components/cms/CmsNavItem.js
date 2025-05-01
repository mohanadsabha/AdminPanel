import { NavLink } from "react-router-dom";

export default function CmsNavItem(props) {
  //  {/* <li className="nav-item menu-is-opening menu-open"> */}
  return (
    <li className="nav-item">
      <NavLink to={props.item.path} className="nav-link" end>
        <i className={`${props.item.icon} nav-icon`}></i>
        <p>{props.item.label}</p>
      </NavLink>
    </li>
  );
}
