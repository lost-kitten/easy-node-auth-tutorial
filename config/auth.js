// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '645315412297126', // your App ID
        'clientSecret'  : 'ccd085399a55c9d0782913bb7fac21c5', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },
    'twitterAuth' : {
        'consumerKey'    : 'A9VGA10lNfk7OacF1QrIoDcWj',
        'consumerSecret' : '7y1aVu8Ct7cQAXSOdVW4Vycr7QnY9J31BUhBQVNasjxN9be9he',
        'callbackURL'    : 'http://127.0.0.1:8080/auth/twitter/callback'
    }

};
