
import React, { Component } from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Various icon libraries to represent categories
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Entypo';

export default class App extends Component<{}> {

  render() {
    const ICON_SIZE = 70;
    return (
      <View style={styles.container}>
        {/* Academics, Sports, Arts */}
        <View style={styles.innerContainer}>
          <Icon 
            style={styles.elementRight} 
            name="book" 
            size={ICON_SIZE} 
            color='#db7106' 
          />
          <Icon 
            style={styles.elementRight} 
            name="futbol-o" 
            size={ICON_SIZE} 
            color='#c1701d' 
          />
          <Icon 
            name="music" 
            size={ICON_SIZE} 
            color='#a86f35' 
          />
        </View>

        {/* Greek Life, Student-Run, Volunteering */}
        <View style={styles.innerContainer}>
          <Icon2 
            style={styles.elementRight} 
            name="omega" 
            size={ICON_SIZE} 
            color='#8f6e4d' 
          />
          <Icon3 
            style={styles.elementRight} 
            name="megaphone" 
            size={ICON_SIZE} 
            color='#766d65' 
          />
          <Icon3 
            name="hand" 
            size={ICON_SIZE} 
            color='#5d6c7c' 
          />
        </View>

        {/* Career, Entertainment, Miscellaneous */}
        <View style={styles.innerContainer}>
          <Icon 
            style={styles.elementRight} 
            name="briefcase" 
            size={ICON_SIZE} 
            color='#446b94' />
          <Icon2 
            style={styles.elementRight} 
            name="popcorn" 
            size={ICON_SIZE} 
            color='#2b6aac' 
          />
          <Icon 
            name="question-circle-o" 
            size={ICON_SIZE} 
            color='#126ac4' 
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 120,
    paddingBottom: 120
  },

  innerContainer: {
    flex: 1,
    flexDirection: 'row'
  },

  elementRight: {
    marginRight: 40
  }
});
