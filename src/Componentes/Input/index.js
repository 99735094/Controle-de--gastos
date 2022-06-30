import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
  Modal,

} from 'react-native';
import Balance from '../Balance';

import Realm from 'realm';
import { getRealm } from '../../Realm'

import Movimentos from '../Movimentos';
import uuid from 'react-native-uuid';
import Ionicons from '@expo/vector-icons/Ionicons';

const Input = () => {

  const [label, setLabel] = useState('');
  const [valor, setValor] = useState('');
  const [data, setData] = useState('');
  const [type, setType] = useState('');

  const [balanco, setBalanco] = useState();
  const [list, setList] = useState([]);

  const [value, setValue] = useState([]);


  // Funcao cadastrar no banco
  async function guardar() {
    const realm = await getRealm();

    try {
      realm.write(() => {
        const teste = realm.create("Order", {
          _id: uuid.v4(),
          label,
          valor,
          data,
          type,
        });


      });

      Alert.alert(" Gastos ", 'Cadastrado com sucesso');
    } catch {
      Alert.alert(" Gastos ", 'Algo deu errado');
      realm.close();
    }
    finally {

    }
    banner();


  }

  // Funcao pegar no banco
  async function pegarDados() {
    const realm = await getRealm();
    try {
      const response = realm.objects("Order");
      setValue(response);

    }
    catch {
      Alert.alert("Gastos", "Nao foi possivel pegar");
      realm.close();

    }

  }
  //map

  function banner() {
    setList(value);
    const soma = list.map(item => parseFloat(item.valor));
    let somatoria = 0;
    for (let item of soma) {
      somatoria += item;

    }
    console.log(somatoria);
    setBalanco(somatoria);


  }


  //apagar dados
  async function apagarDados() {
    const realm = await getRealm();
    realm.write(() => {

      realm.delete(realm.objects("Order"));
      //Order1= null;
    });
  }

  useEffect(() => {
    pegarDados();
    banner();
    

  }, [])

  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Balance saldo={balanco} gastos={balanco} />

      <TextInput
        style={styles.input}
        placeholder='Informacao'
        onChangeText={(text) => setLabel(text)}

      />
      <TextInput
        style={styles.input}
        placeholder='Valor'
        onChangeText={(text) => setValor(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder='Data'
        onChangeText={(text) => setData(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder='Observacao'
        onChangeText={(text) => setType(text)}
      />

      <TouchableOpacity
        style={styles.guardar}
        onPress={guardar}
      >
        <Text style={styles.txt} >Carregar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.guardar}
        onPress={apagarDados}>
        <Text style={styles.txt} >Apagar</Text>
      </TouchableOpacity>

      <FlatList
        data={value}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Movimentos data={item} />
        )}
      />
    </View>

  );
}

export default Input;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 150,

    alignItems: 'center',
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000',
    margin: 5,
    padding: 10,
    width: '90%',
    height: 40,
    borderRadius: 10,

  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 100,
    color: '#000'
  },

  caixa: {
    //flex:1,
    width: 350,
    marginTop: 16,
    marginBottom: 24,
    borderBottomWidth: 0.5,
  },
  data: {
    color: '#dadada',
    fontWeight: 'bold',
    fontSize: 20,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginEnd: 16,
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  valor: {
    fontSize: 20,
    color: '#2ecc71',
    fontWeight: 'bold'
  },
  retiradas: {
    fontSize: 20,
    color: '#e74c3c',
    fontWeight: 'bold'
  },
  guardar: {
    width: '90%',
    height: 50,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  txt: {
    fontSize: 20,
    color: '#fff'
  },


})