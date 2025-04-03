import { useState } from "react"

import ( useState)

function App(){

  const [nome, setNome] = useState('Ronaldo')

 const Formulario = (props) => {

  return (
    <div>
       <input
         placeholder={props.sombra}
         className="nome"
         onChange={(e)=>{setNome(e.target.value)}}
         type="text" />
      <button
         onClick={()=>{(props.mensagem != null)? alert (props.mensagem) 
                                        : alert("TEXTO PADRÃO") }}
         className="botao">
         {(props.textoBotao != null) ? props.textoBotao : "CLIQUE AQUI"} 
      </button>
    </div>
  )
 }

  return (
    <div>
      <h3>Pizzaria 2C</h3>
     <Formulario sombra="Digite seu nome..." textoBotao="ENVIAR NOME"/>
     <Formulario sombra="Digite seu email..." textoBotao="E-MAIL"   />
     <Formulario sombra="(11)90000-0000" textoBotao="CELULAR"   />
     <Formulario mensagem="Mensagem enviada pelo App"   />
    </div>
  )
}

export default App
