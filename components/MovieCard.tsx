import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import type { Movie } from '@/data/movies';

export function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Pressable
      onPress={() => router.push({ pathname: '/movie/[id]', params: { id: movie.id } })}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <Image source={{ uri: movie.poster }} style={styles.poster} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>{movie.title}</Text>
        <Text style={styles.meta}>{movie.year}  •  {movie.rating} ★</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { width: 138, marginRight: 14 },
  pressed: { opacity: 0.78, transform: [{ scale: 0.98 }] },
  poster: { width: 138, height: 198, borderRadius: 12, backgroundColor: '#1A1A1D' },
  info: { paddingTop: 9 },
  title: { color: '#F4F1EA', fontSize: 14, fontWeight: '700' },
  meta: { color: '#89898F', fontSize: 12, marginTop: 4 },
});