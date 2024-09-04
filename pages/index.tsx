
import Typewriter from 'typewriter-effect'
import Link from "next/link";
import Image from "next/image";
import myself from '../public/myself.png'
import React from 'react';
import linkedin from '../public/linkedin.png'
import git from '../public/git.webp'
import facebook from '../public/facebook.webp'
import insta from '../public/insta.webp'
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
    strings: [  'I am laiba noman', ' Web Developer 👩‍💻',' And a Student😇'],
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
    <div className="footer"> 
      <p className='connect'>Connect With Me</p>

      <Link id="read-more" href={"https://www.linkedin.com/in/laiba-noman-158663290/"} target="_blank">  <Image 
           
    id="project"
    src={linkedin}
    alt="Loading"
    /></Link> 
          
          <Link id="read-more" href={"https://github.com/Laiba3909"} target="_blank">  <Image 
           
    id="project"
    src={git}
    alt="Loading"
    /></Link> 
         
  
<Link  href={"https://www.instagram.com/laiba_freelancer?igsh=ZWFndzkxZXd6YjVj"} target="_blank">  <Image 
         
    id="project"
    src={insta}
    alt="Loading"
    /></Link> 

<Link id="read-more" href={"https://www.facebook.com/profile.php?id=61554710193973&mibextid=ZbWKwL"} target="_blank">  <Image 
          
    id="project"
    src={facebook}
    alt="Loading"
    /></Link> 
    </div></div>
  </div>

)
}

