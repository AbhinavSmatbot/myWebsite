
import './About.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

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

export default function About() {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
     <>
     <div className='aboutMainDiv mono'>
          <div>
               <p style={{fontWeight:'600',fontSize:"20px"}}>Exprience</p>
          </div>
      <Accordion className="accordion-allstyler mono" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography className='mono'>Developer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h5>Professional Experience – 2+ Years</h5>
            <ul>
               <li>Having 2 year experience in the area of Frontend Developer.</li>
               <li>Hands on experience in advanced technologies like, React.js, Angular, AngularJs, 
      Angular Material, JavaScript, HTML, CSS, and SASS.
               </li>
               <li>Having experience on application maintenance, bug fixes, and speed improvement.</li>
            </ul>
            <h5>SmatBot, Hyderabad – FrontEnd Developer  (2+ Years)</h5>
            <p>September 2021 to Present</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion-allstyler" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography className='mono'>NGO Social Worker</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
               <h5>Atal Gram Vikash Samiti - 2019 to 2020</h5>
               <h6>Roles & Responsibility - </h6>
            <dl>
               <dt>Program Development and Implementation.</dt>
               <dd>Plan, coordinate, and implement projects and initiatives in line with the organization's mission.</dd>
               <dt>Advocacy and Awareness.</dt>
               <dd>Raise awareness about important social or environmental issues.</dd>
               <dt>Community Engagement.</dt>
               <dd>Engage with community members to understand their needs and involve them in the organization's activities.</dd>
            </dl>
           
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion-allstyler" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className='mono'>Teaching</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
               <h5>PMKK Rewa(MP) - 2018 - 2019</h5>
               <h6>Pradhan Mantri Kaushal Kendra</h6>
            <ul>
               <li>Pradhan Mantri Kaushal Kendra Rewa (MP)</li>
            </ul>
            <h6>Area Of Teaching</h6>
            <dl>
               <dt>Rural Development</dt>
               <dd>Rural and semi-urban locations. This helps in rural development and uplifts the economic prospects of individuals living in these areas.</dd>
               <dt>Skill Development</dt>
               <dd>skill development and vocational training to Indian youth. They offer a wide range of courses and programs that aim to impart job-specific skills and make individuals more employable.</dd>
            </dl>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </>
  );
     
    
}


