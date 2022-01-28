
import axios from "axios";
import './center.css'
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation"

import "./styles.css";

import SwiperCore, {
  Navigation
} from 'swiper';

SwiperCore.use([Navigation]);


const getImages  = async () => {
  const res = await axios.get(
    "https://www.reddit.com/r/wallpaper/top/.json?t=week&limit=200&raw_json=1"
  );
  var data = await res.data;
  var allData = [];
  const regex = new RegExp(/(gallery)/);
  data.data.children.map((item) => {
    try {
      if(!regex.test(item.data.url)){allData.push(item.data.url);}
    } catch (e) {
      console.log(e)
    }
  });
  return allData;
}

const Post = () =>  {

  const [image, setImage]  = useState([])
  getImages().then((res) => {setImage(res)})

  const slides = []
  const downloads = []
  



  image.map(n => {
    
    slides.push(<SwiperSlide><div className="center"> <button className="footer">Hello</button><img src={n}alt="" width="80" height="45"></img></div></SwiperSlide>)
    }
  )
  return (
    <div >
      <br/>
      <Swiper
      centeredSlides = {true}
      navigation={true} 
    >
      
      {slides}
    </Swiper>
    </div>

  );
}
export default Post;



