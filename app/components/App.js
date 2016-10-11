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
import { SearchResults } from './SearchResults.js'
import { PropertyView } from './PropertyView.js'


export class App extends Component {
 render() {
   return (
     <Router>
      <View>
           <Match exactly pattern="/" component={SearchPage}/>
           <Match exactly pattern="/view" component={PropertyView}/>
           <Match exactly pattern="/results" component={SearchResults}/>
        </View>
     </Router>
   );
 }
}
