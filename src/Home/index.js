import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import Balance from '../Componentes/Balance';
//import Movimentos from '../Componentes/Movimentos';
import Header from '../Header';
import Input from '../Componentes/Input';

console.disableYellowBox = true;


export default function Home() {
  return (
    <View style={styles.container}>
      <Header name='Meus Gastos' />


      <Input />

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginRight: 14,
    marginTop: 4,
  },
  list: {
    marginStart: 14,
    marginStart: 14,
  }
})
