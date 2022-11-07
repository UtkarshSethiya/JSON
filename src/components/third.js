import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import config from "../config.json";
import { ListItem } from '@mui/material';
import {AgGridReact} from 'ag-grid-react';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>



      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">



           {config.components[2].info.map((doc)=>{
            return(
              <Tab label={doc.tab1} {...a11yProps(0)} />
            )
           })}


      
        </Tabs>
      </Box>

      {config.components[2].info.map((doc)=>{
        
            return(
              <TabPanel value={value} index={doc.index}>
        {doc.components.map((item)=>{
   

   if(doc.type=="content"){
        return(
 <div>



  <h1>{item.name}</h1>
   <pre></pre>
 
 </div>

        ) 
      } 

      else if(doc.type=="button")  {
        console.log(item);
    
       
          return(
           
              <button className={item.class}>{item.name}</button>
          
          )
        }



      else if(doc.type=="table"){
    console.log(doc.components);
    
     return(
      <div className="ag-theme-alpine  table" style={{ height: 500, width: 700 }}>
            <AgGridReact rowData={doc.components} columnDefs={config.components[0].column}></AgGridReact>
          </div>
             )
        

      }

  /*  else if(doc.type=='tabs'){
       


return(
        <Box sx={{ width: '100%' }}>



        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs onChange={handleChange} aria-label="basic tabs example">
  
          {doc.components.map((it)=>{
          console.log(it.name);
         return(
           <Tab label={it.name} {...a11yProps(0)} />
         )
        })}

  
           
  
  
        
          </Tabs>
        </Box>
        {doc.components.map((it)=>{
          console.log(it.name);
         return(
          <TabPanel index={it.index}>
            <h1>{it.components}</h1>

          </TabPanel>
         )
        })}

       
        </Box>
        )





     



       

   
 
      }*/


        })}





      </TabPanel>


            )
         




           })}


    
    </Box>
  );
}
