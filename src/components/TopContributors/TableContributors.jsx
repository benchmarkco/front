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
                img_link="https://media.licdn.com/dms/image/C4D03AQHe2SopuFt7cA/profile-displayphoto-shrink_400_400/0/1526669296827?e=1678320000&v=beta&t=cJANuJ19ODfTv_8tycZVBLLWP16PVb5BjH6MWyVXgu4" 
                name="Andres Ferro"
                linkedin_link= "https://linkedin.com/andresferro6"
            />
            <Contributor 
                redirect_to='/'
                img_link="https://media.licdn.com/dms/image/C5603AQE6DeYbj6bhvQ/profile-displayphoto-shrink_400_400/0/1620859243757?e=1678320000&v=beta&t=VhntovjVmoPciZTsxoQYrT1j1L-atC3P8fNPKNvYaNA"
                name="Santiago Tamayo"
                linkedin_link= "https://www.linkedin.com/in/santiago-tamayo-torres-480028114/"
            />
            <Contributor
                redirect_to='/'
                img_link="https://media.licdn.com/dms/image/D4E03AQFKxh3F8YZtGg/profile-displayphoto-shrink_400_400/0/1670356478221?e=1676505600&v=beta&t=HoFJHVtw7emT1KPYFPQ7fQWKgtMNmWN6MLzm4ueLrxA"
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