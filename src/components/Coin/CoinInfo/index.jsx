import React from 'react'
import { useState } from 'react';
import "./style.css";

function CoinInfo({heading,description}) {
    const shortDesc =
    description?.slice(0, 300) +
    "<br/><p style='color:var(--grey);cursor:pointer;'>Read More...</p>";
  const longDesc =
    description + "<br/><p style='color:var(--grey);cursor:pointer;'>Read Less...</p>";

  const [toggle, setToggle] = useState(false);

  return (
    <div className="grey-wrapper info-component">
      <h1>{heading}</h1>
      <p
        dangerouslySetInnerHTML={{
          __html: description?.length >= 300 ? (toggle ? longDesc : shortDesc) : description,
        }}
        className="info-p"
        onClick={() => setToggle(!toggle)}
      />
    </div>
  );
}

export default CoinInfo;
