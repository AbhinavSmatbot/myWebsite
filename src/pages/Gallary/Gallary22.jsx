import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


import w1 from '../../assets/images/other_s/000.jpeg';
import w2 from '../../assets/images/other_s/01.jpeg';
import w3 from '../../assets/images/other_s/12.jpeg';
import w4 from '../../assets/images/other_s/222.jpeg';
import w5 from '../../assets/images/other_s/2222.jpeg';
import w6 from '../../assets/images/other_s/22222.jpeg';
import w7 from '../../assets/images/other_s/222222.jpeg';




export default function Gallary22() {
  return (
     <div className='aboutMainDiv mono' style={{marginTop:"20px !important"}}>
          <ImageList sx={{ width:'100%', height: 450 }} cols={2} rowHeight={350}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
     </div>
    
  );
}

const itemData = [
     {
       img: w1,
       title: 'Breakfast',
     },
     {
       img: w2,
       title: 'Burger',
     },
     {
       img: w3,
       title: 'Camera',
     },
     {
       img: w4,
       title: 'Coffee',
     },
     {
       img: w5,
       title: 'Hats',
     },
     {
       img:w6,
       title: 'Honey',
     },
     {
       img: w7,
       title: 'Basketball',
     },
   ];
