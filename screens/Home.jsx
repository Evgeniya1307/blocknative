import React from "react";
import axios from "axios";
import { Text, Alert, View, FlatList, ActivityIndicator,RefreshControl, TouchableOpacity,} from "react-native";
import { Post } from "../components/Post";


//render all articles
export const HomeScreen =({navigation})=> {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState(); //стэйт для статей

  const fetchPosts = () => {
    //делает запрос
    setIsLoading(true); //поставь загрузку
    axios
      .get("https://635c0a0b66f78741d5907e85.mockapi.io/posts")
      .then(({ data }) => {
        //в момент получения ответа с помощью деструктуриз вытащить data
        setItems(data);
      })
      .catch((err) => {
        //если ошибка оповести пользователя
        console.log(err);
        Alert.alert("Ошибка", "Не удалось получить статьи");
      })
      .finally(() => {
        setIsLoading(false); //изменения state на false
      });
  };

  React.useEffect(fetchPosts, []);
  if (isLoading) {
    //если идёт загрузка
    return (
      <View
      style={{
        flex: 1, //на всю ширину
        justifyContent: "center",
        alignItems: "center",
      }}>
        <ActivityIndicator size="large" />
        {/*чтобы рендерить загрузку пометила иконку загрузки */}
        <Text style={{marginTop:15}}>Загрузка...</Text>
      </View>
    );
  }
//если загрузка false
  return (
    <View>
      <FlatList
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
      }//обновление,перезагрузка, как свайп отпустила выполнить fetchPosts
        data={items} //массив статей
        renderItem={({ item }) => (
         
          //оп-ет было ли действме на определён элемент TouchableOpacity
          <TouchableOpacity
          onPress={() => navigation.navigate('FullPost', { id: item.id, title: item.title })}>
          <Post title={item.title} imageUrl={item.imageUrl} createdAt={item.createdAt} />
        </TouchableOpacity>
        )} 
      />
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
//<TouchableOpacity onPress={()=>alert('TOUCHED')}> при клике покажется окошко т,е отлавливаю действие