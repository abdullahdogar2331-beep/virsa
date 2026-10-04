import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Favorites() {
  return <View style={styles.root}><View style={styles.header}><Text style={styles.logo}>VIRSA</Text><TouchableOpacity onPress={() => router.back()}><Ionicons name="close" size={24} color="#fff" /></TouchableOpacity></View><View style={styles.center}><Ionicons name="heart-outline" size={54} color="#3a3a3a" /><Text style={styles.title}>Your favorites</Text><Text style={styles.text}>Movies you save will appear here.</Text></View></View>;
}
const styles=StyleSheet.create({root:{flex:1,backgroundColor:'#090909',padding:22,paddingTop:62},header:{flexDirection:'row',justifyContent:'space-between',alignItems:'center'},logo:{color:'#d6a85b',fontSize:24,fontWeight:'900',letterSpacing:4},center:{flex:1,alignItems:'center',justifyContent:'center',paddingBottom:100},title:{color:'#ddd',fontSize:20,fontWeight:'800',marginTop:14},text:{color:'#666',fontSize:13,marginTop:7}});
