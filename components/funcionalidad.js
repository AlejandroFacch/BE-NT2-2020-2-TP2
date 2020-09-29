import React, { Component, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, Image, View, Button, Alert, TouchableOpacity } from 'react-native';
import {vibrate} from '../utils';

export default function(){
    const [minutos, setMinutos] = useState(25);
    const [segundos, setSegundos] = useState(0);
    let [timerId, setTimer] = useState(0);
    let [working, setWorking] = useState(true);
    let [work, setWork] = useState(25);
    let [nap, setNap] = useState(5);
    
    if(minutos == 0 && segundos == 0){
      vibrate();
    }

    function incremento(){
      stop();
      setMinutos(minutos + 1)
      if(working){
        setWork(minutos +1)
      }else{
        setNap(minutos+1)
      }
    }


    function decremento(){
      stop()
      if(minutos>1){
        setMinutos(minutos -1)
        if(working){
          setWork(minutos-1)
        }else{
          setNap(minutos-1)
        }
      }
    }


    function option(){
      stop()
      if(working){
        setWorking(false);
        setMinutos(nap);
        setSegundos(0);
      }else{
        setWorking(true);
        setMinutos(work);
        setSegundos(0);
      }
    }


    function start(){    
        let segs = segundos;
        let mins = minutos;
        setTimer(timerId= setInterval(() =>{
          if(segs != 0){
            segs = segs -1;
            setSegundos(segs);
          }else if(mins == 0){
            clearInterval(timerId);
            if(working){
              setWorking(false);
              setMinutos(nap);
            }else{
              setWorking(true);
              setMinutos(work)
            }
          }else{
            segs = 59;
            setSegundos(segs);
            if(mins != 0){
              mins = mins -1;
              setMinutos(mins);
            }
          }
        }, 1000 )); 
    }


    function stop(){
      clearInterval(timerId);
    }


    function reset(){
      clearInterval(timerId);
      setSegundos(0);
      if(working){
        setMinutos(work);
      }else{
        setMinutos(nap)
      }
    }

    
    return(
      
        <View>
            <TouchableOpacity onPress={option} style= {styles.botonOption}>
              <Text style = {styles.textoBoton}>{working ? <Text>Take a break</Text> : <Text>Let's work</Text> }</Text> 
            </TouchableOpacity>
            
            <Text style = {styles.texto}>{working ? <Text>Working time!</Text> : <Text>Nap time!</Text> }</Text>    
            
            <View style ={styles.contenedor}>
            <TouchableOpacity onPress={start} style = {styles.boton}>
              <Image
                source={{
                uri: 'https://es.seaicons.com/wp-content/uploads/2015/11/Media-Controls-Play-icon.png',
                }}
                style={{ width: 50, height: 50}}
            />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={reset} style = {styles.boton}>
              <Image
                source={{
                uri: 'https://www.iconfinder.com/data/icons/game-general-icon-set-1/512/reset-512.png',
                }}
                style={{ width: 50, height: 50}}
            />
            </TouchableOpacity>

            <TouchableOpacity onPress={stop} style = {styles.boton}>
              <Image
                source={{
                uri: 'https://www.iconfinder.com/data/icons/ionicons/512/icon-pause-512.png',
                }}
                style={{ width: 50, height: 50}}
            />
            </TouchableOpacity>
            </View>

            <View style ={styles.contenedor}>
            <TouchableOpacity onPress={incremento} style = {styles.boton}>
              <Image
                source={{
                uri: 'http://pngimg.com/uploads/plus/plus_PNG115.png',
                }}
                style={{ width: 50, height: 50, marginRight:20}}
            />
              
            </TouchableOpacity>

            <Text  style= {[styles.textoReloj]}>
              {minutos<10 ? <Text>0{minutos}</Text> : <Text>{minutos}</Text> }
              {segundos<10 ? <Text>:0{segundos}</Text> : <Text>:{segundos}</Text> }
            </Text> 

            <TouchableOpacity onPress={decremento} style = {styles.boton}>
              <Image
                source={{
                uri: 'https://pngimg.com/uploads/minus/minus_PNG35.png',
                }}
                style={{ width: 38, height: 38, marginTop: 7, marginLeft: 20}}
            />
            </TouchableOpacity> 
            </View>
        </View>
    )

  }

  const styles = StyleSheet.create({
    texto: {
        marginTop: 10,
        fontSize: 30,
        color:'black',
        fontWeight: 'bold',
        marginBottom: 10 ,
        marginLeft: "auto",
        marginRight: "auto"
    },

    textoReloj: {
      marginTop: 1,
      fontSize: 50,
      color:'black',
      fontWeight: 'bold',
      marginBottom: 50 ,
      marginLeft: "auto",
      marginRight: "auto"
    },

    textoBoton: {
      marginTop: 20,
      fontSize: 20,
      color:'black',
      marginBottom: 20 ,
      marginLeft: "auto",
      marginRight: "auto"
    },

    boton: {
      alignItems: "center",
      backgroundColor:"white",
      padding: 15,
      marginBottom: 10,
      width: 50,
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: 20,
    },

    botonOption: {
      alignItems: "center",
      backgroundColor:"#daa520",
      padding: 1,
      marginBottom: 10,
      width: 250,
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: 20,
    },

    contenedor: {
      flexDirection: "row",
    }
  })

