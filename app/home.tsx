import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { featuredMovie, latestMovies, movies, trendingMovies } from '@/data/movies';

function MovieCard({ movie }: { movie: (typeof movies)[number] }) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.82}
      onPress={() => router.push({ pathname: '/movie/[id]', params: { id: movie.id } })}
    >
      <Image source={{ uri: movie.poster }} style={styles.poster} />
      <Text style={styles.cardTitle} numberOfLines={1}>{movie.title}</Text>
      <Text style={styles.cardMeta}>{movie.year} • {movie.genre}</Text>
    </TouchableOpacity>
  );
}

function Rail({ title, items }: { title: string; items: typeof movies }) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.rail}>
        {items.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </ScrollView>
    </View>
  );
}

export default function Home() {
  return (
    <View style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <View style={styles.heroImageWrap}>
            <Image source={{ uri: featuredMovie.backdrop }} style={styles.heroImage} />
            <View style={styles.heroOverlay} />
          </View>
          <View style={styles.topbar}>
            <Text style={styles.logo}>VIRSA</Text>
            <TouchableOpacity onPress={() => router.push('/search')} style={styles.iconButton}>
              <Ionicons name="search" size={22} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.heroContent}>
            <Text style={styles.eyebrow}>PUNJABI CINEMA • ONE HOME</Text>
            <Text style={styles.heroTitle}>Stories that feel like home.</Text>
            <Text style={styles.heroText}>Discover Punjabi movies, timeless classics and fresh releases in one cinematic place.</Text>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => router.push({ pathname: '/movie/[id]', params: { id: featuredMovie.id } })}
            >
              <Ionicons name="play" size={18} color="#111" />
              <Text style={styles.primaryText}>Watch now</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Rail title="Trending Now" items={trendingMovies} />
        <Rail title="Latest Movies" items={latestMovies} />
        <Rail title="Top Rated" items={movies} />
        <Rail title="Comedy" items={movies.filter(m => m.genre === 'Comedy')} />
        <Rail title="Drama" items={movies.filter(m => m.genre === 'Drama')} />
        <View style={{ height: 40 }} />
      </ScrollView>

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.tabActive}><Ionicons name="home" size={21} color="#d6a85b" /><Text style={styles.tabTextActive}>Home</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => router.push('/search')}><Ionicons name="search-outline" size={21} color="#777" /><Text style={styles.tabText}>Search</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => router.push('/favorites')}><Ionicons name="heart-outline" size={21} color="#777" /><Text style={styles.tabText}>Favorites</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => router.push('/profile')}><Ionicons name="person-outline" size={21} color="#777" /><Text style={styles.tabText}>Profile</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#090909' },
  hero: { minHeight: 530, paddingTop: 62, paddingHorizontal: 22, justifyContent: 'space-between', overflow: 'hidden' },
  heroImageWrap: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  heroImage: { width: '100%', height: '100%' },
  heroOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: '#090909A8' },
  topbar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  logo: { color: '#d6a85b', fontSize: 25, fontWeight: '900', letterSpacing: 5 },
  iconButton: { width: 42, height: 42, borderRadius: 21, backgroundColor: '#00000070', alignItems: 'center', justifyContent: 'center' },
  heroContent: { paddingBottom: 52, maxWidth: 380 },
  eyebrow: { color: '#d6a85b', fontSize: 11, fontWeight: '800', letterSpacing: 2 },
  heroTitle: { color: '#fff', fontSize: 42, lineHeight: 46, fontWeight: '900', marginTop: 12 },
  heroText: { color: '#d0cbc5', fontSize: 15, lineHeight: 23, marginTop: 14, maxWidth: 330 },
  primaryButton: { marginTop: 24, backgroundColor: '#d6a85b', borderRadius: 25, paddingHorizontal: 21, paddingVertical: 13, alignSelf: 'flex-start', flexDirection: 'row', gap: 8, alignItems: 'center' },
  primaryText: { color: '#111', fontSize: 14, fontWeight: '900' },
  section: { marginTop: 26 },
  sectionHead: { paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  sectionTitle: { color: '#fff', fontSize: 21, fontWeight: '800' },
  seeAll: { color: '#8d8a86', fontSize: 12, fontWeight: '700' },
  rail: { paddingLeft: 20, paddingRight: 8, paddingTop: 14 },
  card: { width: 142, marginRight: 13 },
  poster: { width: 142, height: 202, borderRadius: 12, backgroundColor: '#1a1a1d' },
  cardTitle: { color: '#eee', fontSize: 14, fontWeight: '800', marginTop: 9 },
  cardMeta: { color: '#777', fontSize: 11, marginTop: 3 },
  bottom: { height: 78, borderTopWidth: 1, borderTopColor: '#ffffff0c', backgroundColor: '#0d0d0d', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 8 },
  tab: { alignItems: 'center', gap: 4, minWidth: 65 },
  tabActive: { alignItems: 'center', gap: 4, minWidth: 65 },
  tabText: { color: '#777', fontSize: 10, fontWeight: '700' },
  tabTextActive: { color: '#d6a85b', fontSize: 10, fontWeight: '800' }
});