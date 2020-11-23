import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SearchScr extends React.Component{
    render(){
        return(
            <View style= {styles.Search}>
                <Text>Search Bar goes here!</Text>
                </View>
        )
    }
}

const styles = StyleSheet.create({
  Search:{
      justifyContent: 'center',
      alignItems: 'center',
      flex:1,
  }
})