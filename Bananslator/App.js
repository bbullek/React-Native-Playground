/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  Dimensions
} from 'react-native';

/**************************** Globals *****************************/

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

/******************** React Native components *********************/

/**
 * Component that renders text with custom contents and font size.
 */
class Textbox extends Component {
  render() {
    let size = parseInt(this.props.size);
    return (
      <Text style={styles.prettyText, {fontSize: size}}>{this.props.name}</Text>
    );
  }
}

/**
 * Component that animates text with a "blink" effect, periodically
 * hiding and revealing it.
 */
class BlinkingTextbox extends Textbox {
  constructor(props) {
    super(props);
    this.state = {showText: true};
    this.delay = 1000; // 1000 ms (1 second) between blinks

    // Toggle the state every second
    setInterval(() => {
      // When setState is called, BlinkingTextbox will call render() again
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, this.delay);
  }

  render() {
    let display = this.state.showText;

    if (display) {
      return super.render(); // Call Textbox's render() function
    } else {
      return (<Textbox name=" " size={this.props.size} />);
    }
  }
}

/**
 * Component that renders a colored rectangle.
 */
class Rectangle extends Component {
  render() {
    { /* Rectangle CSS attributes */}
    return (
      <View style={{
        flex: parseInt(this.props.size),
        width: width,
        height: height * this.props.pctHeight,
        backgroundColor: this.props.color
      }} />
    );
  }
}

/**
 * Component that converts user-entered words into banana emojis in 
 * real time.
 */
class BananaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''}; // Text entry is a state that can change
  }

  render() {
    return (
      <View style={{padding: 30}}>
        <TextInput 
          style={styles.translator}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍌').join(' ')}
        </Text>
      </View>
    );
  }
}

/**
 * Main component that renders all onscreen JSX elements.
 */
export default class App extends Component {

  /**
   * Returns JSX to render within the app's viewport.
   */
  render() {
    // The URL of an image to render
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <View style={styles.container}>
        {/* Background */}
        <View style={styles.backgroundView}>
          <Rectangle size="1" color='#FFFFCC' />
          <Rectangle size="2" color='#FADA5E' />
          <Rectangle size="3" color='#DAA520' />
        </View>

        {/* Text */}
        <Textbox name="Banana Translator" size="20" />
        <BlinkingTextbox name="Type stuff below!" size="14" />

        {/* Image */}
        <Image source={pic} style={{width: 193, height: 110}} />

        {/* Text input that translates words to banana emojis */}
        <BananaTranslator />
      </View>
    );
  }
}

/***************************** CSS ********************************/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },

  prettyText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
  },

  backgroundView: {
    flex: 1, 
    position: 'absolute', 
    height: height
  },

  translator: {
    width: width / 1.2,
    textAlign: 'center'
  }
});
