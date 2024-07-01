import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Homescreen() {
  return (
    <View style={styles.container}>

        <View style={styles.Section1}>

            <View>
            <Image style={styles.MenuIcon} source={require('./assets/Menu.png')} />
            </View>

            <View>
            <Image  style={styles.LogoIcon} source={require('./assets/Logo.png')} />
            </View>

            <View style={styles.BagandSearch}>
            <Image style={styles.SearchIcon} source={require('./assets/Search.png')} />
            <Image  style={styles.Bag} source={require('./assets/shoppingBag.png')} />
            </View>

        </View>

        <View style={styles.Section2}>

            <View>
              <Text style={styles.OurStory}>O U R  S T O R Y</Text>
            </View>

            <View style={styles.Filters}>
              <View style={styles.Ellipse}>
              <Image  style={styles.listIcon}source={require('./assets/list.png')} />
              </View>

              <View style={styles.Ellipse}>
              <Image style={styles.filterIcon} source={require('./assets/filter.png')} />
              </View>
            
            </View>

        </View>


      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Section1: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginLeft:15,
    marginRight:15,
    alignItems:'center',
    marginTop:20,
  },
  LogoIcon: {
    marginLeft:50,
  },
  BagandSearch: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  Bag: {
    marginLeft:30,
  },
  Section2: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginLeft:15,
    marginRight:15,
    alignItems:'center',
    marginTop:40,
  },
  OurStory: {
    fontSize:20,
  },
  Filters:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    width:70,
  },
  filterIcon: {
  width:20,
  height:20,
  tintColor:'#ff735b',
  },
  listIcon: {
    tintColor:'#838282',
    width:20,
    height:20,
  },
  Ellipse: {
    marginLeft:-15,
    marginRight:-5,
    backgroundColor:'#f0f0f0',
    width:40,
    height:40,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
  }
});