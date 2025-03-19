import { useState } from "react"

import ( useState)

function App(){

  const [nome, setNome] = useState('Ronaldo')

 const Formulario = () => {

  return (
    <div>
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

  return (
    <div>
      <h3>Pizzaria 2C</h3>
     <Formulario/>
     <Formulario/>
     <Formulario/>
     <Formulario/>
    </div>
  )
}

export default App
