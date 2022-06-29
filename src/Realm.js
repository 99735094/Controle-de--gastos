import Realm from 'realm';
import { OrderSchemas } from './Schemas/OrderSchemas'

export const getRealm = async () => await Realm.open({
    //path  qualquer nome
    path: "gastos",
    // a tabela criada
    schema: [ OrderSchemas ]
})