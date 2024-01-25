/*
 *
 * HomePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import { Button, Grid, GridItem, TextInput } from '@strapi/design-system';
import { Form } from '@strapi/helper-plugin';

const HomePage = () => {
  return (
    <div>
      <form>
        <Grid>
          <GridItem col = {6}>
             <TextInput placeholder="" label="Student Name" name="Student"/>;
             <Button variant ='success'>Submit</Button>
          </GridItem>
        </Grid>
      </form>
      
    </div>
  );
}; 

export default HomePage;
