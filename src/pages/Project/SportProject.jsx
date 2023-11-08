import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import b1 from '../../assets/images/sport/1.png';
import b2 from '../../assets/images/sport/2.png';
import b3 from '../../assets/images/sport/3.png';
import b4 from '../../assets/images/sport/4.png';
import b5 from '../../assets/images/sport/5.png';
import b6 from '../../assets/images/sport/6.png';


export default function SportProject() {
  return (
    <Box sx={{ width: '100%', height:'auto' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
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
    img: b1,
    title: 'Bed',
    author: '',
  },
  {
    img: b2,
    title: 'Books',
    author: '',
  },
  {
    img: b3,
    title: 'Sink',
    author: '',
  },
  {
    img: b4,
    title: 'Kitchen',
    author: '',
  },
  {
    img: b5,
    title: 'Blinds',
    author: '',
  },
  {
    img: b6,
    title: '',
    author: '',
  },
  
  
  
];
