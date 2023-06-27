import './login.css';
import { Link } from 'react-router-dom'

function Login() {

  function autenticar(){
    
    window.location.href = "http://localhost:3000/home"
  }
  
  return (
    <div className="containerLogin">
      <div  className="containerDescricao">
        <img src="./logo_02.png" className="imgLogo" style={{marginTop: 40}} alt="logo"/>
        <div className="descricao">
          <p style={{fontSize: 30}} className="paragrafoDescricao">Sistema de controle e estoque de produtos em geral</p>
        </div>
      </div>
      <div  className="containerFormLogin">
        <h1 className="h1Login">Login</h1>
        <form>
          <div className="formLogin">
            <input placeholder="email@email.com" required className="inputLogin" />
            <input placeholder="***************" required type="password" className="inputLogin" />
            <button className="btnEntrar btn" onClick={autenticar}>Entrar</button>
          </div>
        </form>
        <div className="containerBtns">
            <Link to="/cadastroUsuario" className="btnCadastrar btn">Cadastrar</Link>
            <div style={{marginLeft: 15, marginRight: 15}}></div>
            <button className="btnEsqueci btn">Esqueci minha senha</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
