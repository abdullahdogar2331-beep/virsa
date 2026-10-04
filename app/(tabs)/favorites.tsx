import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

export default function Favorites() {
  return (
    <View style={styles.screen}>
      <Ionicons name="heart-outline" size={48} color="#D6A84F" />
      <Text style={styles.title}>Your Favorites</Text>
      <Text style={styles.copy}>Save movies here when the favorites system is connected.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#09090A', alignItems: 'center', justifyContent: 'center', padding: 28 },
  title: { color: '#F4F1EA', fontSize: 25, fontWeight: '800', marginTop: 14 },
  copy: { color: '#88888D', textAlign: 'center', lineHeight: 21, marginTop: 8 },
});