import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
//import tailwind from 'tailwind-rn';
import {create} from 'tailwind-rn';
import styles from './styles.json';

const {tailwind, getColor} = create(styles);

tailwind('text-blue-500 text-opacity-50');

const App = () => (
	<SafeAreaView style={tailwind('h-full')}>
		<View style={tailwind('pt-12 items-center')}>
			<View style={tailwind('bg-primary px-3 py-1 rounded-full')}>
				<Text style={tailwind('text-blue-800 font-semibold')}>
					Hello Tailwind
				</Text>
			</View>
		</View>
	</SafeAreaView>
);

export default App;