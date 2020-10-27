import React, { useState } from 'react';
import './PopUp.css';

const PopUp = () => {
  const [modal, setModal] = useState(false);
  return (
      <>
        <button onClick={() => setModal(true)}>Open</button>

        {modal ?
          <>
            <div className="modalComponent" onClick={() => setModal(false)} />
            <div className="modalBackground">
              <div style={{ padding: '1rem' }}>
                Yet more text. And more text. And more text.
                And more text. And more text. And more text. And more text. And more
                text. Oh, how boring typing this stuff. But not as boring as watching
                paint dry. And more text. And more text. And more text. And more text.
                Boring. More, a little more text. The end, and just as well.
              </div>
            </div>
          </>
          : null }
      </>
  )
}

export default PopUp;