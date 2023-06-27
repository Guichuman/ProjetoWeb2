import './home.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Home() {

  
  return (
    <div>
      <Header />
        <div className='containerHome'>
          <h1 className='h1Home'>Descrição do sistema</h1>
          <p className='textoHome'>
            Sistema no formato de um painel administrativo de uma loja, 
            pode ser generalizado mas o foco da loja são roupas em geral, 
            possui um CRUD de produtos, usuários e vendas.
          </p>
          <br/>
          <p className='textoHome'>
            O sistema possui 2 tipos de usuários (Administrador e funcionário) no qual o funcionário pode realizar vendas e cadastrar produtos porém não tem acesso aos dados de vendas do sistema.
          </p>
        </div>
      <Footer />
    </div>
  );
}

export default Home;
