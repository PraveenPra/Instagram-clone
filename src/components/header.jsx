import { View ,Image,Text} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
function Header() {
  return (
    <View style={{
      // borderBottom:'1px solid lightgrey',
      padding:12,backgroundColor: 'white',}}>
       <View style={{width:100,height:50,flex:1}}>
       <img src={require('../../assets/name-text.png')} alt='Insta-Name'/>
       </View>
       {/* <FontAwesomeIcon icon="fa-regular fa-paper-plane" /> */}
       {/* <FontAwesomeIcon icon="mug-saucer" /> */}
    </View>
  )
}

export default Header