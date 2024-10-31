import AsyncStorage from '@react-native-async-storage/async-storage';

// This function checks if there is an authentication token saved
export const checkUserAuthentication = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken'); // Replace 'userToken' with whatever key you're using for storing the token
    return !!token; // Returns true if the token exists, false otherwise
  } catch (error) {
    console.error('Error checking user authentication:', error);
    return false;
  }
};

// This function could be called to log out the user and clear their token
export const logoutUser = async () => {
  try {
    await AsyncStorage.removeItem('userToken'); // Remove the token from storage
  } catch (error) {
    console.error('Error logging out user:', error);
  }
};
