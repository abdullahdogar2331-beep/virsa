import { Ionicons } from '@expo/vector-icons';
import { ImageBackground, ScrollView, StyleSheet, Text, Pressable, View } from 'react-native';
import { router } from 'expo-router';
import { featuredMovie, latestMovies, movies, trendingMovies } from '@/data/movies';
import { MovieCard } from '@/components/MovieCard';

export default function Home() {
  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={{ uri: featuredMovie.backdrop }} style={styles.hero}>
          <View style={styles.overlay} />
          <View style={styles.top}>
            <View>
              <Text style={styles.brand}>VIRSA</Text>
              <Text style={styles.tagline}>Punjabi Cinema. One Home.</Text>
            </View>
            <Pressable onPress={() => router.push('/search')} style={styles.iconButton}>
              <Ionicons name="search" size={21} color="#F5F2EA" />
            </Pressable>
          </View>
          <View style={styles.heroContent}>
            <View style={styles.featureBadge}><Text style={styles.featureText}>FEATURED</Text></View>
            <Text style={styles.heroTitle}>{featuredMovie.title}</Text>
            <Text style={styles.heroMeta}>{featuredMovie.year}  •  {featuredMovie.genre}  •  ★ {featuredMovie.rating}</Text>
            <Text style={styles.heroDesc} numberOfLines={2}>{featuredMovie.description}</Text>
            <Pressable onPress={() => router.push({ pathname: '/movie/[id]', params: { id: featuredMovie.id } })} style={styles.watchButton}>
              <Ionicons name="play" size={16} color="#101012" />
              <Text style={styles.watchText}>Explore Movie</Text>
            </Pressable>
          </View>
        </ImageBackground>

        <Section title="Trending Now" movies={trendingMovies} />
        <Section title="Latest Additions" movies={latestMovies} />
        <Section title="Top Rated" movies={[...movies].sort((a,b) => Number(b.rating) - Number(a.rating))} />
        <Section title="Drama" movies={movies.filter((m) => m.genre === 'Drama')} />
        <Section title="Comedy" movies={movies.filter((m) => m.genre === 'Comedy')} />
        <View style={styles.bottomSpace} />
      </ScrollView>
    </View>
  );
}

function Section({ title, movies }: { title: string; movies: typeof trendingMovies }) {
  if (!movies.length) return null;
  return (
    <View style={styles.section}>
      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Pressable onPress={() => router.push('/search')}><Text style={styles.seeAll}>View all</Text></Pressable>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.row}>
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{flex:1,backgroundColor:'#09090A'}, hero:{height:590,justifyContent:'space-between',overflow:'hidden'}, overlay:{...StyleSheet.absoluteFillObject,backgroundColor:'rgba(5,5,6,0.57)'}, top:{paddingTop:58,paddingHorizontal:20,flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start'}, brand:{color:'#D6A84F',fontSize:31,fontWeight:'900',letterSpacing:4}, tagline:{color:'#D0CFCA',fontSize:10,letterSpacing:1.4,marginTop:3}, iconButton:{width:42,height:42,borderRadius:21,backgroundColor:'rgba(16,16,18,0.78)',alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:'#3A3834'}, heroContent:{paddingHorizontal:20,paddingBottom:34}, featureBadge:{alignSelf:'flex-start',backgroundColor:'#D6A84F',paddingHorizontal:10,paddingVertical:5,borderRadius:6}, featureText:{color:'#101012',fontSize:9,fontWeight:'900',letterSpacing:1.4}, heroTitle:{color:'#F6F3EB',fontSize:42,fontWeight:'900',marginTop:10}, heroMeta:{color:'#D4D0C6',marginTop:8,fontSize:13}, heroDesc:{color:'#B8B6B0',lineHeight:20,marginTop:10,maxWidth:360}, watchButton:{marginTop:18,alignSelf:'flex-start',backgroundColor:'#D6A84F',paddingHorizontal:18,paddingVertical:12,borderRadius:24,flexDirection:'row',alignItems:'center',gap:8}, watchText:{color:'#101012',fontWeight:'800',fontSize:13}, section:{marginTop:26}, sectionHead:{paddingHorizontal:20,flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:13}, sectionTitle:{color:'#F4F1EA',fontSize:21,fontWeight:'800'}, seeAll:{color:'#8E8D91',fontSize:12}, row:{paddingHorizontal:20}, bottomSpace:{height:30}
});