
import IntroVideo from "./Components/IntroVideo.jsx"

import freshTopicImg from "./Assets/academy.png"
import Section from "./Components/Section.jsx"
import freshTopicImg2 from "./Assets/story.png"
import tedTalksImg from "./Assets/in-the-news.gif"
import franchiseImg from "./Assets/franchise.gif"
import mapImg from "./Assets/locations.png"
import courseImg from "./Assets/image2.png"
import albumImg from "./Assets/mba-cares.gif"
import baratImg from "./Assets/image1.png"
import chaiWalaImg from "./Assets/image3.png"
import data from "./data/data.json"
import Footer from "./Components/Footer.jsx"
import Misc from "./Components/Misc.jsx"

import "./Styles/App.scss"
import "./Styles/intro.scss"
import "./Styles/section.scss" 
import "./Styles/footer.scss"
import "./Styles/misc.scss"
import "./Styles/mediaQuery.scss"

import { useEffect } from "react";

// $yellow: #fff100;
// $pink: #ed1e79;  
// $red: #d20120;
// $white: #fff;
// $brown: #6d3d0f;

const yellow = "#fff100",pink = "#ed1e79",white = "#fff",brown="#6d3d0f";


function App() {
  const { freshTopic,freshTopic2 , tedTalks , franchise,map,courses,album,barat,chaiwala } = data;
  
  const dotCursor = (e)=>{
    const cursor = document.querySelector(".cursor");
    cursor.style.top=`${e.pageY-14}px`;
    cursor.style.left=`${e.pageX-14}px`;

    const element = e.target;

    if(element.getAttribute("data-cursorpointer")){
      cursor.classList.add("cursorHover")
    }
    else if(element.getAttribute("data-cursorPointermini")){
      cursor.classList.add("cursorHoverMini");
    }
    else{
      cursor.classList.remove("cursorHover");
      cursor.classList.remove("cursorHoverMini");
    }
  }

  useEffect(() => {
    window.addEventListener("mouseover",dotCursor)
  
    return () => {
      window.removeEventListener("mouseover",dotCursor)
    }
  },[])
  
  
  
  return (
    <>
      <IntroVideo/>
      {/* fresh topic*/}
      <Section 
        h3 = {freshTopic.heading}
        text={freshTopic.text}
        btnTxt={freshTopic.btn}
        imgSrc={freshTopicImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgcolor={yellow}
        btnColor={pink}/>
        

              {/* fresh topic -2*/}
      <Section 
        h3 = {freshTopic2.heading}
        text={freshTopic2.text}
        btnTxt={freshTopic2.btn}
        imgSrc={freshTopicImg2}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgcolor={yellow}
        btnColor={pink}/>

              {/* ted talks*/}
        <Section 
        h3 = {tedTalks.heading}
        text={tedTalks.text}
        btnTxt={tedTalks.btn}
        imgSrc={tedTalksImg}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgcolor={pink}
        btnColor={yellow}/>


          {/* franchise*/}
        <Section 
        h3 = {franchise.heading}
        text={franchise.text}
        btnTxt={franchise.btn}
        imgSrc={franchiseImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgcolor={brown}
        btnColor={yellow}/>

        {/* Map*/}
        <Section 
        h3 = {map.heading}
        text={map.text}
        imgSrc={mapImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        hasBtn={false}
        btnBgcolor={brown}
        btnColor={yellow}/>

        {/* Courses*/}
        <Section 
        h3 = {courses.heading}
        text={courses.text}
        btnTxt={courses.btn}
        imgSrc={courseImg}
        imgSize={"30%"}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgcolor={pink}
        btnColor={yellow}/>

        {/* album*/}
        <Section 
        h3 = {album.heading}
        text={album.text}
        btnTxt={album.btn}
        imgSrc={albumImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgcolor={brown}
        btnColor={yellow}/>

        {/* barat*/}
        <Section 
        h3 = {barat.heading}
        text={barat.text}
        btnTxt={barat.btn}
        imgSrc={baratImg}
        imgSize={"30%"}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgcolor={pink}
        btnColor={yellow}/>

        {/* Chai wala*/}
        <Section 
        h3 = {chaiwala.heading}
        text={chaiwala.text}
        btnTxt={chaiwala.btn}
        imgSrc={chaiWalaImg}
        imgSize={"30%"}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgcolor={brown}
        btnColor={yellow}/>


        <Footer/>
        <Misc />
    </>
  );
}

export default App;
