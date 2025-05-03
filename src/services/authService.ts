
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export const AUTH_TOKEN_KEY = 'skillora_auth_token';
export const USERS_KEY = 'skillora_users';

// Get current user from local storage
export const getCurrentUser = (): User | null => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  
  if (!token) {
    return null;
  }
  
  try {
    // Check users storage
    const usersJson = localStorage.getItem(USERS_KEY);
    if (!usersJson) return null;
    
    const users: User[] = JSON.parse(usersJson);
    const userId = token.split('_')[0]; // Simple token format: userId_timestamp
    
    return users.find(user => user.id === userId) || null;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
};

// Register a new user
export const registerUser = (name: string, email: string, password: string): { success: boolean, message: string, user?: User } => {
  try {
    // Check if users storage exists, create if not
    const usersJson = localStorage.getItem(USERS_KEY);
    const users: User[] = usersJson ? JSON.parse(usersJson) : [];
    
    // Check if email already exists
    if (users.some(user => user.email === email)) {
      return { 
        success: false, 
        message: 'Email already exists' 
      };
    }
    
    // Create new user
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      password
    };
    
    // Add user to storage
    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    
    // Create and store token
    const token = `${newUser.id}_${Date.now()}`;
    localStorage.setItem(AUTH_TOKEN_KEY, token);
    
    return { 
      success: true, 
      message: 'Registration successful', 
      user: newUser 
    };
  } catch (error) {
    console.error('Error registering user:', error);
    return { 
      success: false, 
      message: 'Registration failed' 
    };
  }
};

// Login user
export const loginUser = (email: string, password: string): { success: boolean, message: string, user?: User } => {
  try {
    // Check if users storage exists
    const usersJson = localStorage.getItem(USERS_KEY);
    if (!usersJson) {
      return { 
        success: false, 
        message: 'No users found' 
      };
    }
    
    const users: User[] = JSON.parse(usersJson);
    
    // Find user by email and password
    const user = users.find(user => user.email === email && user.password === password);
    
    if (!user) {
      return { 
        success: false, 
        message: 'Invalid email or password' 
      };
    }
    
    // Create and store token
    const token = `${user.id}_${Date.now()}`;
    localStorage.setItem(AUTH_TOKEN_KEY, token);
    
    return { 
      success: true, 
      message: 'Login successful', 
      user 
    };
  } catch (error) {
    console.error('Error logging in:', error);
    return { 
      success: false, 
      message: 'Login failed' 
    };
  }
};

// Logout user
export const logoutUser = (): boolean => {
  try {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    return true;
  } catch (error) {
    console.error('Error logging out:', error);
    return false;
  }
};

// Check if user is logged in
export const isLoggedIn = (): boolean => {
  return !!localStorage.getItem(AUTH_TOKEN_KEY);
};
