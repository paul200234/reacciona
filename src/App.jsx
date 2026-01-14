import { useState } from 'react'
import './App.css'
import { Profile } from './componentss/Profile'
import { Skill } from './componentss/Skill'
import { Header } from './componentss/Header'
import { Footer } from './componentss/Footer'

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
      <Footer/>
    </>
  )
}

export default App
