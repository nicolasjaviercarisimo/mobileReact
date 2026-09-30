import { View, Text, Image, StyleSheet } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { products } from "../../data/products";

export default function ProductoDetalle() {
  const { id } = useLocalSearchParams();
  const producto = products.find((p) => p.id === Number(id));

  if (!producto) return <Text>Producto no encontrado</Text>;

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Producto" }} />
      <Image source={{ uri: producto.image }} style={styles.image} />
      <Text style={styles.name}>{producto.name}</Text>
      <Text style={styles.price}>${producto.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  image: { width: "100%", height: 250, borderRadius: 8 },
  name: { fontSize: 20, fontWeight: "bold", marginTop: 12 },
  price: { fontSize: 18, color: "#555", marginTop: 4 },
});