import React from 'react'
import '../Component/footer.css'

function Footer() {
  return (
    <>
        <footer className='footer'>
        <div className='inner'>
        <article>Logo</article>
        <article>
            <h3 className='FotrHead'>Feature</h3>
            <ul className='fotrList'>
                <li><a style={{color:"white"}} href='home.com'>Link shortening</a></li>
                <li><a style={{color:"white"}} href='home.com'>Branded Links</a></li>
                <li><a style={{color:"white"}} href='home.com'>Analytics</a></li>
            </ul>
        </article>
        <article>
            <h3 className='FotrHead'>Resourse</h3>
            <ul className='fotrList'>
                <li><a style={{color:"white"}} href='home.com'>Blog</a></li>
                <li><a style={{color:"white"}} href='home.com'>Developer</a></li>
                <li><a style={{color:"white"}} href='home.com'>Support</a></li>
            </ul>
        </article>
        <article>
            <h3 className='FotrHead'>Company</h3>
            <ul className='fotrList'>
                <li ><a style={{color:"white"}} href='home.com'>About</a></li>
                <li><a style={{color:"white"}} href='home.com'>Our Team</a></li>
                <li><a style={{color:"white"}} href='home.com'>Careers</a></li>
                <li><a  style={{color:"white"}} href='home.com'>Contact</a></li>
            </ul>
        </article>
        </div>
        </footer>
    </>
  )
}

export default Footer