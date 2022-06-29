import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';

import { getRealm } from '../../Realm';

export default function Movimentos({ data }) {

    const [valores, setValores] = useState(false);
    const [total, setTotal] = useState([ ]);
    const [array, setArray] = useState([ ]);



    //apagar dados
    async function apagar() {
        const realm = await getRealm();
        try {
            realm.write(() => {
                const task = realm.objectForPrimaryKey("Order", data._id);
                // data._id e o id do item individualmente a ser deletado
                realm.delete(task);

                //task = null;
            });
        } catch (erro) {
            //console.log(erro);
            Alert.alert('DELETAR', 'Algo deu errado');
            realm.close();
        } finally {
            Alert.alert('DELETAR', 'Deletado com sucesso');

        }

    }
    function banner() {
      
        setArray(data.valor)
        setTotal(...array);
        console.log(total);

    }
    useEffect(() => {
        banner()
    }, []);

    return (
        <View style={styles.container} >
            <Text style={styles.data}>{data.data}</Text>
            <Text style={styles.data2}>{data.type}</Text>
            <TouchableOpacity
                onPress={apagar}
            >
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 290 }}> Deletar </Text>

            </TouchableOpacity>
            <View style={styles.content}>
                <Text style={styles.label}>{data.label}</Text>
                <TouchableOpacity onPress={() => setValores(!valores)}>
                    {valores ? (
                        <Text style={data.type === 1 ? styles.valor : styles.retiradas}>
                            R$ {data.valor}</Text>
                    ) : (
                        <View style={styles.esconderValor}>

                        </View>
                    )}
                </TouchableOpacity>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: 380,
        marginTop: 16,
        marginBottom: 24,
        borderBottomWidth: 0.5,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginEnd: 16,
        marginBottom: 8,
    },
    data: {
        color: '#c2c2c2',
        fontWeight: 'bold',
        fontSize: 20,
    },
    data2: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20,
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
    esconderValor: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#dadada',
        borderRadius: 8,
    }
})