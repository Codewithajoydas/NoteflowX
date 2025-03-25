import { View, Text, TextInput } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View>
      <TextInput
        placeholder="Search"
        style={{
          borderWidth: 1,
          borderColor: "gray",
          borderRadius: 10,
          paddingHorizontal: 10,
          marginHorizontal: 20,
          marginTop: 20,
        }}
      />
    </View>
  );
};

export default Home;
