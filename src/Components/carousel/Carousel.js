import React from "react";
import oem from './oem.json'

const Carousel = (props) => {

  return (
    <>
      {oem.brand2.faq.map((i) => (
        <>
          <h2 dangerouslySetInnerHTML={{ __html: i.question}}></h2>
          <div dangerouslySetInnerHTML={{ __html: i.answer}}></div>
        </>
      ))}
      <h1>{oem.brand2.heading}</h1>
      <div dangerouslySetInnerHTML={{ __html: oem.brand2.desc}}></div>
    </>
  )
}

export default Carousel;