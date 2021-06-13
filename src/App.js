import React from "react";
import { SafeAreaView } from "react-native";
//import tailwind from 'tailwind-rn';
import { tailwind } from "lib/tailwind";
import Products from "components/Products";
// import {create} from 'tailwind-rn';
// import styles from '../styles.json';

// const {tailwind, getColor} = create(styles);

const App = () => (
  <SafeAreaView style={tailwind("h-full")}>
    <Products />
  </SafeAreaView>
);

export default App;
