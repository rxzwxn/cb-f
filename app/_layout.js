import React, { useState, useEffect, createContext, useContext } from 'react';
import { Stack } from 'expo-router'; 
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create Auth Context
const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const checkAuthstatus = async () => {
    const token = await AsyncStorage.getItem('authtoken');
    setIsAuthenticated(!!true);
    setLoading(false);
  };
  checkAuthstatus();
}, []);

const login = async (token) => {
  await AsyncStorage.setItem('authToken', token);
    setIsAuthenticated(true);
};

const logout = async () => {
  await AsyncStorage.removeItem('authToken');
  setIsAuthenticated(false);
};

return (
  <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
    {loading ? (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    ) : (
      children
    )}
    </AuthContext.Provider>
   );
};
const Layout = () => {
  const { isAuthenticated } = useAuth();

  
return (
  <Stack screenOptions = {{headerShown: false}}>
    {isAuthenticated ? (
      <>
      <Stack.Screen name="index"/>
      <Stack.Screen name="carlisting"/>
      <Stack.Screen name="viewcars"/>
      </>
      ) : (
        <>
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="signup" options={{ headerShown: false }} />
        </>
      )}
    </Stack>
  );

};

export default () => (
  <AuthProvider>
    <Layout />
  </AuthProvider>
);
