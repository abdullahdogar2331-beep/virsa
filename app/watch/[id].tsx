import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { movies } from '@/data/movies';

export default function Watch() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const movie = movies.find((item) => item.id === id) ?? movies[0];

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}><Ionicons name="arrow-back" size={23} color="#F4F1EA" /></Pressable>
        <Text style={styles.brand}>VIRSA</Text>
        <View style={{ width: 23 }} />
      </View>
      <View style={styles.player}>
        <Ionicons name="logo-youtube" size={52} color="#D6A84F" />
        <Text style={styles.playerTitle}>Official YouTube Player</Text>
        <Text style={styles.playerCopy}>Add the authorized YouTube video ID for this movie to enable playback.</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.meta}>{movie.year}  •  {movie.genre}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#09090A' },
  header: { paddingTop: 56, paddingHorizontal: 20, paddingBottom: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  brand: { color: '#D6A84F', fontWeight: '900', letterSpacing: 3, fontSize: 18 },
  player: { aspectRatio: 16 / 9, backgroundColor: '#151518', alignItems: 'center', justifyContent: 'center', padding: 28 },
  playerTitle: { color: '#F4F1EA', fontSize: 18, fontWeight: '800', marginTop: 14 },
  playerCopy: { color: '#85858A', textAlign: 'center', marginTop: 7, lineHeight: 20 },
  details: { padding: 22 },
  title: { color: '#F4F1EA', fontSize: 25, fontWeight: '900' },
  meta: { color: '#D6A84F', marginTop: 7 },
});