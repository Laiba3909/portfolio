
import Typewriter from 'typewriter-effect'
import Link from "next/link";
import Image from "next/image";
import myself from '../public/myself.png'
import React from 'react';
export default function Portfolio() {
  const toggleSidebar = (): void => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
      sidebar.classList.toggle("active");
    }
  };
  return (
    <div>
   <div id="head">
  
    <ul id="head1">
   <li><Link id="link" href={"/"}>Home</Link></li>
   <li><Link id="link" href={"/about"}>About me</Link></li>
   <li><Link id="link" href={"/skills"}>Skills</Link></li>
   <li><Link id="link" href={"/contact"}>Contact</Link></li>
  
   </ul>
   
   </div>
   <div id="animat">
   <h2 id="text">
    <Image 
    id="myself"
    src={myself} 
    alt="Loading"
    />
    <p className="text2">Hi Everyone,</p>
<Typewriter
  options={{
    strings: [  'I am laiba noman', ' Web Developer 👩‍💻',' And Student of Governor house 😇'],
    autoStart: true,
    loop: true,    
  }}
/>
<p className="text3">A passionate web developer with a love for creative design. I build websites that are not only functional but also visually engaging. <br />
  Welcome to my portfolio!</p>
   </h2>
   </div>
   <div id="sidebar">
    <button id="toogle" className="butto" onClick={toggleSidebar}><ul id="ulb"><li id="port">Portfolio</li><li>☰</li></ul></button>
   <ul id="head1" className="menu" >
   <li><Link id="link" href={"/"}>Home</Link></li>
   <li><Link id="link" href={"/about"}>About me</Link></li>
   <li><Link id="link" href={"/skills"}>Skills</Link></li>
   <li><Link id="link" href={"/contact"}>Contact</Link></li>
   </ul>
   </div>
  <div>
    <div className="footer">Footer</div>
  </div>
</div>
)
}

