const TableContributors = () => {
  return (
    <>
    <div className="container">
        <table className="table table-responsive table-hover border table-light table-striped mt-5">
        <thead>
            <tr>
            <th scope="col"></th>
            <th scope="col">Linkedin</th>
            </tr>
        </thead>
            <tbody>
                <tr className="">
                    <td><img  
                            className="img-thumbnail rounded-circle img-fluid" 
                            src="https://media-exp1.licdn.com/dms/image/C4D03AQHe2SopuFt7cA/profile-displayphoto-shrink_400_400/0/1526669296827?e=1672876800&v=beta&t=wN5bOvQjwkq3r_tA0acvXyggDT8v1yWjzCYNQhaCgwI" 
                            alt="" 
                            style={{ width: "5rem", height: "5rem" }}
                            /> <span className="fw-bold mx-3">Andres Ferro</span>
                    </td>
                    <td className="align-middle">
                        <a className="btn btn-light" href="https://www.linkedin.com/in/andresferro6/"><i className="fa-brands fa-linkedin rounded-5 w-100 h-100"></i></a>
                    </td>

                </tr>
                <tr>
                    <td><img  className="img-thumbnail rounded-circle img-fluid" 
                              src="https://media-exp1.licdn.com/dms/image/C5603AQE6DeYbj6bhvQ/profile-displayphoto-shrink_400_400/0/1620859243757?e=1672876800&v=beta&t=1zBrY0J_mBQ6LzM2BY0BrrSph_n8A4RnkImY0V1n8z0"
                              alt="" 
                              style={{ width: "5rem", height: "5rem" }}
                              /><span className="fw-bold mx-3">Santiago Tamayo</span>
                    </td>
                    <td className="align-middle">
                        <a className="btn btn-light" href="https://www.linkedin.com/in/santiago-tamayo-torres-480028114/"><i className="fa-brands fa-linkedin rounded-5 w-100 h-100"></i></a>
                    </td>

                </tr>
                <tr>
                    <td><img  className="img-thumbnail rounded-circle img-fluid" 
                              src="https://media-exp1.licdn.com/dms/image/C5603AQGcLPv_Q7L1ug/profile-displayphoto-shrink_400_400/0/1610926967206?e=1672876800&v=beta&t=xiF0KJEdb2lSOJQy0F6cxRQuBvp7TKdeLuKtIl2iPo0"
                              alt="" 
                              style={{ width: "5rem", height: "5rem" }}
                              /><span className="fw-bold mx-3">Sebastian Paris</span>
                    </td>
                    <td className="align-middle">
                        <a className="btn btn-light" href="https://www.linkedin.com/in/sebastian-paris-paris-502b31b5/"><i className="fa-brands fa-linkedin rounded-5 w-100 h-100"></i></a>
                    </td>

                </tr>
            </tbody>
        </table>
    </div>
    </>
  )
}

export default TableContributors