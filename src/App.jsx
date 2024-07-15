
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
            <td>Notebook Apple</td>
            <td>1299,00€</td>
            <td>40</td>
            <td>
              <img width={40} src="https://d2e6ccujb3mkqf.cloudfront.net/a8312809-9dc0-4a28-be31-5f65dfa4d558-1_5e3d8b6c-9d8d-42df-a63a-7dd1111d0434.jpg" alt="imagem do Produto" />
            </td>
            <td>
              <div className="btn-group d-flex gap-1">
                <button className="btn btn-outline-warning">
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button className="btn btn-outline-danger">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Iphone ProMax15</td>
            <td>1399,99€</td>
            <td>30</td>
            <td>
              <img width={40} src="https://www.worten.pt/i/fdd3a716eff52a4da47bdfb8a101f2f54913cf94" alt="imagem do Produto" />
            </td>
            <td>
              <div className="btn-group d-flex gap-1">
                <button className="btn btn-outline-warning">
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button className="btn btn-outline-danger">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Pc Gaming</td>
            <td>1799,99€</td>
            <td>20</td>
            <td>
              <img width={40} src="https://www.worten.pt/i/e029a93e55b2edee14d62a4ac76fb8d49a43b252" alt="imagem do Produto" />
            </td>
            <td>
              <div className="btn-group d-flex gap-1">
                <button className="btn btn-outline-warning">
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button className="btn btn-outline-danger">
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
