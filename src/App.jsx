
import './App.css'

function App() {


  return (
    <div className="container">

      <h1>Cadastro de Produtos</h1>

      <form>
        <div className="row">
         <div className="col">
         <input
            type="text"
            className="form-control"
            placeholder='Nome do Produto'
          />
         </div>
        </div>

        <div className="row">
          
          <div className="col">
            <input 
              type="text" 
              className="form-control"
              placeholder='Preço do Produto'
            />
          
          </div>

        </div>
        <button className='btn btn-outline-success'>Inser</button>
        <button className='btn btn-outline-primary'>Salvar</button>
      </form>

      <table>

      </table>

    </div>

  )
}

export default App
