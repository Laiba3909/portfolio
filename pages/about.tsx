
import Link from "next/link";
import React from "react";
import Image from "next/image";
import projectone from '../public/projectone.png'
import projecttwo from '../public/projecttwo.png'
import graphic from '../public/graphic.png'
import august from '../public/august.png'
import pana from '../public/pana.png'
import assign from '../public/assign.png'
import code from '../public/code.png'
import amazon from '../public/amazon.png'
import linkedin from '../public/linkedin.png'
import git from '../public/git.webp'
import facebook from '../public/facebook.webp'
import insta from '../public/insta.webp'

export default function about(){
    const toggleSidebar = (): void => {
        const sidebar = document.getElementById("sidebar");
        if (sidebar) {
          sidebar.classList.toggle("active");
        }
      };

    return(
        <div>
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
            <div className="main-head">
           <div className="box1">
            <h2>About Me</h2>
            <p className="para">I’m Laiba Noman, a web developer passionate about building visually appealing and functional websites. With a strong foundation in HTML, CSS, and JavaScript, I craft responsive designs that enhance user experiences and make web interfaces come to life.</p>
            </div>

            <div className="box1">
            <h2>Digital Marketer</h2>
            <p className="para">Beyond web development, I'm also a strategic Digital Marketer, helping brands grow their online presence through targeted campaigns and content optimization</p>
            </div>

            <div className="box1">
            <h2>Daraz & Amazon Virtual Assistant</h2>
            <p className="para"> work as a Daraz and Amazon Virtual Assistant, assisting businesses in managing their online stores. From product listings and inventory management to optimizing product visibility, I help sellers succeed in the competitive e-commerce space.</p>
            </div>

            <div className="box1">
            <h2>Blending Tech & Medicine</h2>
            <p className="para">With a foundation in medical studies, I approach challenges with a unique analytical perspective. Currently, I’m pursuing a degree in medicine, merging my technical skills with a deep understanding of healthcare.</p>
            </div>

            <div className="box1">
            <h2>Continuous Learning</h2>
            <p className="para">My curiosity drives me to keep learning and expanding my skills. Recently, I began mastering Python through the PIAIC program, adding to my tech toolkit and exploring new possibilities in programming.</p>
            </div>
           </div>
           <br />
           <br />
           <div className="box2">
      <h1><i>Here is some of my latest projects</i></h1>
           </div>
           <div className="box4">
          
           {/* from here projects setup start */}
           <div className="box5">
            <p >    <Image 
            className="imagep"
    id="1st project"
    src={projectone} 
    alt="Loading"
    width={300}
    /></p>
     <h2 className="h2"><button className="bt">Fashion Web</button></h2>

    
            </div>
            <div className="box5">
            <p >    <Image 
            className="imagep"
    id="1st project"
    src={projecttwo} 
    alt="Loading"
    width={300}
    /></p>
     <h2 className="h2"><button className="bt">Hospital web</button></h2>

    
            </div>
            <div className="box5">
            <p >    <Image 
            className="imagep"
    id="1st project"
    src={graphic} 
    alt="Loading"
   
    /></p>
     <h2 className="h2"><button className="bt">Hiring web</button></h2>

    
            </div>

            <div className="box5">
            <p >    <Image 
            className="imagep"
    id="1st project"
    src={august} 
    alt="Loading"
    
    /></p>
     <h2 className="h2"><button className="bt">14 Aug Celebration</button></h2>

    
            </div>

            <div className="box5">
            <p >    <Image 
            className="imagep"
    id="1st project"
    src={pana} 
    alt="Loading"
    width={300}
    height={500}
    /></p>
     <h2 className="h2"><button className="bt">Pana cloud Clone</button></h2>

    
            </div>

            <div className="box5">
            <p >    <Image 
            className="imagep"
    id="1st project"
    src={assign} 
    alt="Loading"

    /></p>
     <h2 className="h2"><button className="bt">Css Hackathon</button></h2>

    
            </div>

            <div className="box5">
            <p >    <Image 
            className="imagep"
    id="1st project"
    src={code} 
    alt="Loading"

    /></p>
     <h2 className="h2"><button className="bt">TS 45 Assignments</button></h2>

    
            </div>

            <div className="box5">
            <p >    <Image 
            className="imagep"
    id="1st project"
    src={amazon} 
    alt="Loading"

    /></p>
     <h2 className="h2"><button className="bt">Amazon SEO</button></h2>

    
            </div>
            </div>



            <div>
    <div className="footer"> 
      <p className='connect1'>Connect With Me</p>

      <Link id="read-more" href={"https://www.linkedin.com/in/laiba-noman-158663290/"} target="_blank">  <Image 
           
    id="project1"
    src={linkedin}
    alt="Loading"
    /></Link> 
          
          <Link id="read-more" href={"https://github.com/Laiba3909"} target="_blank">  <Image 
           
    id="project1"
    src={git}
    alt="Loading"
    /></Link> 
         
  
<Link  href={"https://www.instagram.com/laiba_freelancer?igsh=ZWFndzkxZXd6YjVj"} target="_blank">  <Image 
         
    id="project1"
    src={insta}
    alt="Loading"
    /></Link> 

<Link id="read-more" href={"https://www.facebook.com/profile.php?id=61554710193973&mibextid=ZbWKwL"} target="_blank">  <Image 
          
    id="project1"
    src={facebook}
    alt="Loading"
    /></Link> 
    </div></div>
            </div>
    )
}