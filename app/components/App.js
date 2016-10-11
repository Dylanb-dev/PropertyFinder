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

import { NavigateNext } from './NavigateNext.js'
import { SearchPage } from './SearchPage.js'
import { SearchResults } from './SearchResults.js'
import { PropertyView } from './PropertyView.js'


export class App extends Component {
 render() {
   return (
     <Router>
       <View style={styles.container}>
           <Match exactly pattern="/" component={SearchPage}/>
           <Match exactly pattern="/navitest" component={NavigateNext}/>
           <Match exactly pattern="/view" component={PropertyView}/>
           <Match exactly pattern="/results" component={SearchResults}/>
         </View>
     </Router>
   );
 }
}
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
