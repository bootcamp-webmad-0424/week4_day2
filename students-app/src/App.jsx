import './App.css'

import Button from './components/Button/Button'
import ChildrenExample from './components/ChildrenExample/ChildrenExample'
import Navbar from './components/Navbar/Navbar'
import StudentCard from './components/StudentCard/StudentCard'
import Title from './components/Title/Title'

const App = () => {

  return (
    <div className="App">

      <Navbar />

      <Title titleText={'Otras opciones :3'} />

      <Button
        buttonLink={'/cohortes'}
        buttonText={'Ver otros cohortes'}
        highlighted={true}
      />

      <Button
        buttonLink={'/destacados'}
        buttonText={'Ver alumnos destacados'}
        highlighted={false}
      />

      <Button
        buttonLink={'/nuevos'}
        buttonText={'Ver alumnos nuevos'}
        highlighted={false}
      />

      <Title titleText={'Listado de alumxs'} />

      <StudentCard

        studentInfo={{
          image: 'https://multiapi-app.fly.dev/img/people/image-lorem-face-2613.jpg',
          fullName: 'Rubén Whatever',
          age: 23
        }}
        cohortInfo={{
          city: 'Madrid',
          bootcamp: 'Web Development',
          year: 2023
        }}

      />

      <StudentCard

        studentInfo={{
          image: 'https://multiapi-app.fly.dev/img/people/image-lorem-face-2327.jpg',
          fullName: 'Cintya Whatever',
          age: 55
        }}
        cohortInfo={{
          city: 'Barna',
          bootcamp: 'Web Development',
          year: 2022
        }}

      />

      <StudentCard

        studentInfo={{
          image: 'https://multiapi-app.fly.dev/img/people/image-lorem-face-1909.jpg',
          fullName: 'Mario Whatever',
          age: 22
        }}
        cohortInfo={{
          city: 'Madrid',
          bootcamp: 'UX',
          year: 2020
        }}

      />

      <StudentCard

        studentInfo={{
          image: 'https://multiapi-app.fly.dev/img/people/image-lorem-face-1418.jpg',
          fullName: 'Rubén Whatever',
          age: 23
        }}
        cohortInfo={{
          city: 'Madrid',
          bootcamp: 'Web Development',
          year: 2023
        }}

      />


      {/* LOS DATOS TRANSFERIDOS ENTRE LA APERTURA Y CIERRE DE UN COMPONENTE ESTARÁN EN SU PROPIEDAD CHILDREN */}

      <ChildrenExample>
        <p>Yo soy uno de los children</p>
        <p>Yo soy uno de los children</p>
        <p>Yo soy uno de los children</p>
        <Button buttonLink={'/lol'} buttonText={'Vengo desde el padre lol'} highlighted={true} />
      </ChildrenExample>



    </div>
  )
}

export default App
