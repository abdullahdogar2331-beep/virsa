import { Ionicons } from '@expo/vector-icons';
import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { movies } from '@/data/movies';
import { MovieCard } from '@/components/MovieCard';

export default function Search() {
  const [query, setQuery] = useState('');
  const results = useMemo(() => movies.filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()) || movie.genre.toLowerCase().includes(query.toLowerCase())), [query]);

  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Search</Text>
      <View style={styles.inputWrap}>
        <Ionicons name="search" size={20} color="#7F7F85" />
        <TextInput value={query} onChangeText={setQuery} placeholder="Search Punjabi movies..." placeholderTextColor="#68686D" style={styles.input} />
      </View>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columns}
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <MovieCard movie={item} />}
        ListEmptyComponent={<Text style={styles.empty}>No movies found.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#09090A', paddingTop: 58, paddingHorizontal: 20 },
  heading: { color: '#F4F1EA', fontSize: 30, fontWeight: '900', marginBottom: 18 },
  inputWrap: { height: 50, borderRadius: 14, backgroundColor: '#151518', borderWidth: 1, borderColor: '#28282D', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, gap: 10, marginBottom: 18 },
  input: { flex: 1, color: '#F4F1EA', fontSize: 14 },
  columns: { justifyContent: 'space-between', marginBottom: 20 },
  grid: { paddingBottom: 90 },
  empty: { color: '#88888D', textAlign: 'center', marginTop: 50 },
});