// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean mayor que 18

// const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

// const mayorQue18 = ages.filter(elemento => elemento > 18)

// console.log(mayorQue18)

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean par.

// const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

// const pares = ages1.filter(elemento => elemento%2 === 0)

// console.log(pares)

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.

// const streamers = [
// 	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
// 	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
// 	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
// 	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
// ];

// const lolPlayers = streamers.filter((streamer)=>{
//     if(streamer.gameMorePlayed === 'League of Legends'){
//         return streamer
//     }
// })

// console.log(lolPlayers)

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
// usar la funcion .includes() para la comprobación.

// const streamers = [
// 	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
// 	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
// 	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
// 	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
// ];

// const uPlayers = streamers.filter((streamer)=>{
//     return streamer.name.includes('u')
// })

// console.log(uPlayers)

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
// .age sea mayor que 35.

// const legendsAndMore35 = streamers.filter((streamer) =>{
//     if(streamer.gameMorePlayed.includes('Legends') && streamer.age>35){
//         streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
//         return streamer
//     }
// })

// console.log(legendsAndMore35)

// 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
// los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

// const streamerToVerify = () =>{
//     const streamerFilter = streamers.filter(streamer => streamer.name.includes(input.value))
//     console.log(streamerFilter)
// }

// const input = document.querySelector('[data-function="toFilterStreamers"]');
// input.addEventListener("input", streamerToVerify)

// 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
// los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', 
// me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
// En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamerToVerify = (event) =>{
    const input = event.target.previousElementSibling;
    const streamerFilter = streamers.filter(streamer => streamer.name.includes(input.value));
    console.log(streamerFilter);
}

const btn = document.querySelector('[data-function="toShowFilterStreamers"]');
btn.addEventListener("click", streamerToVerify);