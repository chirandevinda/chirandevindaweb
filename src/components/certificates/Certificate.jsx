import "./Certificate.css";
import * as React from 'react';


const Certificate = () => {
  return (
    <div className="main">
      
        <h1 className="title">Certificate</h1>
        <div>
          <div>
          <ol className="list">
            <li className="item">Programming for Everybody (Getting Started with Python)</li>
            <li className="item">Improve Business Performance with Google Forms</li>
            <li className="item">Project Management: The Basics for Success | Coursera</li>
            <li className="item">Python | Hacker Rank</li>
            <li className="item">C | Hacker Rank</li>
            <li className="item">java | Hacker Rank</li>
            <li className="item">Create Your First Python Program From UST</li>
          </ol>
          </div>
        </div>
        
      
    </div>
  );
};

export default Certificate;
/**
 * 
 import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}

 */