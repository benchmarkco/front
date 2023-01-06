import Contributor from "./Contributor";

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
            <Contributor
                redirect_to='/front/profile'
                img_link="" 
                name="Andres Ferro"
                linkedin_link= "https://linkedin.com/andresferro6"
            />
            <Contributor 
                redirect_to='/'
                img_link=""
                name="Santiago Tamayo"
                linkedin_link= "https://www.linkedin.com/in/santiago-tamayo-torres-480028114/"
            />
            <Contributor
                redirect_to='/'
                img_link=""
                name="Alejandro Gallo"
                linkedin_link="https://www.linkedin.com/in/alejandrogallovalencia"
            />
            </tbody>
        </table>
    </div>
    </>
  )
}

export default TableContributors