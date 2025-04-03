import '../global.css';
import { Stack } from "expo-router";
import { Provider } from 'app/provider'



export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: "(tabs)",
};


export default function RootLayout() {
  	
    

  return (
		<Provider>
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="modal" options={{ presentation: "modal" }} />
			</Stack>
		</Provider>
  	);
}
