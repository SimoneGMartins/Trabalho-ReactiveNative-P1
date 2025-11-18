
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import discordicon from "../assets/discord.png";
import { styles } from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={discordicon} style={styles.image} />
      
      <Text style={styles.texto}>BEM-VINDO(OU VINDA) AO DISCORD</Text>
      
      <Text style={styles.subtitulo}>
        Relaxe, jogue jogos ou apenas converse. Toque abaixo para começar!
      </Text>
      
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}>Registre-se</Text>
      </TouchableOpacity>
      
    
      <TouchableOpacity style={styles.buttonSubtitle}>
        <Text style={styles.buttonSubtitleText}>Entrar</Text>
      </TouchableOpacity>
      
    </View>
  )
}