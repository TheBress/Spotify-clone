//ARCHIVO CON LA CONFIGURACION PARA QUE FUNCIONE EL LOGIN

export const authEndpoint="https://accounts.spotify.com/authorize"; // Autorizar al usuario a traves del propio spotify

const redirectUri="http://localhost:3000/"; //URL para redireccionar una vez autorizado

const clientId="a50fa963b741406c8e805b2ff41f36aa"; // ID del cliente

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ]; //los scopes son los privilegios que tienes como usuario como puede ser escuchar musica o ver tu informacion

  export const getTokenFromUrl=()=>{
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial,item)=>{
      let parts=item.split("=");
      initial[parts[0]]=decodeURIComponent(parts[1]);

      return initial;
    },{})
  }


  export const loginUrl=`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`; 