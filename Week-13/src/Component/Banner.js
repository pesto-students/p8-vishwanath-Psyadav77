import React from 'react'
import '../Component/banner.css'
import working from '../images/working.svg'
function Banner() {
  return (
   <>
    <section className='mainsection'>
        <div className='container'>
        <article className='artone'>
        <h1 className='main-heading-banner'>More then just shorter Links</h1>
        <p className='headingTwo'>Build Your Brand's recognition and get detailed insights on how your links are performing</p>
        </article>
           <articale>
            <img src={working} alt="imageworking"></img>
           </articale>
        </div>
    </section>
   </>
  )
}

export default Banner