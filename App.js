import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/Pages/Routes';
import CartProvider from './src/Context/CartContext';

export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <StatusBar backgroundColor="#fafafa" barStyle="dark-content"/>
        <Routes/>
      </CartProvider>
    </NavigationContainer>
  );
}
