import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, Image, View, Button } from 'react-native';

export default function(){
    
  
    return(
        <Text style={[styles.titulo]}>Pomodoro Clock</Text>
    )


  }

  const styles = StyleSheet.create({
    
    titulo: {
      fontSize: 40,
      color:'black',
      fontWeight: 'bold',
      marginBottom: 10,
      marginTop: 1
    },
  
  })