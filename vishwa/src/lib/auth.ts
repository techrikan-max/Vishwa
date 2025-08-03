import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { IUser } from '@/models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key';

export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
};

export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

export const generateToken = (user: IUser): string => {
  return jwt.sign(
    { 
      userId: user._id, 
      email: user.email,
      name: user.name 
    },
    JWT_SECRET,
    { expiresIn: '24h' }
  );
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
};
