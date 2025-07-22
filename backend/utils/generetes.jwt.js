import jwt from 'jsonwebtoken';

const generateTokenAndCookie = (userId, res) => {
    console.log("recieved userId in generateTokenAndCookie: ", userId)
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15d',
    });
    console.log("token generated: ", token, "Now setting up")
    res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: 15 * 24 * 60 * 60 * 1000,
        sameSite: "lax", 
        secure: false    
    });
    console.log("stored in cookie according to logic")
    return token;
};

export default generateTokenAndCookie;
