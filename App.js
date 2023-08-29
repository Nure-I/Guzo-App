import TourDetailScreen from "./screens/TourDetailScreen";
import TOURS from "./config/TOURS";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
	// return <HomeScreen />;
	return <TourDetailScreen tour={TOURS[3]} />;
}
