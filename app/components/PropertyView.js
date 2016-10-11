import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  ListView,
  Image,
} from 'react-native';

export class PropertyView extends Component {

  onBackPressed() {
    this.context.router.transitionTo({
     pathname: '/results',
     query: { listings: this.props.location.query.listings }
    })
  }

  render() {
    var property = this.props.location.query.property;
    var stats = property.bedroom_number + ' bed ' + property.property_type;
    if (property.bathroom_number) {
      stats += ', ' + property.bathroom_number + ' ' + (property.bathroom_number > 1
        ? 'bathrooms' : 'bathroom');
    }

    var price = property.price_formatted.split(' ')[0];

    return (
      <View>
      <Text style={styles.NavBar}>
      <TouchableHighlight
          onPress={this.onBackPressed.bind(this)}
          >
          <Text
          style={styles.routeLink}
          >
          Back
          </Text>
          </TouchableHighlight>
        React Native on Web Demo
      </Text>
      <View style={styles.container}>
        <Image style={styles.image}
            source={{uri: property.img_url}} />
        <View style={styles.heading}>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.title}>{property.title}</Text>
          <View style={styles.separator}/>
        </View>
        <Text style={styles.description}>{stats}</Text>
        <Text style={styles.description}>{property.summary}</Text>
      </View>
    </View>

    );
  }
}

const styles = StyleSheet.create({
 container: {
   marginTop: 65
 },
 heading: {
   backgroundColor: '#F8F8F8',
 },
 separator: {
   height: 1,
   backgroundColor: '#DDDDDD'
 },
 image: {
   width: 400,
   height: 300,
   alignSelf: 'center',
 },
 price: {
   fontSize: 25,
   fontWeight: 'bold',
   margin: 5,
   color: '#48BBEC'
 },
 title: {
   fontSize: 20,
   margin: 5,
   color: '#656565'
 },
 description: {
   fontSize: 18,
   margin: 5,
   color: '#656565'
 },
 NavBar: {
   marginBottom: 20,
   paddingTop: 20,
   fontSize: 22,
   backgroundColor: '#48BBEC',
   textAlign: 'center',
   alignSelf: 'stretch',
   color: 'white'
 },
 routeLink: {
   color: 'white',
   marginBottom: -25,
   marginLeft: 5,
 },
});


PropertyView.contextTypes = {
  router: React.PropTypes.object
};
