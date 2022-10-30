import styled from "styled-components/native";

//родитель и дочерний на однй линии flex-direction: row;
const PostView = styled.View`
flex-direction: row;
padding:15px;
border-radius:30px
border-bottom-width:1px;
border-bottom-color:rgba(0,0,0, 0.1)
border-bottom-style:solid;
`;

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;
//flex:1 выровнялся текст
const PostDetails = styled.View`
  flex: 1;
  justify-content: center;
`;

const PostDate = styled.Text`
font-size:12px;
color:rgba(0,0,0, 0.4)
margin-top:2px;
`;

export const Post = ({ title, imageUrl, createdAt }) => {
  return (
    <PostView>
      <PostImage
        source={{
          uri: imageUrl,
        }}
      />
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostDate>{createdAt}</PostDate>
      </PostDetails>
    </PostView>
  );
};
