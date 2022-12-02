import './styles.css'
import { useState } from 'react';

function App() {
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")


  return (
    <div className="container">
      <div className="container-login">
        <div className="warp-login">
          <form class="login-form">
          <span class="login-form-title">Acesso</span>
            
          <div class="warp-input">
            <input className={email !== "" ? 'has-val input' : 'input'}
             type="email" value={email}
            onChange={e => setEmail(e.target.value)}/>
            <span className="focus-input" data-placeholder="email"></span>
          </div>

          <div class="warp-input">
            <input className={password !== "" ? 'has-val input' : 'input'}
             type="password" 
             value={password}
            onChange={e => setPassword(e.target.value)}/>
            <span className="focus-input" data-placeholder="password"></span>
          </div>

          <div className="container-login-form-btn">
            <button className="login-form-btn">login</button>
          </div>

          <div className="text-center">
            <span className="txt1">Não possui conta?</span>
            <a className="txt2" href="#">Criar conta.</a>
          </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
