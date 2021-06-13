import {create} from 'tailwind-rn';
import styles from './styles.json';

const {tailwind, getColor} = create(styles);

let css=tailwind('bg-primary text-opacity-50');
console.log("dedesd")
console.log(css)