import { NavLink } from "react-router-dom";

const Contributor = ({img_link, name, linkedin_link }) => {
  return (
    <>
    <tr>

    <td>
    <NavLink to="/front/"
        style={{ textDecoration: 'none', color: 'black' }}>
        <img  className="img-thumbnail rounded-circle img-fluid" 
            src={img_link}
            alt="" 
            style={{ width: "5rem", height: "5rem" }}
            /><span className="fw-bold mx-3">{name}</span>
    </NavLink>   
    </td>
    <td className="align-middle">
        <a className="btn btn-light" href={linkedin_link}><i className="fa-brands fa-linkedin rounded-5 w-100 h-100"></i></a>
    </td>

    </tr>
    </>
  )
}

export default Contributor