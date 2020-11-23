import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BookTrans extends React.Component{
    render(){
        return(
            <View style = {styles.Trans}>
             <Text>Issued</Text>
             <Text>Returned</Text>
             </View>
        )
    }
}


const styles = StyleSheet.create({
    Trans:{
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
    }
  })