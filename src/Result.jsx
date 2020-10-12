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
        }
    });
   
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
                temperament:item.biography.alignment

            })
           }  
        });
     },[heroDoc])
    return (
        <div className="wrapper">
             <div className="result">
                 <p>Saussy..</p>
             <p>Your badass name: {stats.name}</p>
            <p>Your gender: {stats.gender}</p>
            <p>Your alignment: {stats.temperament}</p>
            <p>Your publisher: {stats.publisher}</p>
            <p>Height: {stats.height}</p>
            <p>Weight: {stats.weight}</p>
            <div className="img-wrap">
            <img className="img-hero" src={stats.img}/>
            </div>
           
        </div>
        </div>
       
    )
}
