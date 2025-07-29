const jwt = require('jsonwebtoken');

// dummy user example
const dummyUser = {
    id: 1,
    email: 'tester@gmail.com',
    password: '1234'
}

exports.login = async (email, password) => {
    if (email !== dummyUser.email || password !== dummyUser.password) {
        return {
            success: false,
            message: 'Invalid credentials'
        }
    }

    const token = jwt.sign(
        { userId: dummyUser.id, email: dummyUser.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    return {
        success: true,
        token
    }
}