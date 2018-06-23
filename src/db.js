const mongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/ExpressApp';


const getConnection = (url) => {
    return new Promise((resolve, reject) => {
        mongoClient.connect(url, (error, client) => {
            (error === null) ? resolve({
                'message': 'Connected',
                'client': client,
            }):
            resolve({
                'message': 'Failed to connect',
                'client': null,
            });
        });
    });
};


const getDB = async (url) => {
    let client = await getConnection(url);
    return client['client'];
};


const getCollection = (client) => (collection) =>
client.db('DB').collection(collection);


const insertData = (collection, client) => (data) => {
    return new Promise((resolve, reject) => {
        collection.insertMany(data, (error, result) => {
            client.close();
            (error === null) ? resolve('Inserted') :
                resolve('Failed to insert');
        });
    });
};


module.exports = {
    'getConnection': getConnection(url),
    'insertData': insertData,
    'getCollection': getCollection,
    'getDB': getDB,
};
