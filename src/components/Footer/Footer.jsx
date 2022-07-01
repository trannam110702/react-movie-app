import footerImg from "../../assets/img/footer-bg.jpg";
import Logo from "../../assets/img/favicon.png";
import { NavLink, Link } from "react-router-dom";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${footerImg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <NavLink to="/" style={{ height: "50px" }}>
            <img src={Logo} alt="" style={{ width: "50px", height: "50px" }} />
          </NavLink>
          <NavLink className="h-brand" to="/">
            nMovie
          </NavLink>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About us</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Pravacy policy</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">You must watch</Link>
            <Link to="/">Recent release</Link>
            <Link to="/">Top IMDB</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
