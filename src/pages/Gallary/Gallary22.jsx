import * as React from 'react';

import SimpleImageSlider from "react-simple-image-slider";


import w1 from '../../assets/images/other_s/000.jpeg';
import w2 from '../../assets/images/other_s/01.jpeg';
import w3 from '../../assets/images/other_s/12.jpeg';
import w4 from '../../assets/images/other_s/222.jpeg';
import w5 from '../../assets/images/other_s/2222.jpeg';
import w6 from '../../assets/images/other_s/22222.jpeg';
import w7 from '../../assets/images/other_s/222222.jpeg';

const images = [
  { url: w2 },
  { url: w1 },
  { url: w3 },
  { url: w4 },
  { url: w5 },
  { url: w6 },
  { url: w7},
];


export default function Gallary22() {
  return (
     <div className=' mono' style={{marginTop:"20px !important"}}>
          
    <SimpleImageSlider
        width={400}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        slideDuration={0.3}
      />

     </div>
    
  );
}


