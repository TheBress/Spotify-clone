import React, { useEffect, useState } from 'react'
import "./App.css"
import Login from './Components/Login'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Components/Player';
import { useStateValue } from './DataLayer';


const spotify = new SpotifyWebApi();

function App() {

  const [{ user,token }, dispatch] = useStateValue();
  

  useEffect(()=>{

      const hash=getTokenFromUrl();
      window.location.hash=""; //limpia la url despues de localhost:3000
      const token=hash.access_token;

      if(token){
          
        dispatch({
          type:"SET_TOKEN",
          token:token
        })

          spotify.setAccessToken(token);// le pasas a Spotify tu clave

          spotify.getMe().then(user=>{

            dispatch({
              type:"SET_USER",
              user:user
            })
          });

          spotify.getUserPlaylists().then((playlists)=>{ // recibes todas las playlist del usuario
            dispatch({
              type:"SET_PLAYLISTS",
              playlists:playlists
            })
          })

          spotify.getPlaylist("3eej165RC9P5OpteUwZYOc").then(response=>{
            console.log(response);
            dispatch({
              type:"SET_MAINPLAYLIST",
              main:response
            })
          })
      }

  },[]);


  return (
    <div>
    {/* Si existe el token redirige al home y sino existe al login*/}
      {
        token?(
          <Player spotify={spotify}/>
        ):(
          <Login/>
        )

      }
    </div>
  )
}

export default App
