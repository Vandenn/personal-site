import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SectionLayout from './sectionLayout';
import navigationConstants from 'constants/navigation';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '50px',
    padding: '50px',
  },
  content: {
    marginTop: theme.spacing(2),
  },
  imageContainer: {
    width: '100%',
  },
}));

const About = (props) => {
  const classes = useStyles();
  const { data } = props;
  const { html, frontmatter } = data[0].node;

  return (
    <SectionLayout id={navigationConstants.about.id}>
      <Typography variant='h3'>{frontmatter.title}</Typography>
      <Grid
        container
        alignItems='center'
        spacing={2}
        className={classes.content}
      >
        <Grid item xs={12} sm={12} md={4}>
          <div className={classes.imageContainer}>
            <Img fluid={frontmatter.avatar.childImageSharp.fluid} alt='Evan' />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Typography dangerouslySetInnerHTML={{ __html: html }} />
        </Grid>
      </Grid>
    </SectionLayout>
  );
};

About.propTypes = {
  data: PropTypes.array.isRequired,
};

export default About;
