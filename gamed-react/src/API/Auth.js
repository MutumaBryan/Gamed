export async function loginUser(username, password) {
    try {
      const response = await fetch(' https://reqres.in/api/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          username: username,  // <-- sending username 
          password: password
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong");
      }
  
      const data = await response.json();
      return data; 
    } catch (error) {
      throw error;
    }
  }
  

  // Passcode Verification API 
export async function verifyPasscode(passcode) {
  try {
    const response = await fetch('https://reqres.in/api/verify-passcode', { // Placeholder API link
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ passcode }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to verify passcode.');
    }

    const data = await response.json();
    return data; // This will be the success response you can handle
  } catch (error) {
    throw error;
  }
}

// API to handle resend code 
// Inside your API/Auth.js file
export async function resendVerificationCode() {
  try {
    const response = await fetch("https://your-backend-url/api/resend-verification-code", { // Replace with your API endpoint
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // You can send additional information like user ID or email if required
      body: JSON.stringify({ /* email or user ID */ }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to resend verification code.");
    }

    const data = await response.json();
    return data; // This will be the success response
  } catch (error) {
    throw error;
  }
}


// API to handle forgot password
export const sendForgotPasswordRequest = async (email) => {
  try {
    const response = await fetch('http://localhost:3000/api/forgot-password', { // Replace with your actual backend URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || 'Failed to send password reset email');
    }

    const data = await response.json();
    return data.message; // Return success message from the API response
  } catch (error) {
    throw new Error(error.message); // Handle errors, including network errors
  }
};