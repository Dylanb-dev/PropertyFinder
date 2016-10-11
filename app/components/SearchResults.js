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


export class SearchResults extends Component {

  componentDidMount() {
    console.log(this.props.location.query.cat);
  }
  constructor(props) {
    super(props);
    var listings = [{
        "bathroom_number": 1,
        "bedroom_number": 1,
        "car_spaces": 0,
        "commission": 0,
        "construction_year": 0,
        "datasource_name": "PrimeLocation",
        "img_height": 255,
        "img_url": "http://imgs.nestimg.com/flat_3050126475746980139.jpg",
        "img_width": 340,
        "keywords": "Balcony, Kitchen, Porter, Modern",
        "latitude": 51.533756,
        "lister_name": "Pomp",
        "lister_url": "http://www.nestoria.co.uk/detail/0000003050126475746980139/title/5/1-1?serpUid=&pt=1&ot=1&l=london&did=69_high1&utm_source=api&utm_medium=external",
        "listing_type": "buy",
        "location_accuracy": 9,
        "longitude": -0.203743,
        "price": 545000,
        "price_currency": "£",
        "price_formatted": "£545,000",
        "price_high": 545000,
        "price_low": 545000,
        "price_type": "fixed",
        "property_type": "flat",
        "size": 0,
        "size_type": "net",
        "summary": "Detailed deionqueens park place development offers a 24 hour concie...",
        "thumb_height": 60,
        "thumb_url": "http://imgs.nestimg.com/medium/flat_3050126475746980139.jpg",
        "thumb_width": 80,
        "title": "Flat for sale, London Nw6 - Porter",
        "updated_in_days": 5,
        "updated_in_days_formatted": "first seen 5 days ago"
      },
      {
        "bathroom_number": 6,
        "bedroom_number": 6,
        "car_spaces": 0,
        "commission": 0,
        "construction_year": 0,
        "datasource_name": "Zoopla",
        "img_height": 255,
        "img_url": "http://imgs.nestimg.com/town_house_london_7480007474541900126.jpg",
        "img_width": 340,
        "keywords": "Lift, Parking, Cul-de-Sac",
        "latitude": 51.50022,
        "lister_name": "Jeremy Davidson",
        "lister_url": "http://www.nestoria.co.uk/detail/0000007480007474541900126/title/5/1-2?serpUid=&pt=1&ot=1&l=london&did=57_default&utm_source=api&utm_medium=external",
        "listing_type": "buy",
        "location_accuracy": 9,
        "longitude": -0.176231,
        "price": 13800000,
        "price_currency": "£",
        "price_formatted": "£13,800,000",
        "price_high": 13800000,
        "price_low": 13800000,
        "price_type": "fixed",
        "property_type": "house",
        "size": 0,
        "size_type": "net",
        "summary": "A superb double fronted, newly decorated by jane churchill 6 bedroo...",
        "thumb_height": 60,
        "thumb_url": "http://imgs.nestimg.com/medium/town_house_london_7480007474541900126.jpg",
        "thumb_width": 80,
        "title": "Ashburton House, Rutland Gardens, Knightsbridge London Sw7",
        "updated_in_days": 5,
        "updated_in_days_formatted": "first seen 5 days ago"
      },
      {
        "bathroom_number": 0,
        "bedroom_number": 2,
        "car_spaces": 0,
        "commission": 0,
        "construction_year": 0,
        "datasource_name": "Home.co.uk",
        "img_height": 81,
        "img_url": "http://imgs.nestimg.com/flatapartment_5530034475835007795.jpg",
        "img_width": 108,
        "keywords": "Kitchen",
        "latitude": 51.49717,
        "lister_url": "http://www.nestoria.co.uk/detail/0000005530034475835007795/title/5/1-3?serpUid=&pt=1&ot=1&l=london&did=85_default&utm_source=api&utm_medium=external",
        "listing_type": "buy",
        "location_accuracy": 8,
        "longitude": -0.102761,
        "price": 280000,
        "price_currency": "£",
        "price_formatted": "£280,000",
        "price_high": 280000,
        "price_low": 280000,
        "price_type": "fixed",
        "property_type": "flat",
        "size": 0,
        "size_type": "net",
        "summary": "Last remaining one and two bedroom retirement apartments on this ne...",
        "thumb_height": 60,
        "thumb_url": "http://imgs.nestimg.com/medium/flatapartment_5530034475835007795.jpg",
        "thumb_width": 80,
        "title": "Lewsey Court London Road, Tetbury",
        "updated_in_days": 1,
        "updated_in_days_formatted": "new!"
      },
      {
        "bathroom_number": 0,
        "bedroom_number": 2,
        "car_spaces": 0,
        "commission": 0,
        "construction_year": 0,
        "datasource_name": "OnTheMarket.com",
        "img_height": 300,
        "img_url": "http://imgs.nestimg.com/2_bedroom_flat_6200109476001491207.jpg",
        "img_width": 400,
        "keywords": "Garden, Conversion, Victorian, Kitchen, Modern",
        "latitude": 51.4664,
        "lister_name": "John Payne",
        "lister_url": "http://www.nestoria.co.uk/detail/0000006200109476001491207/title/5/1-4?serpUid=&pt=1&ot=1&l=london&did=105_low1&utm_source=api&utm_medium=external",
        "listing_type": "buy",
        "location_accuracy": 9,
        "longitude": -0.004368,
        "price": 499000,
        "price_currency": "£",
        "price_formatted": "£499,000",
        "price_high": 499000,
        "price_low": 499000,
        "price_type": "fixed",
        "property_type": "flat",
        "size": 0,
        "size_type": "net",
        "summary": "Well presented and good sized 2 bedroom conversion flat occupying t...",
        "thumb_height": 60,
        "thumb_url": "http://imgs.nestimg.com/medium/2_bedroom_flat_6200109476001491207.jpg",
        "thumb_width": 80,
        "title": "Granville Park London Se13 - Modern",
        "updated_in_days": 2,
        "updated_in_days_formatted": "first seen 2 days ago"
      },
      {
        "bathroom_number": 1,
        "bedroom_number": 1,
        "car_spaces": 0,
        "commission": 0,
        "construction_year": 0,
        "datasource_name": "SmartNewHomes",
        "img_height": 255,
        "img_url": "http://imgs.nestimg.com/flat_london_1890054476000805013.jpg",
        "img_width": 340,
        "keywords": "",
        "latitude": 51.49069,
        "lister_name": "Rw Invest",
        "lister_url": "http://www.nestoria.co.uk/detail/0000001890054476000805013/title/5/1-5?serpUid=&pt=1&ot=1&l=london&did=39_default&utm_source=api&utm_medium=external",
        "listing_type": "buy",
        "location_accuracy": 9,
        "longitude": 0.009172,
        "price": 179995,
        "price_currency": "£",
        "price_formatted": "£179,995",
        "price_high": 179995,
        "price_low": 179995,
        "price_type": "fixed",
        "property_type": "flat",
        "size": 0,
        "size_type": "net",
        "summary": "Why ibis styles greenwich peninsula hotel for investment purposes o...",
        "thumb_height": 60,
        "thumb_url": "http://imgs.nestimg.com/medium/flat_london_1890054476000805013.jpg",
        "thumb_width": 80,
        "title": "London Hotel Investment, Tunnel Avenue Se10",
        "updated_in_days": 2,
        "updated_in_days_formatted": "first seen 2 days ago"
      },
      {
        "bathroom_number": 2,
        "bedroom_number": 2,
        "car_spaces": 0,
        "commission": 0,
        "construction_year": 0,
        "datasource_name": "The House Shop",
        "img_height": 233,
        "img_url": "http://imgs.nestimg.com/flat_blackwall_3460112475836344511.jpg",
        "img_width": 310,
        "keywords": "Garden, Porter",
        "latitude": 51.505738,
        "lister_name": "Hamptons",
        "lister_url": "http://www.nestoria.co.uk/detail/0000003460112475836344511/title/5/1-6?serpUid=&pt=1&ot=1&l=london&did=71_default&utm_source=api&utm_medium=external",
        "listing_type": "buy",
        "location_accuracy": 10,
        "longitude": -0.005167,
        "price": 749000,
        "price_currency": "£",
        "price_formatted": "£749,000",
        "price_high": 749000,
        "price_low": 749000,
        "price_type": "fixed",
        "property_type": "flat",
        "size": 0,
        "size_type": "net",
        "summary": "This luxury apartment offers two bedrooms, two bathrooms and approx...",
        "thumb_height": 60,
        "thumb_url": "http://imgs.nestimg.com/medium/flat_blackwall_3460112475836344511.jpg",
        "thumb_width": 80,
        "title": "Providence Tower London - Garden",
        "updated_in_days": 4,
        "updated_in_days_formatted": "first seen 4 days ago"
      },
      {
        "bathroom_number": 0,
        "bedroom_number": 7,
        "car_spaces": 0,
        "commission": 0,
        "construction_year": 0,
        "datasource_name": "NetHousePrices",
        "img_height": 300,
        "img_url": "http://imgs.nestimg.com/flat_3320035457637504489.jpg",
        "img_width": 400,
        "keywords": "Garden, Terrace",
        "latitude": 51.49791,
        "lister_name": "Foxtons",
        "lister_url": "http://www.nestoria.co.uk/detail/0000003320035457637504489/title/5/1-7?serpUid=&pt=1&ot=1&l=london&did=90_high1&utm_source=api&utm_medium=external",
        "listing_type": "buy",
        "location_accuracy": 9,
        "longitude": -0.1041828,
        "price": 2000000,
        "price_currency": "£",
        "price_formatted": "£2,000,000",
        "price_high": 2000000,
        "price_low": 2000000,
        "price_type": "fixed",
        "property_type": "flat",
        "size": 0,
        "size_type": "net",
        "summary": "Enviably located on london road, this grand seven bedroom house set...",
        "thumb_height": 60,
        "thumb_url": "http://imgs.nestimg.com/medium/flat_3320035457637504489.jpg",
        "thumb_width": 80,
        "title": "London Road Se1 - Terrace, Garden",
        "updated_in_days": 68,
        "updated_in_days_formatted": "first seen over a month ago"
      },
      {
        "bathroom_number": 1,
        "bedroom_number": 2,
        "car_spaces": 0,
        "commission": 0,
        "construction_year": 0,
        "datasource_name": "Zoopla",
        "img_height": 255,
        "img_url": "http://imgs.nestimg.com/flat_mitcham_3260006475054732648.jpg",
        "img_width": 340,
        "keywords": "Refurbished, Kitchen",
        "latitude": 51.39884,
        "lister_name": "Get Me Moved Property",
        "lister_url": "http://www.nestoria.co.uk/detail/0000003260006475054732648/title/5/1-8?serpUid=&pt=1&ot=1&l=london&did=57_default&utm_source=api&utm_medium=external",
        "listing_type": "buy",
        "location_accuracy": 9,
        "longitude": -0.172403,
        "price": 272999,
        "price_currency": "£",
        "price_formatted": "£272,999",
        "price_high": 272999,
        "price_low": 272999,
        "price_type": "fixed",
        "property_type": "flat",
        "size": 0,
        "size_type": "net",
        "summary": "Get me moved offer ly priced properties from motivated vendors all ...",
        "thumb_height": 60,
        "thumb_url": "http://imgs.nestimg.com/medium/flat_mitcham_3260006475054732648.jpg",
        "thumb_width": 80,
        "title": "London Road, Mitcham Cr4",
        "updated_in_days": 4,
        "updated_in_days_formatted": "first seen 4 days ago"
      },
      {
        "bathroom_number": 1,
        "bedroom_number": 1,
        "car_spaces": 0,
        "commission": 0,
        "construction_year": 0,
        "datasource_name": "Zoopla",
        "img_height": 255,
        "img_url": "http://imgs.nestimg.com/maisonette_5080009475745503722.jpg",
        "img_width": 340,
        "keywords": "Kitchen, Reception",
        "latitude": 51.552807,
        "lister_name": "Steptons",
        "lister_url": "http://www.nestoria.co.uk/detail/0000005080009475745503722/title/5/1-9?serpUid=&pt=1&ot=1&l=london&did=57_default&utm_source=api&utm_medium=external",
        "listing_type": "buy",
        "location_accuracy": 9,
        "longitude": 0.063982,
        "price": 230000,
        "price_currency": "£",
        "price_formatted": "£230,000",
        "price_high": 230000,
        "price_low": 230000,
        "price_type": "fixed",
        "property_type": "house",
        "size": 0,
        "size_type": "net",
        "summary": "Detailed deionlooking for a one bed flat but finding prices have ro...",
        "thumb_height": 60,
        "thumb_url": "http://imgs.nestimg.com/medium/maisonette_5080009475745503722.jpg",
        "thumb_width": 80,
        "title": "House for sale, London E12",
        "updated_in_days": 5,
        "updated_in_days_formatted": "first seen 5 days ago"
      },
      {
        "bathroom_number": 3,
        "bedroom_number": 3,
        "car_spaces": 0,
        "commission": 0,
        "construction_year": 0,
        "datasource_name": "PrimeLocation",
        "floor": 2,
        "img_height": 255,
        "img_url": "http://imgs.nestimg.com/flat_london_3910122472980108798.jpg",
        "img_width": 340,
        "keywords": "En suite, Penthouse, Terrace, Kitchen, Reception, Georgian",
        "latitude": 51.51817,
        "lister_name": "Hamptons",
        "lister_url": "http://www.nestoria.co.uk/detail/0000003910122472980108798/title/5/1-10?serpUid=&pt=1&ot=1&l=london&did=69_high1&utm_source=api&utm_medium=external",
        "listing_type": "buy",
        "location_accuracy": 9,
        "longitude": -0.078178,
        "price": 1600000,
        "price_currency": "£",
        "price_formatted": "£1,600,000",
        "price_high": 1600000,
        "price_low": 1600000,
        "price_type": "fixed",
        "property_type": "flat",
        "size": 0,
        "size_type": "net",
        "summary": "A penthouse apartment set on the second and third floors of a ly co...",
        "thumb_height": 60,
        "thumb_url": "http://imgs.nestimg.com/medium/flat_london_3910122472980108798.jpg",
        "thumb_width": 80,
        "title": "Widegate Street, City Of London E1",
        "updated_in_days": 7,
        "updated_in_days_formatted": "first seen last week"
      },
      {
        "bathroom_number": 0,
        "bedroom_number": 2,
        "car_spaces": 0,
        "commission": 0,
        "construction_year": 0,
        "datasource_name": "Zoopla",
        "img_height": 255,
        "img_url": "http://imgs.nestimg.com/flat_croydon_9070007470827359730.jpg",
        "img_width": 340,
        "keywords": "Leasehold, En suite, Terrace, Balcony, Kitchen, Parking",
        "latitude": 51.385563,
        "lister_name": "Barnard Marcus",
        "lister_url": "http://www.nestoria.co.uk/detail/0000009070007470827359730/title/5/1-11?serpUid=&pt=1&ot=1&l=london&did=57_default&utm_source=api&utm_medium=external",
        "listing_type": "buy",
        "location_accuracy": 9,
        "longitude": -0.109623,
        "price": 290000,
        "price_currency": "£",
        "price_formatted": "£290,000",
        "price_high": 290000,
        "price_low": 290000,
        "price_type": "fixed",
        "property_type": "flat",
        "size": 0,
        "size_type": "net",
        "summary": "Autumn sale a neutrally decorated apartment, forming part of a deve...",
        "thumb_height": 60,
        "thumb_url": "http://imgs.nestimg.com/medium/flat_croydon_9070007470827359730.jpg",
        "thumb_width": 80,
        "title": "London Road, Croydon Cr0 - Balcony",
        "updated_in_days": 5,
        "updated_in_days_formatted": "first seen 5 days ago"
      },
      {
        "bathroom_number": 1,
        "bedroom_number": 1,
        "car_spaces": 0,
        "commission": 0,
        "construction_year": 0,
        "datasource_name": "SmartNewHomes",
        "img_height": 255,
        "img_url": "http://imgs.nestimg.com/flat_london_3000054476000805815.jpg",
        "img_width": 340,
        "keywords": "",
        "latitude": 51.49069,
        "lister_name": "Rw Invest",
        "lister_url": "http://www.nestoria.co.uk/detail/0000003000054476000805815/title/5/1-12?serpUid=&pt=1&ot=1&l=london&did=39_default&utm_source=api&utm_medium=external",
        "listing_type": "buy",
        "location_accuracy": 9,
        "longitude": 0.009172,
        "price": 169995,
        "price_currency": "£",
        "price_formatted": "£169,995",
        "price_high": 169995,
        "price_low": 169995,
        "price_type": "fixed",
        "property_type": "flat",
        "size": 0,
        "size_type": "net",
        "summary": "Why ibis styles greenwich peninsula hotel for investment purposes n...",
        "thumb_height": 60,
        "thumb_url": "http://imgs.nestimg.com/medium/flat_london_3000054476000805815.jpg",
        "thumb_width": 80,
        "title": "London Hotel Investment, Tunnel Avenue Se10",
        "updated_in_days": 2,
        "updated_in_days_formatted": "first seen 2 days ago"
      },
      {
        "bathroom_number": 0,
        "bedroom_number": 2,
        "car_spaces": 0,
        "commission": 0,
        "construction_year": 0,
        "datasource_name": "OnTheMarket.com",
        "floor": 0,
        "img_height": 300,
        "img_url": "http://imgs.nestimg.com/2_bedroom_flat_3740117474019957843.jpg",
        "img_width": 400,
        "keywords": "Freehold, Garden, Conversion, Victorian, Kitchen, Cellar",
        "latitude": 51.4463,
        "lister_name": "Acorn",
        "lister_url": "http://www.nestoria.co.uk/detail/0000003740117474019957843/title/5/1-13?serpUid=&pt=1&ot=1&l=london&did=105_low1&utm_source=api&utm_medium=external",
        "listing_type": "buy",
        "location_accuracy": 9,
        "longitude": -0.013994,
        "price": 395000,
        "price_currency": "£",
        "price_formatted": "£395,000",
        "price_high": 395000,
        "price_low": 395000,
        "price_type": "fixed",
        "property_type": "flat",
        "size": 0,
        "size_type": "net",
        "summary": "This two bedroom ground floor victorian conversion flat offers just...",
        "thumb_height": 60,
        "thumb_url": "http://imgs.nestimg.com/medium/2_bedroom_flat_3740117474019957843.jpg",
        "thumb_width": 80,
        "title": "Ringstead Road London Se6 - Freehold",
        "updated_in_days": 3,
        "updated_in_days_formatted": "first seen 3 days ago"
      },
      {
        "bathroom_number": 0,
        "bedroom_number": 5,
        "car_spaces": 0,
        "commission": 0,
        "construction_year": 0,
        "datasource_name": "Zoopla",
        "img_height": 255,
        "img_url": "http://imgs.nestimg.com/terraced_twickenham_8860008475661702985.jpg",
        "img_width": 340,
        "keywords": "Garden, Fireplace, High Ceilings, Refurbished, Kitchen, Reception, Edwardian, Modern",
        "latitude": 51.45163,
        "lister_name": "Gascoigne Pees",
        "lister_url": "http://www.nestoria.co.uk/detail/0000008860008475661702985/title/5/1-14?serpUid=&pt=1&ot=1&l=london&did=57_default&utm_source=api&utm_medium=external",
        "listing_type": "buy",
        "location_accuracy": 9,
        "longitude": -0.331076,
        "price": 1250000,
        "price_currency": "£",
        "price_formatted": "£1,250,000",
        "price_high": 1250000,
        "price_low": 1250000,
        "price_type": "fixed",
        "property_type": "house",
        "size": 0,
        "size_type": "net",
        "summary": "A ly refurbished edwardian house boasting 5 double bedrooms, high c...",
        "thumb_height": 60,
        "thumb_url": "http://imgs.nestimg.com/medium/terraced_twickenham_8860008475661702985.jpg",
        "thumb_width": 80,
        "title": "London Road, Twickenham Tw1 - Modern",
        "updated_in_days": 6,
        "updated_in_days_formatted": "first seen 6 days ago"
      },
      {
        "bathroom_number": 1,
        "bedroom_number": 3,
        "car_spaces": 0,
        "commission": 0,
        "construction_year": 0,
        "datasource_name": "PrimeLocation",
        "img_height": 255,
        "img_url": "http://imgs.nestimg.com/flat_wembley_9050126475581542123.jpg",
        "img_width": 340,
        "keywords": "Share of Freehold, Garden, Refurbished, Kitchen, Dishwasher, Parking, Reception, Modern",
        "latitude": 51.55004,
        "lister_name": "Portland",
        "lister_url": "http://www.nestoria.co.uk/detail/0000009050126475581542123/title/5/1-15?serpUid=&pt=1&ot=1&l=london&did=69_high1&utm_source=api&utm_medium=external",
        "listing_type": "buy",
        "location_accuracy": 9,
        "longitude": -0.292253,
        "price": 399950,
        "price_currency": "£",
        "price_formatted": "£399,950",
        "price_high": 399950,
        "price_low": 399950,
        "price_type": "fixed",
        "property_type": "flat",
        "size": 0,
        "size_type": "net",
        "summary": "Detailed deionrefurbished three bedroom duplex flat this property c...",
        "thumb_height": 60,
        "thumb_url": "http://imgs.nestimg.com/medium/flat_wembley_9050126475581542123.jpg",
        "thumb_width": 80,
        "title": "London Road, Wembley Ha9 - Modern",
        "updated_in_days": 7,
        "updated_in_days_formatted": "first seen last week"
      },
      {
        "bathroom_number": 2,
        "bedroom_number": 3,
        "car_spaces": 0,
        "commission": 0,
        "construction_year": 0,
        "datasource_name": "The House Shop",
        "img_height": 233,
        "img_url": "http://imgs.nestimg.com/flat_blackwall_3440112475836344489.jpg",
        "img_width": 310,
        "keywords": "Garden, Porter",
        "latitude": 51.505738,
        "lister_name": "Hamptons",
        "lister_url": "http://www.nestoria.co.uk/detail/0000003440112475836344489/title/5/1-16?serpUid=&pt=1&ot=1&l=london&did=71_default&utm_source=api&utm_medium=external",
        "listing_type": "buy",
        "location_accuracy": 10,
        "longitude": -0.005167,
        "price": 1139000,
        "price_currency": "£",
        "price_formatted": "£1,139,000",
        "price_high": 1139000,
        "price_low": 1139000,
        "price_type": "fixed",
        "property_type": "flat",
        "size": 0,
        "size_type": "net",
        "summary": "This luxury off plan residence situated in the providence tower dev...",
        "thumb_height": 60,
        "thumb_url": "http://imgs.nestimg.com/medium/flat_blackwall_3440112475836344489.jpg",
        "thumb_width": 80,
        "title": "G. Providence Tower London - Porter",
        "updated_in_days": 4,
        "updated_in_days_formatted": "first seen 4 days ago"
      },
      {
        "bathroom_number": 0,
        "bedroom_number": 1,
        "car_spaces": 0,
        "commission": 0,
        "construction_year": 0,
        "datasource_name": "Zoopla",
        "floor": 0,
        "img_height": 182,
        "img_url": "http://imgs.nestimg.com/flat_mitcham_7310008463212061826.jpg",
        "img_width": 242,
        "keywords": "Garden, Refurbished",
        "latitude": 51.417458,
        "lister_name": "Foxtons",
        "lister_url": "http://www.nestoria.co.uk/detail/0000007310008463212061826/title/5/1-17?serpUid=&pt=1&ot=1&l=london&did=57_default&utm_source=api&utm_medium=external",
        "listing_type": "buy",
        "location_accuracy": 9,
        "longitude": -0.162211,
        "price": 355000,
        "price_currency": "£",
        "price_formatted": "£355,000",
        "price_high": 355000,
        "price_low": 355000,
        "price_type": "fixed",
        "property_type": "flat",
        "size": 0,
        "size_type": "net",
        "summary": "Newly refurbished to a standard and benefiting from a private court...",
        "thumb_height": 60,
        "thumb_url": "http://imgs.nestimg.com/medium/flat_mitcham_7310008463212061826.jpg",
        "thumb_width": 80,
        "title": "London Road, Tooting Cr4 - Garden",
        "updated_in_days": 7,
        "updated_in_days_formatted": "first seen last week"
      },
      {
        "bathroom_number": 1,
        "bedroom_number": 0,
        "car_spaces": 0,
        "commission": 0,
        "construction_year": 0,
        "datasource_name": "Zoopla",
        "img_height": 251,
        "img_url": "http://imgs.nestimg.com/studio_enfield_3650010475579910911.jpg",
        "img_width": 334,
        "keywords": "Kitchen, Parking",
        "latitude": 51.64735,
        "lister_name": "Peter Barry",
        "lister_url": "http://www.nestoria.co.uk/detail/0000003650010475579910911/title/5/1-18?serpUid=&pt=1&ot=1&l=london&did=57_default&utm_source=api&utm_medium=external",
        "listing_type": "buy",
        "location_accuracy": 9,
        "longitude": -0.079976,
        "price": 220000,
        "price_currency": "£",
        "price_formatted": "£220,000",
        "price_high": 220000,
        "price_low": 220000,
        "price_type": "fixed",
        "property_type": "flat",
        "size": 0,
        "size_type": "net",
        "summary": "Peter barry are studio apartment, perfect for a professional commut...",
        "thumb_height": 60,
        "thumb_url": "http://imgs.nestimg.com/medium/studio_enfield_3650010475579910911.jpg",
        "thumb_width": 80,
        "title": "London Road, Enfield En2",
        "updated_in_days": 7,
        "updated_in_days_formatted": "first seen last week"
      },
      {
        "bathroom_number": 0,
        "bedroom_number": 2,
        "car_spaces": 0,
        "commission": 0,
        "construction_year": 0,
        "datasource_name": "OnTheMarket.com",
        "floor": 1,
        "img_height": 300,
        "img_url": "http://imgs.nestimg.com/2_bedroom_apartment_8960119474543966990.jpg",
        "img_width": 400,
        "keywords": "Leasehold, High Ceilings, Kitchen, Reception",
        "latitude": 51.515,
        "lister_name": "Sterling",
        "lister_url": "http://www.nestoria.co.uk/detail/0000008960119474543966990/title/5/1-19?serpUid=&pt=1&ot=1&l=london&did=105_high1&utm_source=api&utm_medium=external",
        "listing_type": "buy",
        "location_accuracy": 9,
        "longitude": -0.163409,
        "price": 300000,
        "price_currency": "£",
        "price_formatted": "£300,000",
        "price_high": 300000,
        "price_low": 300000,
        "price_type": "fixed",
        "property_type": "flat",
        "size": 0,
        "size_type": "net",
        "summary": "Sale of a two bedroom apartment on the first floor of this period b...",
        "thumb_height": 60,
        "thumb_url": "http://imgs.nestimg.com/medium/2_bedroom_apartment_8960119474543966990.jpg",
        "thumb_width": 80,
        "title": "Connaught Street London - Reception",
        "updated_in_days": 4,
        "updated_in_days_formatted": "first seen 4 days ago"
      },
      {
        "bathroom_number": 0,
        "bedroom_number": 2,
        "car_spaces": 0,
        "commission": 0,
        "construction_year": 0,
        "datasource_name": "The House Shop",
        "floor": 6,
        "img_height": 300,
        "img_url": "http://imgs.nestimg.com/flat_barbican_4820111474890881691.jpg",
        "img_width": 400,
        "keywords": "Grade II, Conservatory, Kitchen, Listed, Modern",
        "latitude": 51.52044,
        "lister_name": "Hamptons",
        "lister_url": "http://www.nestoria.co.uk/detail/0000004820111474890881691/title/5/1-20?serpUid=&pt=1&ot=1&l=london&did=71_default&utm_source=api&utm_medium=external",
        "listing_type": "buy",
        "location_accuracy": 7,
        "longitude": -0.097675,
        "price": 955000,
        "price_currency": "£",
        "price_formatted": "£955,000",
        "price_high": 955000,
        "price_low": 955000,
        "price_type": "fixed",
        "property_type": "flat",
        "size": 0,
        "size_type": "net",
        "summary": "A large two bedroom apartment positioned on the sixth floor at blak...",
        "thumb_height": 60,
        "thumb_url": "http://imgs.nestimg.com/medium/flat_barbican_4820111474890881691.jpg",
        "thumb_width": 80,
        "title": "Flat for sale, Fann St London",
        "updated_in_days": 15,
        "updated_in_days_formatted": "first seen 2 weeks ago"
      }]
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.guid !== r2.guid});
    this.state = {
      dataSource: dataSource.cloneWithRows(listings)
    };
    console.log(this.props.params.query);
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight
          underlayColor='#dddddd'>
        <View>
          <Text>{rowData.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}/>
    );
  }
}

SearchResults.contextTypes = {
  router: React.PropTypes.object
};
