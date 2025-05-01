import "../styles/css/adminlte.min.css";
import "../styles/fontawesome-free/css/all.min.css";
import "../styles/js/adminlte.min.js";
import "jquery";
import "bootstrap/dist/js/bootstrap.bundle";
import MainSideBar from "../layouts/MainSideBar.js";
import MainHeader from "../layouts/MainHeader.js";
import MainContent from "../layouts/MainConent.js";
import MainConentHeader from "../layouts/MainContentHeader.js";
import Footer from "../layouts/Footer.js";

export default function Parent() {
  return (
    <div className="wrapper">
      <MainHeader />
      <MainSideBar />

      <div className="content-wrapper">
        <MainConentHeader />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}
