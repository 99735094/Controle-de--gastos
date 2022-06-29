import React, { useEffect, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getRealm } from '../../Realm';

export default function Balance({ saldo, gastos }) {


  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.simbolo}>R$</Text>
          <Text style={styles.balance}>{saldo}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.simbolo}>R$</Text>
          <Text style={styles.gastos}>{gastos}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 360,
    marginStart: 16,
    marginEnd: 16,
    marginTop: -50,
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 22,
    paddingTop: 22,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    zIndex: 100,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#dadada',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  simbolo: {
    color: '#dadada',
    marginRight: 6,
  },
  balance: {
    fontSize: 22,
    color: '#2ecc71',
  },
  gastos: {
    fontSize: 22,
    color: '#e74c3c',
  }
})
