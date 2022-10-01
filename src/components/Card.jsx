import { NavLink } from "react-router-dom";

const Card = ({description, title,  img_link, created_by, goto_link }) => {
  return (
    <div className="col">
        <div className="card shadow-sm">

            <img className="bd-placeholder-img card-img-top img-fluid img-thumbnail w-100 mx-auto" src={img_link} alt="Imgagen de la APP"/>
            <div className="card-body">
                <p className="card-text fw-bold text-center">{title}</p>
                <p className="text-muted"> 
                    {description}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">

                        <NavLink to={ goto_link }
                                className="navbar-brand fw-bold">
                                <button type="button" 
                                        className="btn btn-sm btn-outline-secondary fw-bold">Ver App
                                </button>
                        </NavLink>

                    </div>
                    <small className="text-muted fw-bold">{ created_by } </small>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card