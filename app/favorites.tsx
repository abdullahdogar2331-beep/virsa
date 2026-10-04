import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useCallback, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { movies } from '@/data/movies';
import { getFavorites } from '@/lib/favorites';

export default function Favorites() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const load = useCallback(async () => {
    setFavoriteIds(await getFavorites());
  }, []);

  useFocusEffect(useCallback(() => {
    load();
  }, [load]));

  const favoriteMovies = movies.filter((movie) => favoriteIds.includes(movie.id));

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.logo}>VIRSA</Text>
        <TouchableOpacity style={styles.close} onPress={() => router.back()}>
          <Ionicons name="close" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      <Text style={styles.heading}>My Favorites</Text>
      <Text style={styles.subheading}>{favoriteMovies.length} saved {favoriteMovies.length === 1 ? 'movie' : 'movies'}</Text>

      <FlatList
        data={favoriteMovies}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={favoriteMovies.length ? styles.grid : styles.emptyList}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => router.push(`/movie/${item.id}`)}>
            <View>
              <Image source={{ uri: item.poster }} style={styles.poster} />
              <View style={styles.heart}>
                <Ionicons name="heart" size={14} color="#090909" />
              </View>
            </View>
            <Text style={styles.movieTitle} numberOfLines={1}>{item.title}</Text>
            <Text style={styles.meta}>{item.year}  •  ★ {item.rating}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Ionicons name="heart-outline" size={56} color="#333" />
            <Text style={styles.emptyTitle}>Nothing saved yet</Text>
            <Text style={styles.emptyText}>Tap the heart on any movie to build your personal collection.</Text>
            <TouchableOpacity style={styles.browse} onPress={() => router.push('/search')}>
              <Text style={styles.browseText}>Browse Movies</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#090909', paddingTop: 58 },
  header: { paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  logo: { color: '#d6a85b', fontSize: 24, fontWeight: '900', letterSpacing: 4 },
  close: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#151515', alignItems: 'center', justifyContent: 'center' },
  heading: { color: '#fff', fontSize: 27, fontWeight: '900', marginHorizontal: 20, marginTop: 22 },
  subheading: { color: '#777', fontSize: 13, marginHorizontal: 20, marginTop: 5, marginBottom: 18 },
  grid: { paddingHorizontal: 20, paddingBottom: 110 },
  row: { gap: 14, marginBottom: 20 },
  card: { width: '48%' },
  poster: { width: '100%', aspectRatio: 0.68, borderRadius: 12, backgroundColor: '#151515' },
  heart: { position: 'absolute', right: 9, top: 9, width: 30, height: 30, borderRadius: 15, backgroundColor: '#d6a85b', alignItems: 'center', justifyContent: 'center' },
  movieTitle: { color: '#fff', fontSize: 14, fontWeight: '800', marginTop: 9 },
  meta: { color: '#777', fontSize: 11, marginTop: 4 },
  emptyList: { flexGrow: 1 },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 34, paddingBottom: 100 },
  emptyTitle: { color: '#ddd', fontSize: 20, fontWeight: '800', marginTop: 15 },
  emptyText: { color: '#666', fontSize: 13, lineHeight: 20, textAlign: 'center', marginTop: 8 },
  browse: { backgroundColor: '#d6a85b', borderRadius: 12, paddingHorizontal: 20, paddingVertical: 12, marginTop: 20 },
  browseText: { color: '#111', fontWeight: '900' },
});