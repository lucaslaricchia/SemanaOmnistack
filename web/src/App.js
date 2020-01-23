import React from 'react';
import Header from './Header';
import './global.css';
import './Sidebar.css';
import './App.css';
function App() {


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
          <label htmlFor="">Usuário do Github</label>
          <input name="github_username" id="github_username" required />
          </div>
          <div class="input-block">
          <label htmlFor="">Tecnologias</label>
          <input name="techs" id="techs" required />
          </div>
          <div class="input-group">
            <div class="input-block">
              <label htmlFor="">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div class="input-block">
              <label htmlFor="">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>

      </main>
    </div>
  );
}

export default App;
