import { Outlet } from "react-router-dom";

export default function MainContent() {
  return (
    <div className="content">
      <div className="container-fluid">
        <Outlet />
      </div>
    </div>
  );
}
