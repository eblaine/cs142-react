import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import cs142models from '../modelData'


class UserListComponent extends React.Component {
  selectUser(event) {
    event.preventDefault();
    window.location.pathname = '/users/' + this._id;
  }

  render() {
    const users = cs142models.userListModel();
    let selectUser = this.selectUser;

    let listItems = users.map(function(user) {
      let displayText = user.first_name + ' ' + user.last_name; 
      return (
        <ListItem button key={user._id} onClick={selectUser.bind(user)}>
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