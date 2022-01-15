import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion({releaseDate, movieDirector, addedDate}) {
  return (
    <div>
      <Accordion style={{background:'black', color:'white'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'white'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="subtitle2">View All Information</Typography>
        </AccordionSummary>
        <AccordionDetails style={{textAlign:'left'}}>
          <Typography variant="caption">
            <ul style={{listStyleType:'none', padding:0, margin:0}}>
            <li key="item1"> <strong>Release Date:</strong> {releaseDate} {"\n"}</li>
            <li key="item2"> <strong>Movie Director: </strong> {movieDirector}</li>
            <li key="item3"> <strong>Date Added: </strong> {addedDate.split('-').reverse().join('-')}</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}