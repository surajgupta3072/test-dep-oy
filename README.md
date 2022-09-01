## TAdS New Website Backend

# TAdS New Website Backend

## FILE STRUCTURE

As the code is broken down into different files, here is what each file contains
|FILE NAME|CONTENT  
|----------------|-------------------------------
|`index.js`|Main file where all the functions are imported and called  
|`auth.js`|Authentication and function for sending mails using `nodemailer`  
|`mailToClient.js`|Function to send reply mail to the client
|`mailToTAdS.js`|Function to send query mail to TAdS email address
|`route.js`|POST request API definition at `/contact`
|`mailToClient.html`|HTML Email boilerplate for reply mail to the client
|`mailToTAdS.html`|HTML Email boilerplate for query mail to TAdS

## Environment Variables (Secrets)

Create a file named `.env` locally. This file is gitignored.
Add the following contents to it.

```
EMAIL={{email}}
REFRESH_TOKEN={{refreshToken}}
CLIENT_SECRET={{clientSecret}}
CLIENT_ID={{clientID}}
```

Replace `{{email}}` with the the email you wish to send emails with. `{{refreshToken}}` with the email's refresh token, `{{clientSecret}}` with the client secret and `{{clientID}}` with the client ID respectively

These variables will be accessible as `process.env.EMAIL`, `process.env.REFRESH_TOKEN`, `process.env.clientSecret` and `process.env.CLIENT_ID` in the javascript code.
# backendAWS
