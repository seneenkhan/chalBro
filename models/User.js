import mongoose from 'mongoose';

const registerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    profilePhoto: {
        data: Buffer,
        contentType: String,
    },
    profilePhotoUrl: String
});

const Register = mongoose.model('Register', registerSchema, 'register'); // Explicitly specify the collection name

export default Register;
