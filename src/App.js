import React, { useEffect, useState } from 'react'
import "./App.css"
import Login from './Components/Login'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Components/Player';


const spotify = new SpotifyWebApi();

function App() {


  const [token, setToken] = useState(null)

  useEffect(()=>{

      const hash=getTokenFromUrl();
      window.location.hash="";
      const token=hash.access_token;

      if(token){
          setToken(token);

          spotify.setAccessToken(token);// le pasas a Spotify tu clave

          spotify.getMe().then(user=>{
            console.log(user);
          });
      }

  },[]);

  return (
    <div>
    {/* Si existe el token redirige al home y sino existe al login*/}
      {
        token?(
          <Player/>
        ):(
          <Login/>
        )

      }
    </div>
  )
}

export default App
