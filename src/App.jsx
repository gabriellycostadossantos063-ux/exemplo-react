
import './App.css'
import Header from './components/Header'

function App() {
  return (
    <>
    <Header />
    <section>
      <h2 id="exemplo-h2">Seção de Listas</h2>

      <h3>Lista não ordenadas</h3>
      <ul id="ul">
        <li>Batata</li>
        <li>Pão</li>
        <li>Arroz</li>
      </ul>

       <h3>Lista ordenadas</h3>
      <ul id="ul">
        <li>Vôlei</li>
        <li>Academia</li>
        <li>Saúde</li>
      </ul>

    </section>
    <footer id="footer">
   
   <p>Minha primeira API React - &copy;
    todos os direitos reservados</p>
  
    </footer>
    </>
  )

}



export default App
