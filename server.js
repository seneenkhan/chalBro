// import express from 'express';
// import cors from 'cors';
// import path from 'path';
// import passport from 'passport';
// import cookieSession from 'cookie-session';
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import multer from 'multer';
// import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
// import Register from '../../ChalBro/models/User.js'; // Import the Register model

// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// // Configure dotenv
// dotenv.config();

// // Create Express app
// const app = express();

// // Middleware
// app.use(cors({
//     origin: 'http://localhost:5137',
//     credentials: true,
// }));
// app.use(cookieSession({
//     name: 'session',
//     keys: [process.env.SESSION_SECRET],
//     maxAge: 24 * 60 * 60 * 1000, 
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(express.static(path.join(__dirname, 'public')));

// // MongoDB setup
// mongoose.connect(process.env.MONGODB_URI, {
// }).then(() => {
//    console.log('Connected to MongoDB');
// }).catch((err) => {
//    console.error('Error connecting to MongoDB:', err);
//    process.exit(1);
// });

// // Passport Configuration
// passport.use(new GoogleStrategy({
//     clientID: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//     callbackURL: 'http://localhost:8080/auth/google/callback',
//     scope: ['profile', 'email'],
// }, async (accessToken, refreshToken, profile, done) => {
//     try {
//         let existingUser = await Register.findOne({  username: profile.displayName}); 

//         if (existingUser) {
//             done(null, existingUser);
//         } else {
//             const newUser = new Register({
//                 // googleId: profile.id,
//                 username: profile.displayName,
//                 email: profile.emails[0].value,
//             });
//             await newUser.save();
//             done(null, newUser);
//         }
//     } catch (error) {
//         done(error);
//     }
// }));

// passport.serializeUser((user, done) => {
//     done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//     Register.findById(id, (err, user) => {
//         done(err, user);
//     });
// });

// // Route for handling user registration
// app.post('/register', async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const existingUser = await Register.findOne({ email });

//         if (existingUser) {
//             return res.status(400).json({ error: 'User already exists' });
//         }

//         const newUser = await Register.create({
//             email,
//             password // Make sure to hash the password before saving it to the database
//         });

//         res.status(201).json(newUser);
//     } catch (error) {
//         console.error('Error registering user:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// // Define storage for profile photo uploads using Multer
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// // Route for uploading profile photo
// app.post('/upload', upload.single('profilePhoto'), async (req, res) => {
//     try {
//         if (!req.file) {
//             return res.status(400).json({ error: 'No file uploaded' });
//         }

//         const { username, email } = req.body;
//         const profilePhoto = {
//             data: req.file.buffer,
//             contentType: req.file.mimetype
//         };

//         const user = new Register({
//             username,
//             email,
//             profilePhoto
//         });

//         await user.save();

//         res.status(200).json({ message: 'Profile photo uploaded successfully' });
//     } catch (error) {
//         console.error('Error uploading profile photo:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// // Routes for Google OAuth authentication
// app.get('/auth/google',
//     passport.authenticate('google', { scope: ['profile', 'email'] })
// );

// app.get('/auth/google/callback',
//     passport.authenticate('google', { failureRedirect: '/' }),
//     (req, res) => {
//         res.redirect('/'); // Redirect to homepage after successful authentication
//     }
// );

// // Start server
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
// import express from 'express';
// import cors from 'cors';
// import path from 'path';
// import passport from 'passport';
// import cookieSession from 'cookie-session';
// import dotenv from 'dotenv';
// // import multer from 'multer';
// import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
// import Datastore from 'nedb';

// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// // Configure dotenv
// dotenv.config();

// // Create Express app
// const app = express();

// // Middleware
// app.use(cors({
//     origin: 'http://localhost:5137',
//     credentials: true,
// }));
// app.use(cookieSession({
//     name: 'session',
//     keys: [process.env.SESSION_SECRET],
//     maxAge: 24 * 60 * 60 * 1000,
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(express.static(path.join(__dirname, 'public')));

// // NeDB setup
// const database = new Datastore({ filename: path.join(__dirname, 'database.db'), autoload: true });

// // Passport Configuration
// passport.serializeUser((user, done) => {
//     done(null, user.googleId || user.id);
// });

// passport.deserializeUser((googleId, done) => {
//     database.findOne({ googleId: googleId }, (err, user) => {
//         done(null, user);
//     });
// });

// var strategy = new GoogleStrategy({
//     // options for google strategy
//     clientID: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//     callbackURL: 'http://localhost:8080/auth/google/redirect'
// }, (accessToken, refreshToken, object0, profile, done) => {
//     // check if user already exists in our own db
//     database.findOne({ googleId: profile.id }, (err, currentUser) => {
//         if (currentUser !== null) {
//             done(null, currentUser);
//         } else {
//             var d = new Date();
//             var n = d.getTime();
//             var User = {
//                 googleId: profile.id,
//                 username: profile.displayName,
//                 thumbnail: profile._json.image.url,
//                 oscope: object0.scope,
//                 oaccess_token: object0.access_token,
//                 otoken_type: object0.token_type,
//                 oid_token: object0.id_token,
//                 oexpires_in: object0.expires_in,
//                 oemails: profile.emails,
//                 olanguage: profile._json.language,
//                 oname: profile.name,
//                 TimeOfLastLogon: n,
//                 RefreshToken: refreshToken
//             };
//             database.insert(User, (err, newUser) => { });
//             var newUser = User;
//             done(null, newUser);
//         }
//     });
// });

// passport.use(strategy);

// // auth with google+
// app.get('/auth/google', passport.authenticate('google', {
//     scope: ['profile', 'email', 'https://www.googleapis.com/auth/spreadsheets'],
//     accessType: 'offline',
//     approvalPrompt: 'force'
// }));

// // callback route for google to redirect to
// // hand control to passport to use code to grab profile info
// app.get('/auth/google/redirect', passport.authenticate('google'), async (req, res) => {
//     var userString = JSON.stringify(req.user)
//     jwt.sign({ userString }, 'secretKey', { expiresIn: '365d' }, (err, token) => {
//         res.send("<script>localStorage.setItem('token', '" + token + "'); window.close(); window.opener.document.getElementById('modal-toggle').checked = false;</script>");
//     });
// });

// // Start server
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
import express from 'express';
import cors from 'cors';
import passport from 'passport';
import cookieSession from 'cookie-session';
import dotenv from 'dotenv';
import Datastore from 'nedb';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(cors({
    origin: 'http://localhost:5137',
    credentials: true,
}));
app.use(cookieSession({
    name: 'session',
    keys: [process.env.SESSION_SECRET],
    maxAge: 24 * 60 * 60 * 1000,
}));
app.use(passport.initialize());
app.use(passport.session());

// NeDB setup
const database = new Datastore('database.db');
database.loadDatabase();

// Passport Configuration
passport.use(new GoogleStrategy({
    clientID: '358758311085-gmmof7om6e140rtcqsmnhspc38harc8o.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:8080/auth/google/callback',
}, async (accessToken, refreshToken, profile, done) => {
    try {
        database.findOne({ googleId: profile.id }, (err, currentUser) => {
            if (currentUser !== null) {
                done(null, currentUser);
            } else {
                const newUser = {
                    googleId: profile.id,
                    username: profile.displayName,
                    email: profile.emails[0].value,
                };
                database.insert(newUser, (err, user) => {
                    if (err) return done(err);
                    done(null, user);
                });
            }
        });
    } catch (error) {
        done(error);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.googleId);
});

passport.deserializeUser((googleId, done) => {
    database.findOne({ googleId: googleId }, (err, user) => {
        done(err, user);
    });
});

// Routes for Google OAuth authentication
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email'],
}));

app.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect: '/',
}), (req, res) => {
    // Successful authentication, redirect to the homepage or perform any necessary action
    res.redirect('http://127.0.0.1:5173/account');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
