import { Link } from "react-router-dom";

function NavPage() {
  return (
    <div className="headers">
      <h2 className="Logo">Smilegate Megaport</h2>

      <div className="nav">
        <Link to="/AddPage" className="navContent">
          쿠폰 번호 발급 페이지
        </Link>
        <Link to="/checkPage" className="navContent">
          쿠폰 번호 조회 페이지
        </Link>
      </div>
    </div>
  );
}

export default NavPage;
