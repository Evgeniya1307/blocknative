import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import {Text, View, Image } from 'react-native';
import { Post } from './components/Post';


export default function App() {
 //стэйт для статей
 const [items, setItems] = React.useState();

ReactIs.useEffect(() => {
axios.get('https://635c0a0b66f78741d5907e85.mockapi.io/articles')
.then(({data})=>{//в момент получения ответа с помощью деструктуриз вытащить data 
setItems(data);
}).catch(err=>{//если ошибка оповести пользователя
  console.log()
});
}, [])

  return (
    <View >
      <Post title='Тест'
       imageUrl='https://img2.akspic.ru/previews/9/6/8/8/6/168869/168869-oblako-atmosfera-samolety-samolet-derevo-500x.jpg'
       createdAt='30/10/2022'/>
      <StatusBar theme= "auto"/>
    </View>
  );
}




// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
