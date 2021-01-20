import { Processor } from '../src/lib';

const processor = new Processor();
console.log(processor.interpret('font-bold text-green-300 @dark:font-medium @dark:p-4 -sm:border +sm:float-right md|-md: hover:  (bg-black-300 text-gray-200   text-lg dark:(bg-black-300 text-gray-200)) md:text-red-500 hover:  text-red-300 text-green-300 sm:hover:bg-red-500 dark:hover:bg-black-300 sm:dark:hover:bg-gray-300 abc bg-cool-gray-300 bg-hex-fff bg-rgb(32,31,22) bg-raw(#fff) bg-rgba(255, 0, 0, 0.3) bg-hsl(0, 100%, 25%) bg-hsla(0, 100%, 50%, 0.5)'));