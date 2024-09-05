import React from "react";
import Image from "next/image";
import Link from "next/link";
import linkedin from '../public/linkedin.png'
import git from '../public/git.webp'
import facebook from '../public/facebook.webp'
import insta from '../public/insta.webp'

export default function contact(){
    const toggleSidebar = (): void => {
        const sidebar = document.getElementById("sidebar");
        if (sidebar) {
          sidebar.classList.toggle("active");
        }
      };

    return( <div>
   <div id="head">
  
    <ul id="head1">
   <li><Link id="link" href={"/"}>Home</Link></li>
   <li><Link id="link" href={"/about"}>About me</Link></li>
   <li><Link id="link" href={"/skills"}>Skills</Link></li>
   <li><Link id="link" href={"/contact"}>Contact</Link></li>
  
   </ul>
   
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

<div className="box6">
    <div className="box7">
     
        <h1 className="h11">Contact Me</h1>
        <p className="pp">I’d love to hear from you! Drop me a message using the form below, and I’ll get back to you soon.</p>
        <form>
            <input type="text"  placeholder="Full Name" maxLength={15} minLength={5} required/>
         <br />
       <input type="email"  placeholder="john@gmail.com"  minLength={15} required/>
   
           <textarea name="comments" id="" placeholder="How can i help you?" required></textarea>
     <br />
           <input type="image"  src='buttoon.png' className="image"/>
           </form>
           <Link id="read-more" href={"https://www.linkedin.com/in/laiba-noman-158663290/"} target="_blank">  <Image 
            className="im"
    id="1st project"
    src={linkedin}
    alt="Loading"
    /></Link> 
          
          <Link id="read-more" href={"https://github.com/Laiba3909"} target="_blank">  <Image 
            className="ime"
    id="1st project"
    src={git}
    alt="Loading"
    /></Link> 
         
<Link  href={"https://www.instagram.com/laiba_freelancer?igsh=ZWFndzkxZXd6YjVj"} target="_blank">  <Image 
            className="instaa"
    id="1st project"
    src={insta}
    alt="Loading"
    /></Link> 
<div className="face">
<Link id="read-more" href={"https://www.facebook.com/profile.php?id=61554710193973&mibextid=ZbWKwL"} target="_blank">  <Image 
           className="fac"
    id="1st project"
    src={facebook}
    alt="Loading"
    /></Link> 
    </div>
    </div>
</div>


   </div>
  )
   }
   







