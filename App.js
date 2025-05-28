import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { Product } from './screens/Product';
import { ActivityIndicator } from 'react-native-web';

export default function App() {

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://musical-goldfish-g4rw6j9v9prxfvw46-8081.app.github.dev/api/products');
        const data = await response.json();
        setUsers(data);
        } catch (error) {
        console.error('Fetch error!', error);
        } finally {
          setLoading(false);
        }
      };

    fetchUsers();
  },[]);

   if(loading) return <ActivityIndicator/>

  return (
    <View style={styles.container}>
      <ScrollView>
        {products.map((u, i)=> 
        (
          <View key={u.id} style={{marginBottom: 15 }}>
            <Product name={p.name} description = {p.description} prize = {p.price}/>
          </View> 
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
