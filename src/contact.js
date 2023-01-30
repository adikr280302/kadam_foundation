import React from 'react'
import "./Contact.css"
import {useState, useEffect} from "react"

function Contact() {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState(
    "Kadam Foundation is an NGO established in 2015. We have been helping needy children since then by providing food, clothes, and other helpful things. We stood strong in difficult situations like COVID-19 and did continuous service. We believe your support would help us to create a better world as children are our future."
  );
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 40)
    }
  }, [index]);
  return (
    <>
      <h2>
        Contact Us On 
      </h2>

          <h1>
              Gmail: ngo.kadamfoundation@gmail.com
          </h1> 
          <br />
          <h1>
              Phone number: 9505555999
          </h1>
          <h1>
          <a href="https://www.facebook.com/kadamfoundationofficial">
              CLICK ME FOR FACEBOOK!
              </a>
        </h1>
          <h1>
              Trustee: Atulya Gunjan
          </h1>
        
    </>
  )
}

export default Contact;