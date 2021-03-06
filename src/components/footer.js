import React from 'react';
import { Link, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import constants from 'constants/common';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px',
    textAlign: 'center',
  },
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <Typography
        component={Link}
        href={`${constants.github}`}
        variant='subtitle2'
        color='primary'
        target='_blank'
        rel='noopener'
      >
        Website built by {constants.name}
      </Typography>
    </Paper>
  );
};

export default Footer;
