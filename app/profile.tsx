import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Row = ({icon, label}: {icon: any, label: string}) => <TouchableOpacity style={styles.row}><Ionicons name={icon} size={21} color="#aaa" /><Text style={styles.rowText}>{label}</Text><Ionicons name="chevron-forward" size={17} color="#555" /></TouchableOpacity>;

export default function Profile() {
  return <View style={styles.root}><View style={styles.header}><TouchableOpacity onPress={() => router.back()}><Ionicons name="arrow-back" size={24} color="#fff" /></TouchableOpacity><Text style={styles.title}>Profile</Text><View style={{width:24}} /></View><View style={styles.profile}><View style={styles.avatar}><Text style={styles.avatarText}>V</Text></View><Text style={styles.name}>VIRSA Member</Text><Text style={styles.sub}>Punjabi Cinema • One Home</Text></View><View style={styles.menu}><Row icon="heart-outline" label="My Favorites" /><Row icon="notifications-outline" label="Notifications" /><Row icon="settings-outline" label="Settings" /><Row icon="information-circle-outline" label="About VIRSA" /></View></View>;
}
const styles=StyleSheet.create({root:{flex:1,backgroundColor:'#090909',padding:22,paddingTop:62},header:{flexDirection:'row',justifyContent:'space-between',alignItems:'center'},title:{color:'#fff',fontSize:20,fontWeight:'800'},profile:{alignItems:'center',marginTop:55},avatar:{width:82,height:82,borderRadius:41,backgroundColor:'#d6a85b',alignItems:'center',justifyContent:'center'},avatarText:{fontSize:34,fontWeight:'900',color:'#111'},name:{color:'#fff',fontSize:20,fontWeight:'800',marginTop:16},sub:{color:'#777',fontSize:12,marginTop:5},menu:{marginTop:45},row:{height:58,borderBottomWidth:1,borderBottomColor:'#181818',flexDirection:'row',alignItems:'center',gap:15},rowText:{color:'#ddd',fontSize:14,fontWeight:'700',flex:1}});
