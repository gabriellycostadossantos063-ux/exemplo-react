import { useState } from 'react';
import './style.css';

function SignUp() {
const [ nome, setNome ] = useState("")
const [ email, setEmail ] = useState("")
const [ senha, setSenha ] = useState("")

function handleSubmit(event) {
    event.preventDefault();
    console.log(nome, email, senha)
}
    //variaveis
    //funções
    return (
        <>
           <h2>Criar Conta</h2>
           <form onSubmit={handleSubmit}>
             <label>nome</label>   
             <input
              type="text"
              value={nome}
              onChange={ (event) => setNome(event.target.value)}
              />
             <label>email</label>
             <input
              type="email" 
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              />
             <label>senha</label>
             <input
              type="password"
              value={senha}
               onChange={(event) => setSenha(event.target.value)} 
              />
             <button type="submit">Cadastrar</button>
           </form>
        </>
    )
}
export default SignUp