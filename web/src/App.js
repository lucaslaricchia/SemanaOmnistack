import React, {useState,useEffect} from 'react';
import './global.css';
import './Sidebar.css';
import './App.css';
import './Main.css';




function App() {
  const[latitude, setLatitude] = useState('');
  const[longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude} = position.coords;
        
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, [])

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
          <label htmlFor="github_username">Usuário do Github</label>
          <input name="github_username" id="github_username" required />
          </div>
          <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input name="techs" id="techs" required />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
              type="number"
              name="latitude" 
              id="latitude" 
              required 
              value={latitude} 
              onChange={e => setLatitude(e.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
              type="number"
              name="longitude" 
              id="longitude" 
              required 
              value={longitude} 
              onChange={e=> setLongitude(e.target.value)}
              />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://www.gettyimages.pt/gi-resources/images/RoyaltyFree/Apr17Update/ColourSurge1.jpg" />
              <div className="user-info">
                <strong>Lucas Laricchia</strong>
                <span>C++, Javascript, NodeJS</span>
              </div>
            </header>
            <p>Mechatronics Engenieer</p>
            <a href="twitch.tv/toalhinhadota">Acessar Twtich</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://www.gettyimages.pt/gi-resources/images/RoyaltyFree/Apr17Update/ColourSurge1.jpg"/>
              <div className="user-info">
                <strong>Lucas Laricchia</strong>
                <span>C++, Javascript, NodeJS</span>
              </div>
            </header>
            <p>Mechatronics Engenieer</p>
            <a href="twitch.tv/toalhinhadota">Acessar Twtich</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://www.gettyimages.pt/gi-resources/images/RoyaltyFree/Apr17Update/ColourSurge1.jpg"/>
              <div className="user-info">
                <strong>Lucas Laricchia</strong>
                <span>C++, Javascript, NodeJS</span>
              </div>
            </header>
            <p>Mechatronics Engenieer</p>
            <a href="twitch.tv/toalhinhadota">Acessar Twtich</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://www.gettyimages.pt/gi-resources/images/RoyaltyFree/Apr17Update/ColourSurge1.jpg"/>
              <div className="user-info">
                <strong>Lucas Laricchia</strong>
                <span>C++, Javascript, NodeJS</span>
              </div>
            </header>
            <p>Mechatronics Engenieer</p>
            <a href="twitch.tv/toalhinhadota">Acessar Twtich</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
