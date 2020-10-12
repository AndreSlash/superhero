import React, {useState} from 'react'
import './App.css'

export default function UserInput({setUserGender,setUserHeight,setUserMember,setUserTemperament,userHeight,setUserSubmit}) {

      const handleChangeHeight=(evt)=>{
          setUserHeight(evt.target.value);
      }

      
    return (
        <div className="wrapper">
            <h1>What superhero are YOU?</h1>
            <div className="formWrap">
           <form>
               <legend>Which site?
                   <div className="radio-toolbar">
                       
                    <input id="one" onClick={()=>setUserMember("DC Comics")} type="radio" name="member" value="DC" />
                    <label htmlFor="one">DC</label>
                    <input id="two" onClick={()=>setUserMember("Marvel Comics")} type="radio" name="member" value="Marvel" />
                    <label htmlFor="two">Marvel</label>
                   </div>
               </legend>
              
               <legend>What is your height (cm)?
                <label>
                    <input placeholder="170" onChange={handleChangeHeight} type="text" name="member" value={userHeight} />
                </label>
               </legend>
               <legend>Where do you belong?
                <div className="radio-toolbar">
                    <input id="three"  onClick={()=>setUserTemperament("good")} type="radio" name="temperament" value="good" />
                    <label htmlFor="three">Good</label>
                    <input id="four" onClick={()=>setUserTemperament("bad")} type="radio" name="temperament" value="evil" />
                    <label htmlFor="four">Evil</label>
                    <input id="seven" onClick={()=>setUserTemperament("neutral")} type="radio" name="temperament" value="neutral" />
                    <label htmlFor="seven">Neutral</label>
                </div>
               </legend>
               <legend>Chłop czy baba?
                <div className="radio-toolbar">
                    <input id="five" onClick={()=>setUserGender("Male")} type="radio" name="gender" value="male" />
                    <label htmlFor="five">Male</label>
                    <input id="six" onClick={()=>setUserGender("Female")} type="radio" name="gender" value="female" />
                    <label htmlFor="six">Female</label>
                </div>
               </legend>
               <input type="submit" onClick={()=>setUserSubmit(true)}  value="Submit"/>
           </form>
        </div>
        </div>
        
    )
}
