import './cadastroUsuario.css';
import { Link } from 'react-router-dom'

function CadastroUsuario() {


  return (
    <div className="containerCadastroUser">
      <div  className="formCadastoUser">
        <label className='tituloForm'>Faça seu cadastro</label>
        <label className='labelCadastroUser'>Nome</label>
        <input placeholder="Insira seu nome" required  className="inputCadastroUser" />
        <label className='labelCadastroUser'>Email</label>
        <input placeholder="email@email.com" required type="email" className="inputCadastroUser" />
        <label className='labelCadastroUser'>Senha</label>
        <input placeholder="**************" required type="password" className="inputCadastroUser" />
        <button className="btnCadastroUser btn">Cadastrar</button>
      </div>
    </div>
  );
}

export default CadastroUsuario;
