import styles from "./Navbar.module.css";
import { CartWidget } from "./CartWidget";

export const Navbar = () => {

  return (
    <div className="container">
      <h1 className={styles.Titulo}>LOUIS VUITTON</h1>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                   <a href="/" className="nav-link">Productos</a>
                </li>
                <li className="nav-item">
                     <a href="/PokeApi" className="nav-link">PokeApi</a>
                </li>

                <li className="nav-item">
                  <a  href="/counter" className="nav-link">
                    CONTACTO
                  </a>
                </li>
              </ul>
              <div className="nav-item">
                <CartWidget/>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
