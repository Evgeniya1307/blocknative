//при клике на стью переходило на следующую статью
//отображение будет 2 экрана главной страницы и экран полной записи
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';//делаю навигацию
import { FullPostScreen } from './FullPost';

import { HomeScreen } from './Home';

const Stack = createNativeStackNavigator();

// <Routes>....</Routes> => Stack.Navigator

export const Navigation = () => {
  //этот компонент получает спец разметку
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Новости' }} />{/*первый экран главной страницы component={HomeScreen} то что рендерю*,options={{}}загаловок экрана который отображается вверху*/}
    <Stack.Screen name="FullPost" component={FullPostScreen} options={{ title: 'Статья' }} />
    </Stack.Navigator>
    </NavigationContainer>
  ); 
};



// </Stack.Navigator>что то вроде <Routes>внутри мои роуты которые есть</Routes>