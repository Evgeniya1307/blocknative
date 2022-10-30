import React from 'react';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import {Text, Alert, View, FlatList, ActivityIndicator } from 'react-native';
import { Post } from './components/Post';


export default function App() {
 const [isLoading, setIsLoading]=React.useState(true);
 const [items, setItems] = React.useState();//стэйт для статей


const fetchPosts=()=>{ //делает запрос
 setIsLoading(true)//поставь загрузку
  axios.get('https://635c0a0b66f78741d5907e85.mockapi.io/posts')
.then(({data})=>{//в момент получения ответа с помощью деструктуриз вытащить data 
setItems(data);
}).catch(err=>{//если ошибка оповести пользователя
  console.log(err);
  Alert.alert('Ошибка', 'Не удалось получить статьи');
}).finally(()=>{
  setIsLoading(false);//изменения state на false
});
}

React.useEffect(fetchPosts,[]);


  return (
    <View >
    <ActivityIndicator size="large"/>{/*чтобы рендерить загрузку пометила иконку загрузки */}
<FlatList
data={items}//массив статей
renderItem={({item})=> (
<Post 
    title={item.title}
 createdAt={item.createdAt}
   imageUrl={item.imageUrl}/>
 )}//рендерю каждую статью
 />
 
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
