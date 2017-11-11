import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation'

{/*First Screen*/}
class HomeScreen extends React.Component{
  static navigationOptions = {
    title: 'Events!',
    headerTintColor: 'blue'
  };
  render(){
    const { navigate } = this.props.navigation;
    return (
      <FlatList
      data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'},
    {key: 'f'}, {key: 'g'}, {key: 'h'}, {key: 'i'}, {key: 'j'}, {key: 'k'},
    {key: 'l'}, {key: 'm'}, {key: 'n'}, {key: 'o'}, {key: 'p'}, {key: 'q'},
    {key: 'r'}, {key: 's'}, {key: 't'}, {key: 'u'}, {key: 'v'}, {key: 'w'},
    {key: 'x'}, {key: 'y'}, {key: 'z'}]}
    renderItem = {({item}) =>
    <Button
      color= 'rgba(52, 52, 52, 1.0)'
      title={item.key}
      onPress={() => navigate('Other', { letter: item.key})}
    />
    }
    />
    );
  }
}

{/*Destination Screen*/}
class OtherScreen extends React.Component {
   static navigationOptions = ({ navigation }) => ({
    headerTintColor: '#FFA500',
    /*headerRight: <Button title="INFO" />,*/
    title: `Event Information for ${navigation.state.params.letter} `
  });
  render(){
    const { params } = this.props.navigation.state;
    return(
      <Text> Event {params.letter} {"\n"} Time: 10pm {"\n"} Location: Whatever </Text>
    );
  }
}

{/*Stack of possible screens(look into making it a dynamic creation?)*/}
export const SectionListNavigation = StackNavigator({
  Home: {screen: HomeScreen},
  Other: {screen: OtherScreen},
});

{/*Main*/}
export default class App extends React.Component {
  render() {
    return <SectionListNavigation />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 50,
    height: 44,
  },
});