import {
  Home,
  Upload,
  List,
  Settings,
  BotMessageSquare,
} from "lucide-react-native"; // Import necessary icons
import { View, Text, TouchableOpacity } from "react-native";

const Navigation = ({ state, navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 70,
        backgroundColor: "#fff",
        borderRadius: 15,
        marginHorizontal: 20,
        position: "absolute",
        bottom: 20,
        left: 0,
        right: 0,
        elevation: 5, // Shadow for Android
        shadowColor: "#000", // Shadow for iOS
        shadowOpacity: 0.1,
        shadowRadius: 10,
      }}
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const isUpload = route.name === "Upload";

        // Map route names to icons
        const IconComponent =
          route.name === "Home"
            ? Home
            : route.name === "AI"
            ? BotMessageSquare
            : route.name === "Upload"
            ? Upload
            : route.name === "Task"
            ? List
            : route.name === "Setting"
            ? Settings
            : null;

        // Style for Upload button
        if (isUpload) {
          return (
            <View
              key={index}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate(route.name)}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#007bff",
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  elevation: 5,
                  shadowColor: "#007bff",
                  shadowOpacity: 0.3,
                  shadowRadius: 8,
                }}
              >
                <IconComponent size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          );
        }

        // Style for normal navigation buttons
        return (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(route.name)}
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 50,
              height: 50,
            }}
          >
            {IconComponent && (
              <IconComponent size={24} color={isFocused ? "#007bff" : "#000"} />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Navigation;
