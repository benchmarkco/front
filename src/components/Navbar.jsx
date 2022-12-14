import { NavLink } from "react-router-dom";


const Navbar = ({company_name}) => {
  return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">

            <NavLink to="/" className="navbar-brand fw-bold">{company_name}</NavLink>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">                
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Sobre Nosotros
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
   
                    <NavLink to="/front/contributors" 
                             style={{ textDecoration: 'none' }}
                             >
                        <li className="dropdown-item fw-ligth">Nuestro Equipo</li>
                    </NavLink>

                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="https://t.me/+hF226VyWW8I5OTYx">Suscríbete<i className="fa-brands fa-telegram mx-1"></i></a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Open Source</a>
                </li>

              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </header>
  )
}

export default Navbar