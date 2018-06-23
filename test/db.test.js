const {getConnection,
       insertData,
       getCollection,
       getDB} = require('../src/db');

const url = 'mongodb://localhost:27017/ExpressApp';
const collectionName = 'persons';
const data = [
    {name: 'Émerson', age: 19},
    {name: 'Eversson', age: 16},
];

describe('Test db connection', () => {
    test('Should not be null', async (done) => {
        let result = await getConnection;
        expect(result['message']).toBe('Connected');
        result['client'].close();
        done();
    });

    test('Should insert without troubles', async (done) => {
        let client = await getDB(url);
        let collection = getCollection(client)(collectionName);
        let result = await insertData(collection, client)(data);
        expect(result).toBe('Inserted');
        done();
    });
}, 1000);
