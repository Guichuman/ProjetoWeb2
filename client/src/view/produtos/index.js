import './produtos.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Produtos() {

  
  return (
    <div>
      <Header />
        <div className='containerProdutos'>
            <h1 className='h1Produtos'>Produtos</h1>
            <div className='containerFiltros'>
                <input placeholder='Busque por nome' className='inputSearch'/>
                <button className='btnFiltro'>Ordenar por</button>
            </div>
            <div className='containerListagem'>
    
                <table className='tableProdutos'>
                    <tr className='cabecalhoTable'>
                        <th className='cabecalhoId'>ID</th>
                        <th className='cabecalhoId'>Nome</th>
                        <th className='cabecalhoId'>Preço</th>
                        <th className='cabecalhoId'v>Detalhes</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>Exemplo nome</th>
                        <th>R$150</th>
                        <th>Detalhes</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>Exemplo nome</th>
                        <th>R$150</th>
                        <th>Detalhes</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>Exemplo nome</th>
                        <th>R$150</th>
                        <th>Detalhes</th>
                    </tr>
                </table>
            </div>
        </div>
      <Footer />
    </div>
  );
}

export default Produtos;
