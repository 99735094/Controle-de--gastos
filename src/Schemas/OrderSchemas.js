export const OrderSchemas = {
   name: "Order",
   
   properties: {
    _id:"string",
    label: 'string',
    valor: 'string',
    data: 'string',
    type: 'string',
   },
   primaryKey: '_id',
}