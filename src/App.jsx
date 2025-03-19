import { useState } from "react"

import ( useState)

function App(){

  const [nome, setNome] = useState('Ronaldo')

  return (
    <div>
      <h3>Pizzaria 2C</h3>
      <input
         className="nome"
         onChange={(e)=>{setNome(e.target.value)}}
         type="text" />
      <button
         onClick={()=>{alert(nome)}}
         className="botao">
         CLIQUE AQUI 
      </button>
    </div>
  )
}

export default App
