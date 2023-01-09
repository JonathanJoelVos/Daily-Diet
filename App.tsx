import { Home } from '@screens/Home';
import {  Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import themes from './src/themes';
import {useFonts ,NunitoSans_400Regular, NunitoSans_700Bold} from '@expo-google-fonts/nunito-sans';
import { Loading } from '@components/Loading';
import { Router } from '@routes/index';
import { FoodContainer } from '@components/ListFoodInformationForDate';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  });

  return (
      <ThemeProvider theme={themes}>
        {
          fontsLoaded ?  <Router /> : <Loading />
        }
      </ThemeProvider>
  );
};
