import "./Home.css"
import banners from "./banners"
import Carousel from "react-elastic-carousel"
import { nanoid } from 'nanoid'
import {useState, useEffect} from "react"
const fullText= "Kadam Foundation is an NGO established in 2015. We have been helping needy children since then by providing food, clothes, and other helpful things. We stood strong in difficult situations like COVID-19 and did continuous service. We believe your support would help us to create a better world as children are our future.";
function Home() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [ok, setOk] = useState(true);
  useEffect(() => {
    if (index < fullText.length && ok) {
      setOk(false);
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
        setOk(true);
      }, 60)
    }
  }, [index,ok,text]);
  return (
    <>
      <h3>
        Registration Number:- 818/2019
        <br/>
        Registered under:- Section 8 of Companies Act, 2013
      </h3>
      <h1>
        {text}
      </h1>
      <h1>"Raise your helping hand, donate for the needy, help the poor"</h1>
      <div className='home' name="home" id='home'>
      <h2>
        Have a Glimpse of What We Do!
      </h2>
        <Carousel className='corousel'>
            {banners.map(banner => <img className='banner' src={banner} alt='banner' key={nanoid()}/>)}
        </Carousel>
      </div>
    </>
  )
}

export default Home