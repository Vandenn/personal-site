import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Link, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SectionLayout from './sectionLayout';
import navigationConstants from 'constants/navigation';

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: theme.spacing(2),
  },
  projectEntry: {
    padding: theme.spacing(2),
  },
}));

const Projects = (props) => {
  const classes = useStyles();
  const { data } = props;

  const renderProjectEntry = (node, projectIndex) => {
    const { html, frontmatter } = node;
    const { title, tech, link } = frontmatter;
    const allocatedSize = Math.max(4, 12 / data.length);

    const renderTech = () => {
      return (
        <>
          <Typography variant='subtitle1'>Tech</Typography>
          <ul>
            {tech.map((techEntry, techIndex) => {
              return <li key={techIndex}>{techEntry}</li>;
            })}
          </ul>
        </>
      );
    };

    return (
      <Grid item key={projectIndex} xs={12} sm={allocatedSize}>
        <Paper
          elevation={0}
          variant='outlined'
          className={classes.projectEntry}
        >
          <Typography variant='h6'>{title}</Typography>
          <Typography dangerouslySetInnerHTML={{ __html: html }} />
          {renderTech()}
          <Link href={link} target='_blank' rel='noopener'>
            View
          </Link>
        </Paper>
      </Grid>
    );
  };

  return (
    <SectionLayout id={navigationConstants.projects.id}>
      <Typography variant='h3'>Some interesting projects I've done</Typography>
      <Grid container spacing={2} className={classes.content}>
        {data.map(({ node }, index) => renderProjectEntry(node, index))}
      </Grid>
    </SectionLayout>
  );
};

Projects.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Projects;
