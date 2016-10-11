import React, { Component } from 'react';

import {
 AppRegistry,
 StyleSheet,
 Text,
 View,
 TouchableHighlight,
} from 'react-native';


export class NavigateNext extends Component {
  constructor() {
    super();
  }

  navigateProgramatically(e) {
    e.preventDefault();
    this.context.router.transitionTo("/results")
  }

  render() {
    return (
      <TouchableHighlight
          onPress={this.navigateProgramatically.bind(this)}
          >
        <Text
        >Go</Text>
      </TouchableHighlight>
    );
  }
}
// const NavLink = ({to, children}, context) => {
//   const pressHandler = () => context.router.transitionTo(to);
//   return (
//     <TouchableHighlight onPress={pressHandler}>
//       {children}
//     </TouchableHighlight>
//   )
// }
// NavLink.contextTypes = {router: React.PropTypes.object}

NavigateNext.contextTypes = {
  router: React.PropTypes.object
};
