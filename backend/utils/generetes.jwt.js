import jwt from 'jsonwebtoken';

const generateTokenAndCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15d',
    });

    res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: 15 * 24 * 60 * 60 * 1000,
        sameSite: "lax",  // ✅ Fix here
        secure: false     // ✅ Change to true in production with HTTPS
    });

    return token;
};

export default generateTokenAndCookie;
