import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import a1 from '../../assets/images/smatbotProject/1.png';
import a2 from '../../assets/images/smatbotProject/2.png';
import a3 from '../../assets/images/smatbotProject/3.png';
import a4 from '../../assets/images/smatbotProject/4.png';
import a5 from '../../assets/images/smatbotProject/5.png';
import a6 from '../../assets/images/smatbotProject/6.png';
import a7 from '../../assets/images/smatbotProject/7.png';

export default function TitlebarBelowMasonryImageList() {
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
    img: a1,
    title: 'Bed',
    author: 'Home Page',
  },
  {
    img: a2,
    title: 'Books',
    author: 'Product Page',
  },
  {
    img: a3,
    title: 'Sink',
    author: 'Partner page',
  },
  {
    img: a4,
    title: 'Kitchen',
    author: 'Login Page',
  },
  {
    img: a5,
    title: 'Blinds',
    author: 'SignUp Page',
  },
  {
    img: a5,
    title: 'Chairs',
    author: '',
  },
  {
    img: a6,
    title: 'Laptop',
    author: 'Pricing Page',
  },
  {
    img: a7,
    title: 'Doors',
    author: 'Ai Page',
  },
  
];
