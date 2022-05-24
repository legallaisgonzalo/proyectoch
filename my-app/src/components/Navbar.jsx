import styles from "./Navbar.module.css";
import { CartWidget } from "./CartWidget";

export const Navbar = () => {

  return (
    <div className="container">
      <h1 className={styles.Titulo}>LOUIS VUITTON</h1>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <p class="enlace nav-link active" aria-current="page" href="#">
                    HOMBRES
                  </p>
                </li>
                <li class="nav-item">
                  <p class="enlace nav-link" href="#">
                    MUJERES
                  </p>
                </li>

                <li class="nav-item">
                  <p class="enlace nav-link" href="#">
                    CONTACTO
                  </p>
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
