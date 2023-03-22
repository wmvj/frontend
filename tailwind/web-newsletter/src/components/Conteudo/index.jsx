import { useEffect, useState } from "react"

const Conteudo = () => {

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('') 
  const [fullName, setFullName] = useState('')  
 

  useEffect(() => {
    setFullName(`${name} ${lastName}`)
  },[name, lastName])

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)    
  }

  return (
    <div className="flex flex-col">
      <input
        type="text"
        placeholder="Digite seu nome"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="text"
        placeholder="Digite seu sobrenome"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <p>Nome Completo: {fullName}</p>
    </div>
  );
}

export default Conteudo
