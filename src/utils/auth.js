// src/utils/auth.js
import jwt from 'jsonwebtoken';

export const verifyToken = async (req) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '') || 
                  req.cookies['auth-token'] ||
                  req.headers['auth-token'];
                  
    if (!token) return null;
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    return decoded.user;
  } catch (error) {
    return null;
  }
};