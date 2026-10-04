import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Watch() {
  return <View style={styles.root}><View style={styles.player}><Ionicons name="logo-youtube" size={62} color="#d6a85b" /><Text style={styles.playerTitle}>Official YouTube Player</Text><Text style={styles.playerText}>Authorized movie playback will appear here.</Text></View><View style={styles.bar}><TouchableOpacity onPress={() => router.back()}><Ionicons name="arrow-back" size={24} color="#fff" /></TouchableOpacity><Text style={styles.title}>Watch Movie</Text><View style={{width:24}} /></View></View>;
}
const styles=StyleSheet.create({root:{flex:1,backgroundColor:'#050505'},bar:{position:'absolute',top:58,left:20,right:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center'},title:{color:'#fff',fontSize:17,fontWeight:'800'},player:{flex:1,alignItems:'center',justifyContent:'center',padding:35},playerTitle:{color:'#fff',fontSize:20,fontWeight:'800',marginTop:18},playerText:{color:'#666',fontSize:13,textAlign:'center',marginTop:8,maxWidth:270}});
