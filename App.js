import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import BookTrans from './screens/BookTrans.js';
import SearchScr from './screens/SearchScr.js';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';


export default function App() {
  return (
    <AppContainer/>
  )
}
 
const TabNavigator = createBottomTabNavigator({
  Transaction:{screen:BookTrans},
  SearchBook:{screen:SearchScr},
}, 
{defaultNavigationOptions: ({navigation})=>({
  tabBarIcon: ()=>{
    const routeName = navigation.state.routeName;
    console.log(routeName)
    if(routeName === "Transaction"){
      return(
        <Image
        source={require("./assets/book.png")}
        style={{width:35, height:35}}
      />
      )
      
    }
    else if(routeName === "SearchBook"){
      return(
        <Image
        source={require("./assets/searchingbook.png")}
        style={{width:35, height:35}}
      />)
      
    }
  }
})
}
);

const AppContainer = createAppContainer(TabNavigator);