import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import cs142models from '../modelData'

class UserListComponent extends React.Component {
  render() {
    const users = cs142models.userListModel();

    let listItems = users.map(function(user) {
      let displayText = user.first_name + ' ' + user.last_name; 
      return (
        <ListItem button>
          <ListItemText primary={displayText}/>
        </ListItem>
      );
    });

    return (
      <div>
        <List component="nav">
          {listItems}
        </List>
      </div>
    );
  }
}

export default (UserListComponent);