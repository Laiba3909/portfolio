
import Link from "next/link";
import React from "react";

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
        </div>
    )
}