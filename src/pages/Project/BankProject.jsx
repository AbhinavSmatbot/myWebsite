import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import c1 from '../../assets/images/bank/Picture1.png';
import c2 from '../../assets/images/bank/Picture2.png';
import c3 from '../../assets/images/bank/Picture3.png';
import c4 from '../../assets/images/bank/Picture4.png';
import c5 from '../../assets/images/bank/Picture5.png';
import c6 from '../../assets/images/bank/Picture6.png';
import c7 from '../../assets/images/bank/Picture7.png';
import c8 from '../../assets/images/bank/Picture8.png';
import c9 from '../../assets/images/bank/Picture9.png';
import c10 from '../../assets/images/bank/Picture10.png';

export default function BankProject() {
  return (
    <Box sx={{ width: '100%', height:'auto' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.pic}>
            <img
              srcSet={`${item.pic}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.pic}?w=248&fit=crop&auto=format`}
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
    pic:  c1,
    title: 'Bed',
    author: '',
  },
  {
    pic:  c2,
    title: 'Books',
    author: '',
  },
  {
    pic:  c3,
    title: 'Sink',
    author: '',
  },
  {
    pic:  c4,
    title: 'Kitchen',
    author: '',
  },
  {
    pic:  c5,
    title: 'Blinds',
    author: '',
  },
  {
    pic:  c5,
    title: '',
    author: '',
  },
  {
    pic:  c6,
    title: 'Laptop',
    author: '',
  },
  {
    pic:  c7,
    title: 'Doors',
    author: '',
  },
  {
     pic:  c8,
     title: 'Doors',
     author: '',
   },
   {
     pic:  c9,
     title: 'Doors',
     author: '',
   },
   {
     pic:  c10,
     title: 'Doors',
     author: '',
   },
  
];
