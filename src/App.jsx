
import './App.css'

function App() {


  return (
    <div className="container">

      <h1 className='mt-3 mb-3'>Cadastro de Produtos</h1>

      <form>
        <div className="row mb-3">
         <div className="col">
         <input
            type="text"
            className="form-control"
            placeholder='Nome do Produto'
          />
         </div>
        </div>

        <div className="row mb-3">
          
          <div className="col">
            <input 
              type="text" 
              className="form-control"
              placeholder='Preço do Produto'
            />
          
          </div>

        </div>
       <div className='btn-group d-flex gap-3'>
       <button className='btn btn-outline-success'>Inserir</button>
       <button className='btn btn-outline-primary'>Salvar</button>
        
       </div>
      </form>

      <table className='table table'>
        <thead>
          <tr>
            
          </tr>
        </thead>

      </table>

    </div>

  )
}

export default App
