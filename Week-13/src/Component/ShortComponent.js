import React from 'react'
import '../Component/Shorten.css'
import bgsecrh from '../images/bgsecrh.svg'
import {useState,useEffect} from'react'
function ShortComponent() {
    const [text,setText]=useState(" ");
    const [sortlink,setsortlink]=useState([]);
    
   
    const handleSubmit=()=>{
       // e.preventDefault()
        const url=`https://api.shrtco.de/v2/shorten?url=${text}`;
     
        if(!text)
        {
            alert('Plse put Link');
        }
        else{
           
            fetch(url)
            .then((res)=>res.json())
            .then((data)=>{
               // console.log(url);
                console.log(data.result.short_link);
                setsortlink(data.result);
              
               //console.log(data.full_short_link2);
            })
        }
    }
    // useEffect(()=>{
    //     handleSubmit();
    // },[]);

  return (
   <>
    <section className='shortsection'>
        <img src={bgsecrh} alt="bgimage"></img>
        <form className='form' onSubmit={handleSubmit}>
        <div className='containerShort'>
            <input className='inputshort'
             type="url" 
             placeholder='Shorten a Link Here'
             onChange={(e)=>setText(e.target.value)}
             />
             <button className='submit'
             type='submit'
             onClick={handleSubmit}
             >Shorten It</button>
        </div>
        </form>
        <div className='Result'>
        <div >
            <h6>{sortlink.original_link}</h6>
        </div>
        <div>
        <h6>{sortlink.short_link}</h6>
        </div>
        </div>
    </section>
       
   </>
  )
}

export default ShortComponent