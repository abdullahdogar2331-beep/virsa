import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { movies } from '@/data/movies';

export default function Watch() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const movie = movies.find((item) => item.id === id) ?? movies[0];

  const openYouTube = async () => {
    if (!movie.youtubeId) return;
    await Linking.openURL(`https://www.youtube.com/watch?v=${movie.youtubeId}`);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.icon}><Ionicons name="arrow-back" size={23} color="#F4F1EA" /></Pressable>
        <Text style={styles.brand}>VIRSA</Text>
        <View style={{ width: 42 }} />
      </View>

      <View style={styles.player}>
        <View style={styles.youtubeCircle}><Ionicons name="logo-youtube" size={43} color="#D6A84F" /></View>
        <Text style={styles.playerTitle}>{movie.youtubeId ? 'Ready to Watch' : 'Official YouTube Player'}</Text>
        <Text style={styles.playerCopy}>
          {movie.youtubeId
            ? 'This title is connected to an authorized YouTube video.'
            : 'This demo title is waiting for its authorized YouTube video ID.'}
        </Text>
        {movie.youtubeId && (
          <Pressable onPress={openYouTube} style={styles.watchButton}>
            <Ionicons name="play" size={16} color="#111113" />
            <Text style={styles.watchText}>Watch on YouTube</Text>
          </Pressable>
        )}
      </View>

      <View style={styles.details}>
        <Text style={styles.kicker}>NOW PLAYING</Text>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.meta}>{movie.year}  •  {movie.genre}  •  {movie.duration}  •  ★ {movie.rating}</Text>
        <View style={styles.notice}>
          <Ionicons name="shield-checkmark-outline" size={20} color="#D6A84F" />
          <Text style={styles.noticeText}>VIRSA only uses official/authorized YouTube playback and does not host movie files.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{flex:1,backgroundColor:'#09090A'}, header:{paddingTop:56,paddingHorizontal:20,paddingBottom:15,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}, icon:{width:42,height:42,borderRadius:21,backgroundColor:'#151518',alignItems:'center',justifyContent:'center'}, brand:{color:'#D6A84F',fontWeight:'900',letterSpacing:3,fontSize:18}, player:{aspectRatio:16/9,backgroundColor:'#151518',alignItems:'center',justifyContent:'center',padding:28}, youtubeCircle:{width:78,height:78,borderRadius:39,backgroundColor:'#202024',alignItems:'center',justifyContent:'center'}, playerTitle:{color:'#F4F1EA',fontSize:19,fontWeight:'800',marginTop:14}, playerCopy:{color:'#85858A',textAlign:'center',marginTop:7,lineHeight:20,maxWidth:320}, watchButton:{marginTop:17,backgroundColor:'#D6A84F',borderRadius:22,paddingVertical:11,paddingHorizontal:16,flexDirection:'row',alignItems:'center',gap:7}, watchText:{color:'#111113',fontWeight:'900'}, details:{padding:22}, kicker:{color:'#6E6E73',fontSize:10,fontWeight:'900',letterSpacing:1.5}, title:{color:'#F4F1EA',fontSize:28,fontWeight:'900',marginTop:7}, meta:{color:'#D6A84F',marginTop:8,fontSize:13,fontWeight:'700'}, notice:{marginTop:28,padding:15,borderRadius:14,borderWidth:1,borderColor:'#29292D',backgroundColor:'#111114',flexDirection:'row',gap:11}, noticeText:{flex:1,color:'#85858A',fontSize:12,lineHeight:18}
});