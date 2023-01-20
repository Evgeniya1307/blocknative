import axios from "axios";
import React from "react";
import { Alert, View ,Text} from "react-native";
import styled from "styled-components/native";
import {Loading} from "../components/Loading";

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;
const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;


//полная запись
 export const FullPostScreen = () => {
  const [isLoading, setIsLoading] = React.useState(true);//loading
  const [data, setData] = useState();//storage of articles
  const { id, title } = route.params;

React.useEffect(()=>{
  navigation.setOptions({
    title,
  });
  axios
    .get("https://635c0a0b66f78741d5907e85.mockapi.io/posts/" + id)
    .then(({ data }) => {
      setData(data);//сохраняю в стейт
    })
    .catch((err) => {//если ошибка показываю
      console.log(err);
      Alert.alert("Ошибка", "Не удалось получить статью");
    })
    .finally(() => {//если нет останавливаю загрузку
      setIsLoading(false);
    });
}, []);

if (isLoading) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Loading />
    </View>
  );
}


  return (
    <View style={{ padding: 20 }}>
      <PostImage
        source={{
          uri: data.imageUrl,
        }}
      />
      <PostText>{data.text}</PostText>
    </View>
  );
};

export default FullPostScreen;
