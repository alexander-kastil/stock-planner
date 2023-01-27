import { AzureFunction, Context } from '@azure/functions';

const queueTrigger: AzureFunction = async function (context: Context, RateItem: string): Promise<void> {
    context.log('Queue trigger function processed work item', RateItem);

    TODO: Get to work using https://github.com/tediousjs/node-mssql#configuration
    var Connection = require('tedious').Connection;

    const sqlConfig = {
        server: 'localhost',
        authentication: {
            type: 'default',
            options: {
                user: process.env.DBUser,
                password: process.env.DBPassword,
            },
        },
        options: {
            database: process.env.Database,
            trustServerCertificate: true, // change to true for local dev / self-signed certs
        },
    };

    var connection = new Connection(sqlConfig);
    connection.on('connect', function (err) {
        // If no error, then good to proceed.
        console.log('Connected');
        executeStatement();
    });

    await connection.connect();

    var request = require('tedious').Request;
    var TYPES = require('tedious').TYPES;

    function executeStatement() {
        request = new Request('SELECT * from MinedAssets;');
        var result = '';
        request.on('row', function (columns) {
            columns.forEach(function (column) {
                if (column.value === null) {
                    console.log('NULL');
                } else {
                    result += column.value + ' ';
                }
            });
            console.log(result);
            result = '';
        });

        request.on('done', function (rowCount, more) {
            console.log(rowCount + ' rows returned');
        });

        // Close the connection after the final event emitted by the crequest, after the callback passes
        request.on('requestCompleted', function (rowCount, more) {
            connection.close();
        });
        connection.execSql(request);
    }
};

export default queueTrigger;
