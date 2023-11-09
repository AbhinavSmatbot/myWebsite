
import '../About/About.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import SimpleImageSlider from "react-simple-image-slider";

import a1 from '../../assets/certificate/1.jpeg';
import a2 from '../../assets/certificate/2.jpeg';
import a3 from '../../assets/certificate/3.jpeg';
import a4 from '../../assets/certificate/4.jpeg';
import a5 from '../../assets/certificate/5.jpeg';
import a6 from '../../assets/certificate/6.jpeg';
import a7 from '../../assets/certificate/7.jpeg';
import a8 from '../../assets/certificate/8.jpeg';
import a9 from '../../assets/certificate/9.jpeg';
import a11 from '../../assets/certificate/11.jpeg';
import a12 from '../../assets/skills/22.jpeg';
import a14 from '../../assets/skills/33.jpeg';
import a13 from '../../assets/skills/44.jpeg';
import a15 from '../../assets/skills/55.jpeg';
import a16 from '../../assets/skills/66.jpeg';
import a17 from '../../assets/skills/77.jpeg';
import a18 from '../../assets/skills/88.jpeg';
import a19 from '../../assets/skills/99.jpeg';
import a20 from '../../assets/skills/11.jpeg';
import a21 from '../../assets/skills/111.jpeg';

const images22 = [
  { url: a1 },
  { url: a2 },
  { url: a3 },
  { url: a4 },
  { url: a5 },
];
const images33 = [
  { url: a8 },
  { url: a9 },
  { url: a6 },
  { url: a7 },
  { url: a11 },
];

const images44 = [
  { url: a15 },
  { url: a16 },
  { url: a17 },
  { url: a18 },
  { url: a19 },

];

const images55 = [
  { url: a12 },
  { url: a13 },
  { url: a14 },
  { url: a21 },
  { url: a20 },
];

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Education() {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <div className='aboutMainDiv mono'>
        <div>
          <p style={{ fontWeight: '600', fontSize: "20px" }}>Education</p>
        </div>
        <Accordion className="accordion-allstyler mono" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography className='mono'>Degree</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='mono'>
              <h5>MCA</h5>
              <ul>
                <li>Master of Computer Applications(MCA)</li>
                <li>Form Awadhesh Pratap Singh University Rewa (M.P.) </li>
                <li>University Teaching Department</li>
                {/* <li>2017 - 2020</li> */}
              </ul>
              <h5>BCA</h5>
              <ul>
                <li>Bachelor of Computer Applications(BCA)</li>
                <li>Form Awadhesh Pratap Singh University Rewa (M.P.) </li>
                <li>University Teaching Department</li>
                {/* <li>2014 - 2017</li> */}
              </ul>
              <h5>DCA</h5>
              <ul>
                <li>Diploma in Computer Applications(DCA)</li>
                <li>Makhanlal Chaturvedi National University of Journalism and Communication (MCCU Bhopal)</li>
                <li>National Collage Rewa (M.P.)</li>
                {/* <li>2014 - 2015</li> */}
              </ul>
              <h5>BSW</h5>
              <ul>
                <li>Bachelor of Social Work(BSW)</li>
                <li>Mahatma Gandhi Chitrakoot Gramodaya Vishwavidyalaya(MGCGV)</li>
                <li>Distence Education</li>
                {/* <li>2017 - 2019</li> */}
              </ul>


            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion-allstyler" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography className='mono'>Educational Certificates</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='mono'>
              {/* <h5>Educational Certificates</h5> */}
              {/* <h6>Roles & Responsibility - </h6> */}
              <ul>
                <li>Tally - 3 months Certificates From Micro Technology Rewa (M.P.) </li>
                <li>MS Office - 3 months Certificates From SIS Technology Rewa (M.P.)</li>
                <li>JAVA - 6 months Ceritificate from NIT Hyderabad.</li>
                <li>Full Stack Web Development - 6 months Ceritificate from NIT Hyderabad.</li>
                <li>Angular - 3 months Ceritificate from NIT Hyderabad.</li>
              </ul>


              <div className='gallaryImageFlex11'>
                <div className='asasas pull-left'>
                  <SimpleImageSlider
                    width={700}
                    height={504}
                    images={images55}
                    showBullets={true}
                    showNavs={true}
                    autoPlay={true}
                    slideDuration={0.4}
                  />
                </div>
              </div>
              <div className='gallaryImageFlex11'>
                <div className='asasas pull-left'>
                  <SimpleImageSlider
                    width={700}
                    height={504}
                    images={images44}
                    showBullets={true}
                    showNavs={true}
                    autoPlay={true}
                    slideDuration={0.4}
                  />
                </div>
              </div>
              <div className='gallaryImageFlex22'>
                <div className='asasas pull-left'>
                  <SimpleImageSlider
                    width={280}
                    height={504}
                    images={images55}
                    showBullets={true}
                    showNavs={true}
                    autoPlay={true}
                    slideDuration={0.4}
                  />
                </div>
              </div>
              <div className='gallaryImageFlex22'>
                <div className='asasas pull-left'>
                  <SimpleImageSlider
                    width={280}
                    height={504}
                    images={images44}
                    showBullets={true}
                    showNavs={true}
                    autoPlay={true}
                    slideDuration={0.4}
                  />
                </div>
              </div>

            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion-allstyler" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography className='mono'>Social Certificates</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='mono'>
              {/* <h5></h5> */}
              {/* <h6>Pradhan Mantri Kaushal Kendra</h6> */}
              <ul>
                <li>Rural Development Progarm MP Certificates.</li>
                <li>Nehru Yuva Kendra Sangathan (NYKS) under the Ministry of Youth Affairs and Sports, Government of India Certificates.</li>
              </ul>
              

              <div className='gallaryImageFlex11'>
                <div className='asasas pull-left'>
                  <SimpleImageSlider
                    width={700}
                    height={504}
                    images={images22}
                    showBullets={true}
                    showNavs={true}
                    autoPlay={true}
                    slideDuration={0.4}
                  />
                </div>
              </div>
              <div className='gallaryImageFlex11'>
                <div className='asasas pull-left'>
                  <SimpleImageSlider
                    width={700}
                    height={504}
                    images={images33}
                    showBullets={true}
                    showNavs={true}
                    autoPlay={true}
                    slideDuration={0.4}
                  />
                </div>
              </div>
              <div className='gallaryImageFlex22'>
                <div className='asasas pull-left'>
                  <SimpleImageSlider
                    width={280}
                    height={504}
                    images={images22}
                    showBullets={true}
                    showNavs={true}
                    autoPlay={true}
                    slideDuration={0.4}
                  />
                </div>
              </div>
              <div className='gallaryImageFlex22'>
                <div className='asasas pull-left'>
                  <SimpleImageSlider
                    width={280}
                    height={504}
                    images={images33}
                    showBullets={true}
                    showNavs={true}
                    autoPlay={true}
                    slideDuration={0.4}
                  />
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );


}


