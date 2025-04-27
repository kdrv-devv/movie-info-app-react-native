import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigation from './src/navigations/app.navigation';

export default function App() {
  return (
    <GestureHandlerRootView  >
      <AppNavigation />
    </GestureHandlerRootView>
  );
}


