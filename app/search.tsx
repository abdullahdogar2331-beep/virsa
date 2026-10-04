import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { movies } from '@/data/movies';

const genres = ['All', 'Comedy', 'Drama', 'Romance', 'Classic'];

export default function Search() {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('All');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return movies.filter((movie) => {
      const matchesGenre = genre === 'All' || movie.genre.toLowerCase() === genre.toLowerCase();
      const matchesQuery =
        !q ||
        movie.title.toLowerCase().includes(q) ||
        movie.genre.toLowerCase().includes(q) ||
        movie.year.includes(q);
      return matchesGenre && matchesQuery;
    });
  }, [query, genre]);

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.iconButton}>
          <Ionicons name="arrow-back" size={23} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Search</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.inputWrap}>
        <Ionicons name="search" size={19} color="#777" />
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search Punjabi movies..."
          placeholderTextColor="#666"
          style={styles.input}
          autoCapitalize="none"
          returnKeyType="search"
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={() => setQuery('')}>
            <Ionicons name="close-circle" size={19} color="#777" />
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <View>
            <Text style={styles.sectionLabel}>Browse by genre</Text>
            <FlatList
              horizontal
              data={genres}
              keyExtractor={(item) => item}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.genres}
              renderItem={({ item }) => {
                const active = item === genre;
                return (
                  <TouchableOpacity onPress={() => setGenre(item)} style={[styles.pill, active && styles.pillActive]}>
                    <Text style={[styles.pillText, active && styles.pillTextActive]}>{item}</Text>
                  </TouchableOpacity>
                );
              }}
            />
            <Text style={styles.resultLabel}>{results.length} {results.length === 1 ? 'title' : 'titles'}</Text>
          </View>
        }
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => router.push(`/movie/${item.id}`)}>
            <Image source={{ uri: item.poster }} style={styles.poster} />
            <Text style={styles.movieTitle} numberOfLines={1}>{item.title}</Text>
            <Text style={styles.meta}>{item.year}  •  ★ {item.rating}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Ionicons name="film-outline" size={46} color="#333" />
            <Text style={styles.emptyTitle}>No movies found</Text>
            <Text style={styles.emptyText}>Try another title or genre.</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#090909', paddingTop: 58 },
  header: { paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  iconButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#151515', alignItems: 'center', justifyContent: 'center' },
  title: { color: '#fff', fontSize: 20, fontWeight: '800' },
  inputWrap: { marginHorizontal: 20, marginTop: 14, height: 52, borderRadius: 14, backgroundColor: '#151515', borderWidth: 1, borderColor: '#242424', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, gap: 10 },
  input: { flex: 1, color: '#fff', fontSize: 15 },
  sectionLabel: { color: '#888', fontSize: 12, fontWeight: '800', marginBottom: 9, marginTop: 18, marginHorizontal: 20, textTransform: 'uppercase', letterSpacing: 1 },
  genres: { paddingHorizontal: 20, gap: 9 },
  pill: { paddingHorizontal: 16, paddingVertical: 9, borderRadius: 20, backgroundColor: '#151515' },
  pillActive: { backgroundColor: '#d6a85b' },
  pillText: { color: '#999', fontSize: 12, fontWeight: '700' },
  pillTextActive: { color: '#111' },
  resultLabel: { color: '#ddd', fontSize: 16, fontWeight: '800', marginHorizontal: 20, marginTop: 22, marginBottom: 12 },
  list: { paddingBottom: 110 },
  row: { paddingHorizontal: 20, gap: 14 },
  card: { width: '48%', marginBottom: 20 },
  poster: { width: '100%', aspectRatio: 0.68, borderRadius: 12, backgroundColor: '#151515' },
  movieTitle: { color: '#fff', fontSize: 14, fontWeight: '800', marginTop: 9 },
  meta: { color: '#777', fontSize: 11, marginTop: 4 },
  empty: { alignItems: 'center', justifyContent: 'center', paddingTop: 70, paddingHorizontal: 30 },
  emptyTitle: { color: '#ddd', fontSize: 17, fontWeight: '800', marginTop: 15 },
  emptyText: { color: '#666', fontSize: 13, marginTop: 7, textAlign: 'center' },
});