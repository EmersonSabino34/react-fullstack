
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
            <tr scope="col"></tr>
            <th scope="col">Nome do Produto</th>
            <th scope="col">Valor</th>
            <th scope="col">Qtd</th>
            <th scope="col">Url</th>
            <th scope="col">Açoes</th>
         </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Nome do Produto</td>
            <td>Valor</td>
            <td>Qtd</td>
            <td>
              <img width={40} src="https://d2e6ccujb3mkqf.cloudfront.net/a8312809-9dc0-4a28-be31-5f65dfa4d558-1_5e3d8b6c-9d8d-42df-a63a-7dd1111d0434.jpg" alt="imagem do Produto" />
            </td>
            <td>
              <div className='btn-group d-flex gap-1'>
                <button className='btn btn-outline-warning'>
                <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button className='btn btn-outline-danger'>
                <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>

      </table>

    </div>

  )
}

export default App
