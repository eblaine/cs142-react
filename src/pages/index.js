import React from 'react';
import PropTypes from 'prop-types';
import PhotoShare from '../components/PhotoShare';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

const styles = theme => ({
  root: {
    textAlign: 'center',
  },
});

class Index extends React.Component {

  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.root}>
        <PhotoShare />
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
