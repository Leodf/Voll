import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type ScreenList = {
  Login: undefined;
  Cadastro: undefined;
  Perfil: undefined;
  Explorar: undefined;
  Consultas: undefined;
  Inicio: undefined;
  Tabs: undefined;
  Agendamento: {especialistaId: string};
};

export type NavigationProps<T extends keyof ScreenList> = {
  navigation: NativeStackNavigationProp<ScreenList, T>;
  route: RouteProp<ScreenList, T>;
};
