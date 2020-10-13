import React, {useEffect,useState} from 'react'
import heroDoc from './heroDoc.json'
export default function Result({id}) {

    const [stats,setStats]=useState({stats:{
            id:0,
            gender:"",
            name:"",
            publisher:"",
            height:"",
            weight:"",
            img:"",
            strength:"",
            intelligence:"",
            speed:"",
            durability:"",
            power:""
        }
    });
    const [styleStrength,setStyleStrength]=useState({
        width:0+"%"
    })
    
    const [styleIntelligence,setStyleIntelligence]=useState({
        width:0+"%"
    })
    const [styleSpeed,setStyleSpeed]=useState({
        width:0+"%"
    })
    const [styleDurability,setStyleDurability]=useState({
        width:0+"%"
    })
    const [stylePower,setStylePower]=useState({
        width:0+"%"
    })
    useEffect(()=>{
        heroDoc.shift();
        heroDoc.map((item)=>{
           if(item.id==id){
            setStats({
                id:item.id,
                gender:item.appearance.gender,
                name:item.biography["full-name"],
                publisher:item.biography.publisher,
                height:item.appearance.height[1],
                weight:item.appearance.weight[1],
                img:item.image.url,
                temperament:item.biography.alignment,
                strength:item.powerstats.strength,
                intelligence:item.powerstats.intelligence,
                speed:item.powerstats.speed,
                durability:item.powerstats.durability,
                power:item.powerstats.power
            })
           
            setStyleStrength({width:item.powerstats.strength+"%"})
            setStyleSpeed({width:item.powerstats.speed+"%"})
            setStyleIntelligence({width:item.powerstats.intelligence+"%"})
            setStylePower({width:item.powerstats.power+"%"})
            setStyleDurability({width:item.powerstats.durability+"%"})
            console.log(styleStrength.backgroundColor)
           }  
        });
     },[heroDoc])
    return (
        <div className="wrapper">
             <div className="result">
                <div className="info">
                    <p>Your name: {stats.name}</p>
                    <p>Your gender: {stats.gender}</p>
                    <p>Your alignment: {stats.temperament}</p>
                    <p>Your publisher: {stats.publisher}</p>
                    <p>Height: {stats.height}</p>
                    <p>Weight: {stats.weight}</p>
                </div>
                <div className="stats">
                    <div className="statWrap">
                    <p className="statP">Strength</p>
                    <div className="statBar">
                        <div style={styleStrength} className="statBarInner"></div>
                        <span>{stats.strength}</span>
                    </div>
                    </div>
                    <div className="statWrap">
                        <p className="statP">Intelligence</p>
                        <div className="statBar">
                            <div style={styleIntelligence} className="statBarInner"></div>
                            <span>{stats.intelligence}</span>
                        </div>
                    </div>
                    <div className="statWrap">
                        <p className="statP">Speed</p>
                        <div className="statBar">
                            <div style={styleSpeed} className="statBarInner"></div>
                            <span>{stats.speed}</span>
                        </div>
                    </div>
                    <div className="statWrap">
                        <p className="statP">Power</p>
                        <div className="statBar">
                            <div style={stylePower} className="statBarInner"></div>
                            <span>{stats.power}</span>
                        </div>
                    </div>
                    <div className="statWrap">
                        <p className="statP">Durability</p>
                        <div className="statBar">
                            <div style={styleDurability} className="statBarInner"></div>
                            <span>{stats.durability}</span>
                        </div>
                    </div>
                </div>
               
        </div>
        <div className="img-wrap">
                    <img className="img-hero" src={stats.img}/>
        </div>
    </div>
       
    )
}
