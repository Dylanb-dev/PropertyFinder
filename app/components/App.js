/**
 * React Native for Web Starter App
 * https://github.com/grabcode/react-native-web-starter
 * Follow me https://twitter.com/grabthecode
 */


import React, { Component } from 'react';
import {
 AppRegistry,
 StyleSheet,
 Text,
 View,
 TouchableHighlight,
} from 'react-native';

import { Match, Miss, MemoryRouter as Router } from 'react-router';

import { SearchPage } from './SearchPage.js'


export class App extends Component {
 render() {
   return (
     <Router>
       <View style={styles.container}>
         <View style={styles.routeContainer}>
           <Match exactly pattern="/" component={componentFactory('Home')}/>
           <Match pattern="/searchpage" component={ SearchPage }/>
           <Match pattern="/topics" component={componentFactory('Topics')}/>
           <Miss component={componentFactory('Nope, nothing here')}/>
         </View>
         <View style={styles.container}>
           <NavLink to="/">
             <Text style={styles.routeLink}>
               Home
             </Text>
           </NavLink>
           <NavLink to="/searchpage">
             <Text style={styles.routeLink}>
                Search Page
             </Text>
           </NavLink>
           <NavLink to="/topics">
             <Text style={styles.routeLink}>
               Topics
             </Text>
           </NavLink>
           <NavLink to="/broken">
             <Text style={styles.routeLink}>
               Broken
             </Text>
           </NavLink>
         </View>
       </View>
     </Router>
   );
 }
}
const NavLink = ({to, children}, context) => {
 const pressHandler = () => context.router.transitionTo(to);
 return (
   <TouchableHighlight onPress={pressHandler}>
     {children}
   </TouchableHighlight>
 )
}
NavLink.contextTypes = {router: React.PropTypes.object}

// Just a helper function to generate stateless components
const componentFactory = (routeName) => () => (
 <View>
   <Text style={styles.route}>{routeName}</Text>
 </View>
)


const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#F5FCFF',
 },
 route: {
   color: '#701010',
   fontSize: 40
 },
 routeLink: {
   color: '#0000FF'
 },
 routeContainer: {
   flex: 1,
   justifyContent: 'center'
 }

});
