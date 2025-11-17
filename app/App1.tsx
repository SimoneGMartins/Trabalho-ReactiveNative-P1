

import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import discordicon from "../assets/duolingo.png";
import { styles } from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={discordicon} style={styles.image} />
      
      <Text style={styles.texto}>Você voltou, Simone! Que bom ver você de novo</Text>
      
         
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}>VAMOS LÁ</Text>
      </TouchableOpacity>
      
               
    </View>
  );
}
