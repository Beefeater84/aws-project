/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const S3 = new AWS.S3();
const csv = require('csv-parser');

exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const bucketName = 'awstest23dbba073d2a42158de8dc25cff0e925171846-dev';
    const fileName = '11-2023/ca.csv';

    const params = {
        Bucket: bucketName,
        Key: fileName
    };

    try {
        const s3Stream = S3.getObject(params).createReadStream();
        const results = [];

        // Использование Promise для обработки асинхронного потока
        await new Promise((resolve, reject) => {
            s3Stream.pipe(csv())
                .on('data', (data) => results.push(data))
                .on('end', () => {
                    resolve();
                })
                .on('error', reject); // Не забудьте обработать ошибки потока
        });

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            body: JSON.stringify(results),
        };

    } catch (error) {
        console.error("error", error);
        return {
            statusCode: 501,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            body: JSON.stringify("Error"),
        };
    }
};
