import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
//import Icon from 'react-native-vector-icons/Feather';
import { Feather } from '@expo/vector-icons'

const statusbar = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ name }) {
  return (

    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.username}>{name}</Text>
        <TouchableOpacity activeOpacity={0.9} style={styles.btn}>
          <Feather name="user" size={40} color={"#fff"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#245104",
    paddingTop: statusbar,
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 40,
  },
  content: {
    //flex:1,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    paddingEnd: 16,
    paddingStart: 16,
    paddingBottom: 40,
  },
  username: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    opacity: 0.5,
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  }
})