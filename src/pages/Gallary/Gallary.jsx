
import '../About/About.css';
import * as React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import Gallary22 from './Gallary22';
import w1 from '../../assets/images/office/11.jpeg';
import w2 from '../../assets/images/office/22.jpeg';
import w3 from '../../assets/images/office/33.jpeg';
import w4 from '../../assets/images/office/44.jpeg';
import w5 from '../../assets/images/office/55.jpeg';
import w6 from '../../assets/images/office/66.jpeg';
import w7 from '../../assets/images/office/77.jpeg';
import w8 from '../../assets/images/office/111.jpeg';
import a0 from '../../assets/images/group/0.jpeg';
import a1 from '../../assets/images/group/1.jpeg';
import a2 from '../../assets/images/group/2.jpeg';
import a3 from '../../assets/images/group/3.jpeg';
import a4 from '../../assets/images/group/4.jpeg';
import a5 from '../../assets/images/group/5.jpeg';
import a6 from '../../assets/images/group/6.jpeg';
import a7 from '../../assets/images/group/7.jpeg';
import a8 from '../../assets/images/group/8.jpeg';
import a9 from '../../assets/images/group/9.jpeg';
import a10 from '../../assets/images/group/10.jpeg';
import a11 from '../../assets/images/group/11.jpeg';
import a12 from '../../assets/images/group/12.jpeg';
import a14 from '../../assets/images/group/13.jpeg';
import a13 from '../../assets/images/group/14.jpeg';
import a15 from '../../assets/images/group/15.jpeg';
import a16 from '../../assets/images/group/16.jpeg';
import a17 from '../../assets/images/group/17.jpeg';
import a18 from '../../assets/images/group/18.jpeg';
import a19 from '../../assets/images/group/19.jpeg';
import a20 from '../../assets/images/group/20.jpeg';
import a21 from '../../assets/images/group/21.jpeg';
import a22 from '../../assets/images/group/22.jpeg';
import a23 from '../../assets/images/group/23.jpeg';
import a24 from '../../assets/images/group/24.jpeg';
import a25 from '../../assets/images/group/25.jpeg';
import a26 from '../../assets/images/group/26.jpeg';
import a27 from '../../assets/images/group/27.jpeg';

const images11 = [
  { url: w2 },
  { url: w1 },
  { url: w3 },
  { url: w4 },
  { url: w5 },
  { url: w6 },
  { url: w7 },
  { url: w8 }
];
const images22 = [
  { url: a0 },
  { url: a2 },
  { url: a3 },
  { url: a4 },
  { url: a5 },
  { url: a6 },
  { url: a7 },
];
const images33 = [
  { url: a8 },
  { url: a9 },
  { url: a10 },
  { url: a11 },
  { url: a12 },
  { url: a13 },
  { url: a14 },
];

const images44 = [
  { url: a15 },
  { url: a16 },
  { url: a17 },
  { url: a18 },
  { url: a19 },
  { url: a20 },
  { url: a21 },
];

const images55 = [
  { url: a22 },
  { url: a23 },
  { url: a24 },
  { url: a25 },
  { url: a26 },
  { url: a27 },
  { url: a1 },
];



export default function Gallary() {
  return (
    <div>
      <div className='aboutMainDiv mono'>
        <p>Office Pic</p>
        <div className='gallaryImageFlex'>
          <div className='asasas pull-left'>
            <SimpleImageSlider
              width={400}
              height={504}
              images={images11}
              showBullets={true}
              showNavs={true}
              autoPlay={true}
              slideDuration={0.3}
            />
          </div>
          <div className='asasas pull-left'>
            <Gallary22 />
          </div>
        </div>
        <div className='gallaryImageFlex'>
        <div className='asasas pull-left'>
            <SimpleImageSlider
              width={400}
              height={504}
              images={images22}
              showBullets={true}
              showNavs={true}
              autoPlay={true}
              slideDuration={0.3}
            />
          </div>

          <div className='asasas pull-left'>
          <SimpleImageSlider
              width={400}
              height={504}
              images={images33}
              showBullets={true}
              showNavs={true}
              autoPlay={true}
              slideDuration={0.3}
            />
          </div>
        </div>
        <div className='gallaryImageFlex'>
        <div className='asasas pull-left'>
            <SimpleImageSlider
              width={400}
              height={504}
              images={images44}
              showBullets={true}
              showNavs={true}
              autoPlay={true}
              slideDuration={0.3}
            />
          </div>

          <div className='asasas pull-left'>
          <SimpleImageSlider
              width={400}
              height={504}
              images={images55}
              showBullets={true}
              showNavs={true}
              autoPlay={true}
              slideDuration={0.3}
            />
          </div>
        </div>
      

      </div>

    </div>



  );
}


