import './vendas.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Vendas() {

  
  return (
    <div>
      <Header />
        <div className='containerProdutos'>
            <div className='container'>
                <h1 className='h1Produtos'>Vendaaaaas</h1>
            </div>
            <div className='containerListagem'>
                <table className='tableProdutos'>
                    <tr className='cabecalhoTable'>
                        <th>ID</th>
                        <th>Nome do produto</th>
                        <th>Detalhes</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>Exemplo nome</th>
                        <th>Detalhes</th>
                    </tr>
                </table>
            </div>
        </div>
      <Footer />
    </div>
  );
}

export default Vendas;
