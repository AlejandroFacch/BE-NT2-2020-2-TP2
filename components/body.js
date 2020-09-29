import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, Image, View, Button } from 'react-native';
import Funcionalidad from './funcionalidad.js';

export default function(){
    
  
    return(
        <View>
            <Image
                source={{
                uri: 'https://www.vippng.com/png/detail/463-4633009_darin-reloj-vintage-de-pared-de-mdf-clock.png',
                }}
                style={{ width:200, height: 200, marginBottom: 40, marginLeft: "auto", marginRight: "auto"}}
            />
            <Funcionalidad/>
        </View>
        
    )


  }