import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { movies } from '@/data/movies';

export default function MovieDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const movie = movies.find((item) => item.id === id) ?? movies[0];

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={{ uri: movie.backdrop }} style={styles.hero}>
          <View style={styles.overlay} />
          <Pressable onPress={() => router.back()} style={styles.back}><Ionicons name="arrow-back" size={21} color="#F4F1EA" /></Pressable>
        </ImageBackground>
        <View style={styles.content}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.meta}>{movie.year}  •  {movie.genre}  •  {movie.duration}  •  {movie.rating} ★</Text>
          <Text style={styles.description}>{movie.description}</Text>
          <Pressable onPress={() => router.push({ pathname: '/watch/[id]', params: { id: movie.id } })} style={styles.button}>
            <Ionicons name="play" size={17} color="#111113" />
            <Text style={styles.buttonText}>Watch on VIRSA</Text>
          </Pressable>
          <View style={styles.info}><Text style={styles.infoLabel}>PLAYBACK</Text><Text style={styles.infoText}>Only authorized YouTube videos will be connected here.</Text></View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#09090A' },
  hero: { height: 430 },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(5,5,6,0.35)' },
  back: { marginTop: 58, marginLeft: 18, width: 42, height: 42, borderRadius: 21, backgroundColor: 'rgba(12,12,14,0.75)', alignItems: 'center', justifyContent: 'center' },
  content: { padding: 22, paddingBottom: 50 },
  title: { color: '#F4F1EA', fontSize: 32, fontWeight: '900' },
  meta: { color: '#D6A84F', marginTop: 9, fontSize: 13, fontWeight: '700' },
  description: { color: '#AAA9AE', lineHeight: 23, marginTop: 18, fontSize: 15 },
  button: { backgroundColor: '#D6A84F', borderRadius: 24, paddingVertical: 14, paddingHorizontal: 19, flexDirection: 'row', alignItems: 'center', gap: 8, alignSelf: 'flex-start', marginTop: 23 },
  buttonText: { color: '#111113', fontWeight: '900' },
  info: { marginTop: 32, borderTopWidth: 1, borderTopColor: '#27272B', paddingTop: 18 },
  infoLabel: { color: '#6E6E73', fontSize: 10, letterSpacing: 1.6, fontWeight: '800' },
  infoText: { color: '#8F8E93', marginTop: 7, lineHeight: 20 },
});