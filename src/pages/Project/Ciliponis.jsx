import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import d1 from '../../assets/images/cilponis/1.png';
import d2 from '../../assets/images/cilponis/2.png';
import d3 from '../../assets/images/cilponis/3.png';
import d4 from '../../assets/images/cilponis/4.png';
import d5 from '../../assets/images/cilponis/5.png';
import d6 from '../../assets/images/cilponis/6.png';


export default function CilponisProject() {
  return (
    <Box sx={{ width: '100%', height:'auto' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item,index) => (
          <ImageListItem key={index}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: d1,
    title: 'Bed',
    author: '',
  },
  {
    img: d2,
    title: 'Books',
    author: '',
  },
  {
    img: d3,
    title: 'Sink',
    author: '',
  },
  {
    img: d4,
    title: 'Kitchen',
    author: '',
  },
  {
    img: d5,
    title: 'Blinds',
    author: '',
  },
  {
    img: d5,
    title: '',
    author: '',
  },
  {
    img: d6,
    title: 'Laptop',
    author: '',
  },
  
  
];
