import "./projects.css";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Projects = () => {
  return (
    <div>
    <h1 className="a-title">Projects</h1>

  <div className="a">
    <Card className="projectcard" sx={{ maxWidth: 340 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="240"
        image="https://user-images.githubusercontent.com/99112218/155578338-19b866ed-fbf9-4d69-976e-d1771bc3906e.png" 
        alt="Chit Chat app"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          CHIT CHAT APP
        </Typography>
        <Typography variant="body2" color="text.secondary">
        CHIT CHAT app is an android communicating app which is based on Bluetooth technology. 
        This Mobile App is designed to solve above mentioned problems. 
        It is written using Java programming language and uses SQLite as well in data storing. 
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  <Card className="projectcard" sx={{ maxWidth: 340 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="240"
        image="https://images.unsplash.com/photo-1472393365320-db77a5abbecc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
        alt="SnaT app"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          SnaT APP
        </Typography>
        <Typography variant="body2" color="text.secondary">
        SnaT(Snap and Track) is a first application available in both iOS, 
        and Android that is built based on Sri Lankan food style so that 
        Users can maintain their meal progress and maintain their health 
        by taking AI assisted food statistics.
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  
  </div >
  <div className="a">
    <Card className="projectcard" sx={{ maxWidth: 340 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="https://cepdnaclk.github.io/e18-3yp-Smart-Gate-Keeping-and-Authentication-System/images/accol-anywhere-high-resolution-color-logo.png" 
          alt="SnaT app"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ACCOL
          </Typography>
          <Typography variant="body2" color="text.secondary">
          ACCOL | Anywhere is a system that gets the presence of a person using a fingerprint scanner 
          (including a keypad and a display screen) and a drop arm gate that opens for a correctly verified fingerprint. 
          The system is connected with the management system of the institution. 
          The administration of the institution can view and handle data there. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className="projectcard" sx={{ maxWidth: 340 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBIeSSNzTCJPteA-UmOwPGx0ypleoCvGiQlOxsSBNL022irZzP9JifMoYkO_gMoKobVJc&usqp=CAU" 
          alt="SnaT app"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            current project
          </Typography>
          <Typography variant="body2" color="text.secondary">
         ....
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  
  </div>
    
    
  );
};

export default Projects;

/**
 * 
 * 
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
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
    </Card>
  );
}


 * 
 * 
 */