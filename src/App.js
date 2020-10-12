import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import UserInput from './UserInput'
import heroDoc from './heroDoc.json'
import Result from './Result'
import './App.css';

function App() {

  const [flag,setFlag]=useState(false);
  const [resultId,setResultId]=useState(0);
  const [id,setId]=useState(0);
  const [userSubmit,setUserSubmit]=useState(false);
  const [userMember,setUserMember]=useState("Marvel Comics");
  const [userHeight,setUserHeight]=useState(203);
  const [userTemperament,setUserTemperament]=useState("good");
  const [userGender,setUserGender]=useState("Male");
  const checkSizeSmall=(height,range)=>{
        if(height==undefined){
          return false;
        }
        else{
          const heightInt=height.match(/\d+/g).map(Number);
          for(let i=0;i<range;i++){
            if((heightInt[0]-userHeight)<i&&(heightInt[0]-userHeight)>-i){
              return true;
            }
          }
        }
      }
 useEffect(()=>{
   if(userSubmit){
    heroDoc.shift();
    let range=0;
    let flagIn=true;
    while(flagIn){
      console.log(flag);
      heroDoc.map((item)=>{
        if(item.biography.publisher==userMember){
          if(item.biography.alignment==userTemperament){
            if(item.appearance.gender==userGender){
              if(checkSizeSmall(item.appearance.height[1],range)){
                console.log(item.id)
                setFlag(true);
                setUserSubmit(false);
                setId(item.id);
                flagIn=false;
              }
            }
          }
        }
      });
      if(range>20){
        break;
      }
      range++;
    }
   }
 },[userSubmit])



       
  return (
    <div className="App">
     {flag
      ? <Result id={id}/> 
      : <UserInput setUserSubmit={setUserSubmit}
                   setUserHeight={setUserHeight}
                   setUserTemperament={setUserTemperament}
                   setUserGender={setUserGender}
                   setUserMember={setUserMember}
          />
                   
    }
    </div>
  );
}

export default App;
