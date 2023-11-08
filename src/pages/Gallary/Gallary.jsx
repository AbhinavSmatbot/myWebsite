
import '../About/About.css';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Gallary22 from './Gallary22';

import w1 from '../../assets/images/office/11.jpeg';
import w2 from '../../assets/images/office/22.jpeg';
import w3 from '../../assets/images/office/33.jpeg';
import w4 from '../../assets/images/office/44.jpeg';
import w5 from '../../assets/images/office/55.jpeg';
import w6 from '../../assets/images/office/66.jpeg';
import w7 from '../../assets/images/office/77.jpeg';
import w8 from '../../assets/images/office/111.jpeg';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Gallary() {
  return (
     <div>
          <div className='aboutMainDiv mono'>
          <p>Office Pic</p>
          <ImageList
      sx={{ width:'100%', height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>

     </div>
     <Gallary22/> 
     </div>
     
    
    
  );
}

const itemData = [
  {
    img: w1,
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img:w2,
    title: 'Burger',
    rows: 2,
    cols: 2,
  },
  {
    img:w3,
    title: 'Camera',
    rows: 2,
    cols: 2,
  },
  {
    img:w4,
    title: 'Coffee',
    rows: 2,
    cols: 2,
  },
  {
    img:w5,
    title: 'Hats',
    rows: 2,
    cols: 2,
  },
  {
    img:w6,
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: w7,
    title: 'Basketball',
    rows: 2,
    cols: 2,
  },
  {
    img:w8,
    title: 'Fern',
    rows: 2,
    cols: 2,
  },
  
];
