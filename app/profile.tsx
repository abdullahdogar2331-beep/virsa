import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Row({ icon, label, onPress }: { icon: keyof typeof Ionicons.glyphMap; label: string; onPress?: () => void }) {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress} activeOpacity={0.75}>
      <Ionicons name={icon} size={21} color="#aaa" />
      <Text style={styles.rowText}>{label}</Text>
      <Ionicons name="chevron-forward" size={17} color="#555" />
    </TouchableOpacity>
  );
}

export default function Profile() {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.icon}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.profile}>
        <View style={styles.avatar}><Text style={styles.avatarText}>V</Text></View>
        <Text style={styles.name}>VIRSA Member</Text>
        <Text style={styles.sub}>Punjabi Cinema • One Home</Text>
      </View>

      <View style={styles.menu}>
        <Row icon="heart-outline" label="My Favorites" onPress={() => router.push('/favorites')} />
        <Row icon="search-outline" label="Discover Movies" onPress={() => router.push('/search')} />
        <Row icon="information-circle-outline" label="About VIRSA" />
        <View style={styles.about}>
          <Text style={styles.aboutTitle}>VIRSA</Text>
          <Text style={styles.aboutText}>A cinematic home for discovering Punjabi movies through authorized official sources.</Text>
          <Text style={styles.version}>Version 1.0.0</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root:{flex:1,backgroundColor:'#090909',padding:22,paddingTop:62}, header:{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}, icon:{width:40,height:40,borderRadius:20,backgroundColor:'#151515',alignItems:'center',justifyContent:'center'}, title:{color:'#fff',fontSize:20,fontWeight:'800'}, profile:{alignItems:'center',marginTop:42}, avatar:{width:82,height:82,borderRadius:41,backgroundColor:'#d6a85b',alignItems:'center',justifyContent:'center'}, avatarText:{fontSize:34,fontWeight:'900',color:'#111'}, name:{color:'#fff',fontSize:20,fontWeight:'800',marginTop:16}, sub:{color:'#777',fontSize:12,marginTop:5}, menu:{marginTop:42}, row:{height:58,borderBottomWidth:1,borderBottomColor:'#181818',flexDirection:'row',alignItems:'center',gap:15}, rowText:{color:'#ddd',fontSize:14,fontWeight:'700',flex:1}, about:{marginTop:28,padding:18,borderRadius:16,backgroundColor:'#111114',borderWidth:1,borderColor:'#202024'}, aboutTitle:{color:'#d6a85b',fontSize:17,fontWeight:'900',letterSpacing:2}, aboutText:{color:'#777',fontSize:12,lineHeight:19,marginTop:8}, version:{color:'#444',fontSize:11,marginTop:12}
});