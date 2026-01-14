import React from 'react'

export const Contact = ({email, phone, show}) => {

  const[display, setDisplay] = React.useState(show);
  const toggleDisplay = () => {
    setDisplay(!display);
  }
  return (
    <>
    <button onClick={toggleDisplay}>Contact Info</button>
    {display && (
    <div>
      <h3>Contacto</h3>
      <p>Email: {email}</p>
      <p>Telefono: {phone}</p>
    </div>
    )}
    </>
  )
}
