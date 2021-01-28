import React, { useEffect } from "react";
import Ap from './Ap.json';
import hp from './homepage.json';

const Carousel = (props) => {

  return (
    <>
      {hp.spares.faq.map((i) => (
        <>
          <h2>{i.question}</h2>
          <div dangerouslySetInnerHTML={{ __html: i.answer}}></div>
        </>
      ))}
      <h1>{hp.spares.heading}</h1>
      <div dangerouslySetInnerHTML={{ __html: hp.spares.desc}}></div>
    </>
  )
}

export default Carousel;