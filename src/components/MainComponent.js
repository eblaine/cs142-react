import React from 'react';
import { Switch, Route } from 'react-router-dom'
import UserListComponent from './UserListComponent'
import UserDetailComponent from './UserDetailComponent'
import UserPhotosComponent from './UserPhotosComponent'

class MainComponent extends React.Component {
  render() {
    return (
      <main className={this.props.content}>
        <Switch>
          <Route exact path='/' component={UserListComponent}/>
          {/* both /roster and /roster/:number begin with /roster */}
          <Route exact path='/users' component={UserListComponent}/>
          <Route path='/users/:userId' component={UserDetailComponent}/>
          <Route path='/photos/:userId' component={UserPhotosComponent}/>
        </Switch>
      </main>
    );
  }
}

export default MainComponent;