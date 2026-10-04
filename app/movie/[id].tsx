import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { movies } from '@/data/movies';
import { isFavorite, toggleFavorite } from '@/lib/favorites';

export default function MovieDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const movie = movies.find((item) => item.id === id) ?? movies[0];
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    isFavorite(movie.id).then(setFavorite);
  }, [movie.id]);

  const handleFavorite = async () => {
    const next = await toggleFavorite(movie.id);
    setFavorite(next);
  };

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={{ uri: movie.backdrop }} style={styles.hero}>
          <View style={styles.overlay} />
          <Pressable onPress={() => router.back()} style={styles.back}><Ionicons name="arrow-back" size={21} color="#F4F1EA" /></Pressable>
          <Pressable onPress={handleFavorite} style={styles.favorite}><Ionicons name={favorite ? 'heart' : 'heart-outline'} size={21} color={favorite ? '#111113' : '#F4F1EA'} /></Pressable>
          <View style={styles.heroBottom}><Text style={styles.heroBrand}>VIRSA CATALOG</Text></View>
        </ImageBackground>
        <View style={styles.content}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.meta}>{movie.year}  •  {movie.genre}  •  {movie.duration}  •  {movie.rating} ★</Text>
          <Text style={styles.description}>{movie.description}</Text>
          <View style={styles.actions}>
            <Pressable onPress={() => router.push({ pathname: '/watch/[id]', params: { id: movie.id } })} style={styles.button}>
              <Ionicons name="play" size={17} color="#111113" /><Text style={styles.buttonText}>Watch Movie</Text>
            </Pressable>
            <Pressable onPress={handleFavorite} style={[styles.saveButton, favorite && styles.saveButtonActive]}>
              <Ionicons name={favorite ? 'heart' : 'heart-outline'} size={19} color={favorite ? '#111113' : '#F4F1EA'} />
              <Text style={[styles.saveText, favorite && styles.saveTextActive]}>{favorite ? 'Saved' : 'Save'}</Text>
            </Pressable>
          </View>
          <View style={styles.info}>
            <Text style={styles.infoLabel}>OFFICIAL PLAYBACK</Text>
            <Text style={styles.infoText}>VIRSA connects authorized YouTube uploads. Movies are not downloaded or re-hosted by the app.</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{flex:1,backgroundColor:'#09090A'}, hero:{height:430,justifyContent:'space-between'}, overlay:{...StyleSheet.absoluteFillObject,backgroundColor:'rgba(5,5,6,0.42)'}, back:{marginTop:58,marginLeft:18,width:42,height:42,borderRadius:21,backgroundColor:'rgba(12,12,14,0.78)',alignItems:'center',justifyContent:'center'}, favorite:{position:'absolute',top:58,right:18,width:42,height:42,borderRadius:21,backgroundColor:'rgba(12,12,14,0.78)',alignItems:'center',justifyContent:'center'}, heroBottom:{padding:22,paddingBottom:25}, heroBrand:{color:'#D6A84F',fontSize:10,fontWeight:'900',letterSpacing:1.8}, content:{padding:22,paddingBottom:55}, title:{color:'#F4F1EA',fontSize:32,fontWeight:'900'}, meta:{color:'#D6A84F',marginTop:9,fontSize:13,fontWeight:'700'}, description:{color:'#AAA9AE',lineHeight:23,marginTop:18,fontSize:15}, actions:{flexDirection:'row',alignItems:'center',gap:10,marginTop:23}, button:{backgroundColor:'#D6A84F',borderRadius:24,paddingVertical:14,paddingHorizontal:18,flexDirection:'row',alignItems:'center',gap:8}, buttonText:{color:'#111113',fontWeight:'900'}, saveButton:{borderWidth:1,borderColor:'#38383D',borderRadius:24,paddingVertical:13,paddingHorizontal:16,flexDirection:'row',alignItems:'center',gap:7}, saveButtonActive:{backgroundColor:'#D6A84F',borderColor:'#D6A84F'}, saveText:{color:'#F4F1EA',fontWeight:'800'}, saveTextActive:{color:'#111113'}, info:{marginTop:32,borderTopWidth:1,borderTopColor:'#27272B',paddingTop:18}, infoLabel:{color:'#6E6E73',fontSize:10,letterSpacing:1.6,fontWeight:'800'}, infoText:{color:'#8F8E93',marginTop:7,lineHeight:20}
});