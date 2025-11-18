

import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import discordicon from "../assets/duolingo.png";
import { styles } from "./styles1";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={discordicon} style={styles.image} />
      <TextInput placeholder= "Qual seu email?"
           style={styles.input}
      />
             
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}>VAMOS LÁ</Text>
      </TouchableOpacity>
      
               
    </View>
  );
}
