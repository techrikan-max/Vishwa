import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // Since we're using JWT tokens, logout is handled client-side by removing the token
    // This endpoint can be used for any server-side cleanup if needed in the future
    
    return NextResponse.json(
      {
        success: true,
        message: 'Logout successful',
      },
      { status: 200 }
    );

  } catch (error: unknown) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
