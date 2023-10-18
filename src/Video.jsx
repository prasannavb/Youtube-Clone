import "./Video.css"
const Video=(props)=>
{
    const {thumbnail,header,Author,img,Views,posted}=props;
    return(
            <div className="card">
                <img src={thumbnail} alt="" />
                <div className="captions">
                    <div className="names">
                        <img src={img} alt="" />
                        <h1>{header}</h1>
                    </div>
                    <h3 id="author">{Author}</h3>
                    <div className="counts">
                        <h3>{Views}</h3>
                        <h3>{posted}</h3>
                    </div>
                </div>
            </div>
    )
}

export default Video;