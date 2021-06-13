import React from "react";
import { Text, View } from "react-native";
import { tailwind } from "lib/tailwind";
const Products = () => (
  <View style={tailwind("pt-12 items-center")}>
    <View style={tailwind("bg-blue-200 px-3 py-1 rounded-full")}>
      <Text style={tailwind("text-blue-800 font-semibold")}>
        Hello Tailwind
      </Text>
    </View>
  </View>
);
export default Products;
