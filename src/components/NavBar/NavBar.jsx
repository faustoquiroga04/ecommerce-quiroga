import {Link} from 'react-router-dom'
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

export default function NavBar({title}) {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <Link className="navbar-brand" to="/">
            {title}
          </Link>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/category/celular">
                  Phones
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category/tablet">
                  Tablets
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category/computer">
                  Noteboks
                </Link>
              </li>
            </ul>
            <form className="" role="search">
                <CartWidget cartCount={5} />
            </form>
          </div>
        </div>
      </nav>
    );
}