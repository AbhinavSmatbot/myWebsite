import '../About/About.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import Table from '../Project/Table';
import { Link } from 'react-router-dom';
import ProjectSmatbot from './ProjectSmatbotImage';
import BankProject from './BankProject';
import SportProject from './SportProject';
import CilponisProject from './Ciliponis';

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

export default function Project() {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
     <>
     <div className='aboutMainDiv mono'>
          <div>
               <p style={{fontWeight:'600',fontSize:"20px"}}>Project</p>
          </div>
      <Accordion className="accordion-allstyler mono" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography className='mono'>Smatbot</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='mono'>
            <h5 style={{fontWeight:'600',fontSize:'16px'}}>Project Name -  SmatBot</h5>
            {/* <p>Project Name  :  SmatBot</p> */}
            <p>Duration :  September 2021 to Still</p>
            <p>Site Link :  <Link to="www.smatbot.com">www.smatbot.com</Link></p>
            <p>Tech Stack : Angular + SQL + Node js + Php</p>
            <p>Role : Frontend Developer</p>
            <h6>Description - </h6>
            <p>SmatBot is a chatbot platform that can be used to create AI-Powered, Multilingual,     omnichannel bots  for Lead Capture. And make it easy for users to find the information 
 they need by responding to their questions and requests through text input without the 
 need for human intervention.
</p>
            <h5 style={{fontWeight:'600',fontSize:'16px'}}>Roles & Responsibility :</h5>
            <ul>
              <li>Automated the plans and add on’s subscriptions to Zoho.</li>
              <li>Involved in all the major deployments. </li>
              <li>Revamped the dashboard for creating the bot flow and for viewing the chatbot message conversations.</li>
              <li>Product planning with new features.</li>
              <li>Developing customer-facing UI and backend services for various business processes.</li>
            </ul>
             {/* <Table/> */}

            
          </Typography>

          <ProjectSmatbot/>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion-allstyler" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography className='mono'>Cinepolis India</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='mono'>
            <h5 style={{fontWeight:'600',fontSize:'16px'}}>Project Name -  Cinepolis</h5>
            {/* <p>Project Name  :  Cinepolis</p> */}
            <p>Duration :  November 2021 to January 2022</p>
            <p>Site Link :  <Link to="https://www.kds.cinepolis.in">https://www.kds.cinepolis.in</Link></p>
            <p>Tech Stack : React + SQL + Node js + Php</p>
            <p>Role : Frontend Developer</p>
            <h6>Description - </h6>
            <p>Using the WhatsApp chatbot, we can instantly book cinema tickets, food, and beverages  across India.Those have made reservations or placed orders for food and drink via the WhatsApp chatbot are listed in a database, and information will be displayed on a website. Once the food has been delivered, the Cinepolis person may simply follow it and modify the status of which linked person's order has been delivered after delivering it to the seats.
            </p>
            <h5 style={{fontWeight:'600',fontSize:'16px'}}>Roles & Responsibility :</h5>
            <ul>
              <li>Developing frontend website architecture.</li>
              <li>Developed a WhatsApp chatbot for Cinepolis Ticket booking and for Food ordering.</li>
              <li>Revamped the dashboard for creating the bot flow and for viewing the chatbot message conversations•	From Scratch, Application is developed, maintained, and fixing the bugs.</li>
              <li>Ensuring  cross-platform optimization for mobile phones.</li>
              <li>Collaborating with back-end developers on the integration of elements.</li>
            </ul>
             {/* <Table/> */}

            
          </Typography>
          <CilponisProject/>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion-allstyler" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className='mono'>Online Banking Services</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
               <h5>MCA Collage Project</h5>
               {/* <h6>Jan 2020 to jun 2020</h6> */}
            <ul>
               <li>Design and Implementation of Online Banking Services</li>
            </ul>
            <p>Project Name  :  Online Banking Services</p>
            <p>Duration :  Jan 2020 to jun 2020</p>
            {/* <p>Site Link :  <Link to="https://www.kds.cinepolis.in">https://www.kds.cinepolis.in</Link></p> */}
            <p>Tech Stack : JavaScript + Java + Oracle 10g + Tomcat 5.x</p>
            <p>Role : Frontend Developer</p>
            <h6>Description - </h6>
            <p>Using the WhatsApp chatbot, we can instantly book cinema tickets, food, and beverages  across India.Those have made reservations or placed orders for food and drink via the WhatsApp chatbot are listed in a database, and information will be displayed on a website. Once the food has been delivered, the Cinepolis person may simply follow it and modify the status of which linked person's order has been delivered after delivering it to the seats.
            </p>
            <h5 style={{fontWeight:'600',fontSize:'16px'}}>Roles & Responsibility :</h5>
            <ul>
              <li>Existing system is a manual system it will not provide the online system.</li>
              <li>Existing system does not provide the separate login for the user (customer).</li>
              <li>Existing system does not provide the online transaction facility.</li>
              <li>This system does not give the update account information for the customer.</li>
              <li>	User can transfer funds from his account to any other account with this bank.</li>
            </ul>
          </Typography>
          <BankProject/>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion-allstyler" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className='mono'>Rewa Sport Management</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
               <h5>Rewa Sport Management Collage Project</h5>
               {/* <h6>Jan 2020 to jun 2020</h6> */}
            <ul>
               <li>APS University Rewa (M.P.) Sport Department</li>
            </ul>
            <p>Project Name  :  Sport Management</p>
            <p>Duration :  july 2019 to Dec 2019</p>
            {/* <p>Site Link :  <Link to="https://www.kds.cinepolis.in">https://www.kds.cinepolis.in</Link></p> */}
            <p>Tech Stack : JavaScript + PHP + PHP My Admin + Tomcat 5.x</p>
            <p>Role : Frontend Developer</p>
            <h6>Description - </h6>
            <p>Using this website website,we can find a wide range of information related to sports.  
            </p>
            <h5 style={{fontWeight:'600',fontSize:'16px'}}>Roles & Responsibility :</h5>
            <ul>
              <li> websites provide the latest news and updates about various sports, teams, and athletes.includuing game results, player transfers, injury updates, and more.</li>
              <li>Scores and Live Updates: Many sports websites offer live scores and updates for ongoing games and events. You can check the scores.</li>
              <li>You can find schedules for upcoming games and events for various sports. This information helps fans plan to watch their favorite teams in action.</li>
              <li>Feature articles, analysis, and opinion pieces written by experts and journalists. These pieces can provide in-depth insights into games, players, and team performances.</li>
              <li>You can learn more about your favorite players and teams, including their statistics, biographies, and recent performances.</li>
            </ul>
          </Typography>
          <SportProject/>
        </AccordionDetails>
      </Accordion>
    </div>
    </>
  );
     
    
}


