
import Link from "next/link";
// pages/skills.js
import React from 'react';


 export default function skill(){
    const toggleSidebar = (): void => {
        const sidebar = document.getElementById("sidebar");
        if (sidebar) {
          sidebar.classList.toggle("active");
        }
      }
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
<li><Link id="link" href={"/skills"}>Projects</Link></li>
<li><Link id="link" href={"/contact"}>Contact</Link></li>
</ul>
</div>
<div className="border">Skills</div>
<div className="boss">
<div className="box3">
    <button className="b1">HTML <p>90%</p><div className="doubleline"><div className="line"></div></div></button>
   
</div>
<div className="box3">
    <button className="b1">CSS <p>80%</p><div className="doubleline"><div className="line1"></div></div></button>
   
</div>
<div className="box3">
    <button className="b1">TS<p>70%</p><div className="doubleline"><div className="line2"></div></div></button>
   
</div>
<div className="box3">
    <button className="b1">JS <p>60%</p><div className="doubleline"><div className="line3"></div></div></button>
   
</div>

</div>


<div className="boss">
<div className="box3">
    <button className="b1">Next-JS <p>60%</p><div className="doubleline"><div className="line4"></div></div></button>
   
</div>

<div className="box3">
    <button className="b1">Python<p>40%</p><div className="doubleline"><div className="line5"></div></div></button>
   
</div>
<div className="box3">
    <button className="b1">Github<p>80% </p><div className="doubleline"><div className="line6"></div></div></button>
   
</div>
<div className="box3">
    <button className="b1">SMM<p>80%</p><div className="doubleline"><div className="line7"></div></div></button>
   
</div>

</div>
</div>

    )
    
}
