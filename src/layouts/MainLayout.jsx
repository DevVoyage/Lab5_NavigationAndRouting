import React from 'react';
import { View, StyleSheet } from 'react-native';
import Footer from '../components/Footer.jsx';
const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <View style={styles.footerView}>
        <Footer />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerView: {
    width: '100%',
    alignItems: 'center',
    
  },
  
});

export default MainLayout;