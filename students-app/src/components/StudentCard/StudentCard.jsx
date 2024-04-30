const StudentCard = ({ studentInfo, cohortInfo }) => {

    const { fullName, age, image } = studentInfo
    const { bootcamp, city, year } = cohortInfo

    return (
        <article className='StudentCard'>
            <img src={image} alt="Alumno" />
            <div className="StudentDetails">
                <p>{fullName} | {age} años | {bootcamp}</p>
                <hr />
                <p>{city} Campus - promoción {year}</p>
            </div>
        </article>
    )
}

export default StudentCard