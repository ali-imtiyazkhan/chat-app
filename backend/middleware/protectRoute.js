import jwt from 'jsonwebtoken';

const protectRoute = (req, res, next) => {
    console.log("proteect route hitted")
    try {
        const token = req.cookies?.jwt;
console.log("token: ", token)
        if (!token) {
            console.log("Token not available: ", token)
            return res.status(401).json({ error: "Unauthorized - No token provided" });
        }

        // Verify token
        console.log("verifying token")
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            console.log("verification failed")
            return res.status(401).json({
                error :" user not found "
            })
        }

        // Attach user id to request object

        req.user = {
            _id: decoded.userId
        };
console.log("protect route passed")
        next(); // proceed to the next middleware or route
    } catch (error) {
        console.error("Error in protectRoute middleware:", error.message);
        res.status(401).json({ error: "Unauthorized - Invalid or expired token" });
    }
};

export default protectRoute;
