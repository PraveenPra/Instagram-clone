import { View ,Image,Text} from 'react-native'
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

function Header() {
  return (
    <View style={{
     
      padding:12,backgroundColor: 'white',flexDirection:'row',justifyContent:'space-between'}}>

        <View style={{flexDirection:'row',}}>
       <View style={{width:100,height:50,}}>
       <img src={require('../../assets/name-text.png')} alt='Insta-Name'/>
       </View>
       <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
       </View>


       <View style={{flexDirection:'row'}}>
       <Octicons name="diff-added" size={24} style={{marginRight:30}}/>
       <Feather name="send" size={24} />
       </View>
    </View>
  )
}

export default Header