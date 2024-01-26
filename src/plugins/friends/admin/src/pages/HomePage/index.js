
//1 import area
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Button, Grid, GridItem, TextInput } from '@strapi/design-system';

//2. Function defination area
//RFC = React Functional Component
const HomePage = () => {
  //2.1 Hooks area
  const [name, setName] = useState("");


  //2.2 Function defaiont
  let saveStudentName = ()=>{
    console.log('Hi3',name)
  }
  //2.3 return statemernt
  return (
    <div style={{padding:'40px'}}>
       <form>
        <Grid>
          <GridItem col={6}>
              <TextInput 
              placeholder="" 
              label="Student Name" 
              name="student"  
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </GridItem>
        </Grid>
        <Grid>
          <GridItem col={6}>
        
            <Button onClick={saveStudentName} variant="default" style={{marginTop:'20px'}}>Submit</Button>
          </GridItem>
        </Grid>
      </form>
    </div>
  );
};


//3. Export area
export default HomePage;