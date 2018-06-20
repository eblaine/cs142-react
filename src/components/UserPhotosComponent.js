import React from 'react';

import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { Link } from 'react-router-dom'

import cs142models from '../modelData';

class UserPhotosComponent extends React.Component {
  render() {
    const userId = this.props.match.params.userId;
    const photos = cs142models.photoOfUserModel(userId);

    let items = photos.map(photo => {
      let date = new Date(photo.date_time);
      let day = date.toDateString();
      let time = date.toTimeString();
      let commentList = []
      if (photo.comments) {
        commentList = photo.comments.map(comment => {
          return (
            <ListItem key={comment._id}>
              <Typography component="h4">
                <Link to={`/users/${comment.user._id}`}>{comment.user.first_name} {comment.user.last_name}</Link>
              </Typography> 
              <ListItemText primary={comment.comment} secondary={comment.date_time}/>
            </ListItem>
          );
        });
      } else {
        commentList = 'Nothing here!';
      }

      return (<div key={photo._id}>
        <Card>
          <CardMedia
            component="img"
            src={`/static/images/${photo.file_name}`}
          /> 
          <CardContent>
            <Typography component="p">Uploaded at {time} on {day}</Typography>
            <Typography variant="headline" component="h3">Comments</Typography>
            <div>
              <List>{commentList}</List>
            </div>
          </CardContent>
        </Card>
      </div>);
    }); 

    return (
      <div>{items}</div>
    );
  }
}

export default UserPhotosComponent;