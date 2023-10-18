import "./header.css"
import logo from'./assets/logo.png'

const Header=()=>
{
    return(
        <>
            <div className="header">
                <div className="logo">
                <i class="fa-solid fa-bars"></i>
                <img src={logo} alt="Youtube logo" className="youtubelogo" />
                <img src="https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg" alt="Youtube logo" className="youtubelogo-phone" />

                </div>
                <div className="search-bar">
                    <input type="search" className="search" placeholder="Search"/>
                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                    <i class="fa-solid fa-microphone"></i>
                </div>
                <div className="icons">
                    <i class="fa-solid fa-video">

                    <span className="video-tooltip">Create</span>

                    </i>
                    <i class="fa-solid fa-bell">
                    <span className="bell-tooltip">Notifications</span>

                    </i>
                    <i class="fa-solid fa-user">
                    <span className="user-tooltip">Profile</span>

                    </i>
                </div>
            </div>
         </>
    )
}

export default Header;