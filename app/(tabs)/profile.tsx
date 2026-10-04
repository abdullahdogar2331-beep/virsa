import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.screen}>
      <View style={styles.logo}><Text style={styles.logoText}>V</Text></View>
      <Text style={styles.title}>VIRSA</Text>
      <Text style={styles.copy}>Punjabi Cinema. One Home.</Text>
      <View style={styles.card}><Ionicons name="information-circle-outline" size={20} color="#D6A84F" /><Text style={styles.cardText}>Official YouTube playback will be connected in the watch screen.</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#09090A', alignItems: 'center', padding: 24, paddingTop: 100 },
  logo: { width: 82, height: 82, borderRadius: 24, backgroundColor: '#17171A', borderWidth: 1, borderColor: '#3A352B', alignItems: 'center', justifyContent: 'center' },
  logoText: { color: '#D6A84F', fontSize: 42, fontWeight: '900' },
  title: { color: '#F4F1EA', fontSize: 28, fontWeight: '900', letterSpacing: 3, marginTop: 18 },
  copy: { color: '#8F8E93', marginTop: 5 },
  card: { width: '100%', backgroundColor: '#141416', borderRadius: 16, borderWidth: 1, borderColor: '#29292D', padding: 17, marginTop: 34, flexDirection: 'row', gap: 10 },
  cardText: { flex: 1, color: '#B7B5AF', lineHeight: 20 },
});