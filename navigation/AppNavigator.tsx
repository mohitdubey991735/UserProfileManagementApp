import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import Step1BasicInfo from "../screens/Step1BasicInfo";
import Step2Address from "../screens/Step2Address";
import Step3Summary from "../screens/Step3Summary";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Step1" component={Step1BasicInfo} />
      <Stack.Screen name="Step2" component={Step2Address} />
      <Stack.Screen name="Step3" component={Step3Summary} />
    </Stack.Navigator>
  );
}
