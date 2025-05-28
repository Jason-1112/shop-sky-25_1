import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { fetchAllCategories } from "./utils/api";
import { useState, useEffect } from "react";
import { Greeting } from "./screens/Greeting";
import { Product } from "./screens/Product";
 
export default function App() {
 
  const [products, setProducts] = useState([]);
 
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const fetchProducts = async () => {
    try {    
      const response = await fetch('https://sturdy-giggle-jj7w9657qrjv3qx5x-3000.app.github.dev/api/products')
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
    finally{
      setLoading(false);
    }
  };
  fetchProducts();
 
  }, []);
 
    if(loading) return <ActivityIndicator/>
 
  return (
    <View style={styles.container}>
      <ScrollView>
        {products.map((p, i)=>
      (
          <View key={p.id} style={{marginBottom: 15}}>
            <Product name={p.name} description={p.description} price={p.price}/>
          </View>
      ))}
      </ScrollView>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
 
 