import { useState } from 'react'
import './App.css'
import { Profile } from './componentss/Profile'
import { Skill } from './componentss/Skill'
import { Header } from './componentss/Header'
import { Footer } from './componentss/Footer'
import { Contact } from './componentss/Contact'

function App() {
  const skillz = ["HTML", "CSS", "JavaScript", "React", "Vite"];

  const [show, setShow] = useState(false);

  function changeShow(){
    setShow(!show);
  }
  
  return (
    <>
      
      <Header />
      <Profile name="Alexandru Paul Adam" age={25} profession="Web Developer" />
      <button onClick={changeShow}>Skills</button>
      {show && (
      <ul>
        {skillz.map((skill, index) => (
          <Skill key={index} text={skill} />
        ))}
      </ul>)}
      <Contact email="paul200234@gmail.com" phone="+1234567890" />
      <Footer/>
    </>
  )
}

export default App
