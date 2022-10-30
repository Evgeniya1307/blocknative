import { StatusBar } from 'expo-status-bar';
import {Text, View, Image } from 'react-native';
import styled from 'styled-components/native';

//родитель и дочерний на однй линии flex-direction: row;
const Post = styled.View`
flex-direction: row;
padding:15px;
border-radius:30px
border-bottom-width:1px;
border-bottom-color:rgba(0,0,0, 0.1)
border-bottom-style:solid;
`;

const PostImage= styled.Image`
width:60px;
height:60px;
border-radius:12px;
margin-right:12px;
`;

const PostTitle = styled.Text`
font-size:16px;
font-weight:700;
`;
const PostDetails = styled.View`

`

const PostDate= styled.Text`
font-size:12px;
color:rgba(0,0,0, 0.4)
margin-top:2px;
`;

export default function App() {
  return (
    <View >
      <Post>
<PostImage source={{uri: 'https://img2.akspic.ru/previews/9/6/8/8/6/168869/168869-oblako-atmosfera-samolety-samolet-derevo-500x.jpg'}}/>
      <PostDetails>
      <PostTitle>Тестовая</PostTitle>
      <PostDate>30/10/2022</PostDate>
      </PostDetails>
</Post>
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
