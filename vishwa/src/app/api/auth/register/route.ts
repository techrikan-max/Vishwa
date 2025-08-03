import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';
import { hashPassword, generateToken } from '@/lib/auth';
import { uploadImage } from '@/lib/cloudinary';

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const profilePhoto = formData.get('profilePhoto') as File;

    // Validate required fields
    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and password are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Validate password length
    if (password.length < 6) {
      return NextResponse.json(
        { success: false, message: 'Password must be at least 6 characters long' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: 'User with this email already exists' },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Handle profile photo upload if provided
    let profilePhotoUrl = null;
    if (profilePhoto && profilePhoto.size > 0) {
      try {
        const bytes = await profilePhoto.arrayBuffer();
        const buffer = Buffer.from(bytes);
        
        // Generate unique filename
        const fileName = `profile_${Date.now()}_${Math.random().toString(36).substring(7)}`;
        
        const uploadResult = await uploadImage(buffer, fileName) as { secure_url: string };
        profilePhotoUrl = uploadResult.secure_url;
      } catch (uploadError) {
        console.error('Profile photo upload error:', uploadError);
        // Continue with registration even if photo upload fails
      }
    }

    // Create new user
    const newUser = new User({
      name: name.trim(),
      email: email.toLowerCase(),
      password: hashedPassword,
      profilePhoto: profilePhotoUrl,
    });

    const savedUser = await newUser.save();

    // Generate JWT token
    const token = generateToken(savedUser);

    // Return success response (excluding password)
    const userResponse = {
      _id: savedUser._id,
      name: savedUser.name,
      email: savedUser.email,
      profilePhoto: savedUser.profilePhoto,
      createdAt: savedUser.createdAt,
    };

    return NextResponse.json(
      {
        success: true,
        message: 'Account created successfully',
        user: userResponse,
        token,
      },
      { status: 201 }
    );

  } catch (error: unknown) {
    console.error('Registration error:', error);

    const errorObj = error as { code?: number; name?: string; errors?: Record<string, { message: string }> };

    if (errorObj.code === 11000) {
      return NextResponse.json(
        { success: false, message: 'User with this email already exists' },
        { status: 409 }
      );
    }

    if (errorObj.name === 'ValidationError') {
      const messages = Object.values(errorObj.errors || {}).map((err: { message: string }) => err.message);
      return NextResponse.json(
        { success: false, message: messages.join(', ') },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
