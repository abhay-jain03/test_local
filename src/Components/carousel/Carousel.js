import React, { useEffect } from "react";
import Ap from './Ap.json';

const Carousel = (props) => {

  return (
    <>
      {Ap["cooling-system"].FAQ.map((i) => (
        <>
          <h2>{i.question}</h2>
          <div>{i.answer}</div>
        </>
      ))}
      <h1>{Ap["cooling-system"].heading}</h1>
      <div dangerouslySetInnerHTML={{ __html: Ap["cooling-system"].desc}}></div>
    </>
  )
}

export default Carousel;