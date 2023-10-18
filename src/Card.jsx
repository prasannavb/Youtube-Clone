import Video from './Video';
import "./Card.css"
import { useState } from 'react';
import {data} from "./data"
import React from 'react';

const Card=()=>
{
    const [datas,Setdata]=useState(data);
    return(
        <>
        <div className="layout">
            {datas.map((data)=>{
                return(
                    <React.Fragment key={data.id}>
                        <Video thumbnail={data.thumbnail} header={data.header} Author={data.Author} img={data.Authorimg} Views={data.views} posted={data.posted}   />
                    </React.Fragment>
                        )
            })}            
        </div>
        </>
    )
}

export default Card;