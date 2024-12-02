import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ImageBackground 
      source={{ uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/38917b49-103f-4ff8-8e6b-a1adefff3a94/di75csx-314f5db4-8788-4ecd-871b-68b199708e5e.png/v1/fill/w_1280,h_775,q_80,strp/dandadan___wallpaper_by_michiruyami_di75csx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Nzc1IiwicGF0aCI6IlwvZlwvMzg5MTdiNDktMTAzZi00ZmY4LThlNmItYTFhZGVmZmYzYTk0XC9kaTc1Y3N4LTMxNGY1ZGI0LTg3ODgtNGVjZC04NzFiLTY4YjE5OTcwOGU1ZS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Qmk8BHC5wJidT3O4IAapK2qYi_H8i7av2kVjUS3eSWE' }} 
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.welcomeText}>Bem-vindo ao Dandadan!</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'green', // Fundo semi-transparente para melhor contraste
    padding: 20,
    borderRadius: 10,
  },
  welcomeText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
