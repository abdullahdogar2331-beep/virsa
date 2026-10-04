import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const genres = ['All', 'Comedy', 'Drama', 'Action', 'Family'];

export default function Search() {
  const [query, setQuery] = useState('');
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><Ionicons name="arrow-back" size={24} color="#fff" /></TouchableOpacity>
        <Text style={styles.title}>Search</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.inputWrap}>
        <Ionicons name="search" size={19} color="#777" />
        <TextInput value={query} onChangeText={setQuery} placeholder="Search Punjabi movies..." placeholderTextColor="#666" style={styles.input} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.genres}>
        {genres.map((g, i) => <View key={g} style={[styles.pill, i === 0 && styles.pillActive]}><Text style={[styles.pillText, i === 0 && styles.pillTextActive]}>{g}</Text></View>)}
      </ScrollView>
      <View style={styles.empty}>
        <Ionicons name="film-outline" size={46} color="#333" />
        <Text style={styles.emptyTitle}>{query ? 'No results yet' : 'Find your next Punjabi movie'}</Text>
        <Text style={styles.emptyText}>Search will connect to the VIRSA movie catalogue.</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  root:{flex:1,backgroundColor:'#090909',paddingTop:58}, header:{paddingHorizontal:20,flexDirection:'row',alignItems:'center',justifyContent:'space-between'},title:{color:'#fff',fontSize:20,fontWeight:'800'},inputWrap:{margin:22,marginBottom:10,height:52,borderRadius:14,backgroundColor:'#151515',borderWidth:1,borderColor:'#222',flexDirection:'row',alignItems:'center',paddingHorizontal:15,gap:10},input:{flex:1,color:'#fff',fontSize:15},genres:{paddingHorizontal:22,gap:9},pill:{paddingHorizontal:16,paddingVertical:9,borderRadius:20,backgroundColor:'#151515'},pillActive:{backgroundColor:'#d6a85b'},pillText:{color:'#999',fontSize:12,fontWeight:'700'},pillTextActive:{color:'#111'},empty:{flex:1,alignItems:'center',justifyContent:'center',paddingBottom:100},emptyTitle:{color:'#ddd',fontSize:17,fontWeight:'800',marginTop:15},emptyText:{color:'#666',fontSize:13,marginTop:7}
});