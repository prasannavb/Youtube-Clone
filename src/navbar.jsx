import "./Navbar.css"

const Navbar=()=>
{
    return(
        <>
            <div className="navbar">
                <div className="primary">
                    <div className="Homebtn"><i class="fa-solid fa-house"></i><button>Home</button></div>
                    <div className="Trendbtn"><i class="fa-solid fa-fire"></i><button>Trending</button></div>
                    <div className="Subbtn"><i class="fa-brands fa-youtube"></i><button>Subscriptions</button></div>
                </div>
                <div className="secondary">
                    <div className="Libbtn"><i class="fa-solid fa-bookmark"></i><button>Library</button></div>
                    <div className="Hisbtn"><i class="fa-solid fa-clock-rotate-left"></i><button>History</button></div>
                    <div className="Vidbtn"><i class="fa-solid fa-play"></i><button>Your Videos</button></div>
                    <div className="Laterbtn"><i class="fa-solid fa-clock"></i><button>Watch Later</button></div>
                    <div className="Likedbtn"><i class="fa-solid fa-thumbs-up"></i><button>Liked Videos</button></div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
