import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom'

import cs142models from '../modelData'

class UserDetailComponent extends React.Component {
  render() {
    const userId = this.props.match.params.userId;
    const user = cs142models.userModel(userId);

    return (
      <Card>
        <CardContent>
          <Typography variant="headline" component="h2">{user.first_name} {user.last_name}</Typography>
          <Typography color="textSecondary">Occupation: {user.occupation}</Typography>
          <Typography color="textSecondary">Location: {user.location}</Typography>
          <Typography component="p">{user.description}</Typography>
          
        </CardContent>
        <CardActions>
          <Button size="small"><Link to={`/photos/${user._id}`}>{user.first_name}'s Photos</Link></Button>
        </CardActions>
      </Card>
    );

  }
}

export default UserDetailComponent;