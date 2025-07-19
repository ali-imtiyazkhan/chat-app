import jwt from 'jsonwebtoken';

const protectRoute = (req, res, next) => {
    try {
        const token = req.cookies?.jwt;

        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No token provided" });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({
                error :" user not found "
            })
        }

        // Attach user id to request object
        req.user = {
            _id: decoded.userId
        };

        next(); // proceed to the next middleware or route
    } catch (error) {
        console.error("Error in protectRoute middleware:", error.message);
        res.status(401).json({ error: "Unauthorized - Invalid or expired token" });
    }
};

export default protectRoute;
