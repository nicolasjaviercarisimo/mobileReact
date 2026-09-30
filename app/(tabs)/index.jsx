import { View, FlatList, Pressable, Image, Text, StyleSheet } from "react-native";
import { products } from "../../data/products";

export default function Index() {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Pressable style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12 },
  card: { marginBottom: 16, backgroundColor: "#f2f2f2", borderRadius: 8, padding: 8 },
  image: { width: "100%", height: 150, borderRadius: 8 },
  name: { fontWeight: "bold", marginTop: 6 },
  price: { color: "#555" },
});