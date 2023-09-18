import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Home() {
  return (
    <div style={{background: "#0A192E", height:"120.25vw"}}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", position: "fixed", bottom: "0vw", left: "2vw",  width:"2vw" }}>
        {/* Instagram Logo with Link */}
        <Link to="https://www.instagram.com/_riya__sharma._/" target="_blank" rel="noopener noreferrer" style={{ color: "#64ffda", textDecoration: "none", marginBottom:"2vw" }}>
          <FaInstagram size="lg" />
        </Link>

        {/* GitHub Logo with Link */}
        <Link to="https://github.com/RiyaSharma82308" target="_blank" rel="noopener noreferrer" style={{ color: "#64ffda", textDecoration: "none",marginBottom:"2vw" }}>
          <FaGithub size="2xs" />
        </Link>
        <Link to="https://www.linkedin.com/in/riyasharma27/" target="_blank" rel="noopener noreferrer" style={{ color: "#64ffda", textDecoration: "none" ,marginBottom:"2vw"}}>
          <FaLinkedin size="2xs" />
        </Link>
        <div style={{ height: "10vw", width: "0.1vw", background: "#64ffda",marginLeft:"0.9vw" }}></div>
      </div>
      <div>
      <Navbar/>
      </div>
      <div className='container' style={{marginLeft: "10vw", marginTop: "5vw"}}>
        <div style={{color: "#64ffda", fontWeight: "bold"}}>Hi,  my name is </div>
        <div style={{color: "white", fontSize: "5vw", fontWeight: "bold"}}>Riya Sharma.</div>
        <div style={{fontSize: "5vw", color: "grey", fontWeight: "bold"}}>I love to explore about tech.</div>
        <div style={{color:"grey"}}>I am Link third year B.Tech. student at VIT Chennai.</div>
      </div>
    </div>
  )
}
