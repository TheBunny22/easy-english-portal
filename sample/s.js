const crypto = require('crypto'); // Import the crypto module

// Define your API key and API secret
const apiKey = "8bb868b74117d7f76aa71b0997ef9d05";
const apiSecret = "03ee89706654791b9a268c4eceae30ba";

// Define the host and date as per the documentation
const host = 'tts-api-sg.xf-yun.com/v2/tts';
const date = new Date().toUTCString();

// Construct the signature origin string
const signatureOrigin = `host: ${host}\ndate: ${date}\nGET /v2/tts HTTP/1.1`;

// Create an HMAC-SHA256 hash of the signature origin using your API secret
const hmac = crypto.createHmac('sha256', apiSecret);
hmac.update(signatureOrigin);
const signatureSHA = hmac.digest('base64');

// Construct the authorization parameter
const authorizationOrigin = `api_key="${apiKey}",algorithm="hmac-sha256",headers="host date request-line",signature="${signatureSHA}"`;

// Encode the authorization parameter with base64
const authorization = Buffer.from(authorizationOrigin).toString('base64');

console.log(authorization);
