import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useStateValue } from '../DataLayer';

function Sidebar() {

    const [{ playlists }, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"/>
            <SidebarOption title="Inicio" Icon={HomeIcon}/>
            <SidebarOption title="Buscar" Icon={SearchIcon}/>
            <SidebarOption title="Tu librería" Icon={LibraryMusicIcon}/>
            
            <br/>
            <strong className="sidebar_title">PLAYLISTS</strong>
            
            <hr/>

            {playlists?.items?.map(playlist=>( // en el caso de que el usuario tenga playlists s muestran
                <SidebarOption title={playlist.name}/>
            ))}
            

        </div>
    )
}

export default Sidebar
