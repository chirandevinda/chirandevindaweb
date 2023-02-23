import "./education.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tabs from '@mui/material/Tabs';

const Education = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="main">
      <p className="title">Education</p>
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tabs
              className="tabname"
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="wrapped label tabs example"
              // centered
            >
              <Tab className="tabname"
                value="1"
                label="Bachelor of Science of Engineering (UG)"
                // wrapped
              />
              <Tab className="tabname" value="2" label="G.C.E. Advanced Level" />
              <Tab className="tabname" value="3" label="G.C.E. Ordinary Level" />
            </Tabs>
          </TabList>
        </Box>
        <TabPanel className="tabspace" value="1">
          <p className="school"> University Of Peradeniya</p>
          <p className="result">CGPA 3.5/4.0 </p>
          <p className="duratoin">2019 - present</p>
          </TabPanel>
        <TabPanel className="tabspace" value="2">
          <p className="school"> Dharmapala vidyalaya</p>
          <p className="result">3A's & A (English) </p>
          <p className="duratoin">2016 - 2018</p>
        </TabPanel>
        <TabPanel className="tabspace" value="3">
          <p className="school"> St. John Collage</p>
          <p className="result">8A's & 1C </p>
          <p className="duratoin">2010 - 2015</p>
        </TabPanel>
      </TabContext>
    </Box>
  </div>
  );
};

export default Education;


/*


import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}


import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Item One" />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
      </Tabs>
    </Box>
  );
}


*/