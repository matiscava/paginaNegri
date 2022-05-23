import express from "express";
import Quagga from 'quagga';

const app = express(),
  PORT = process.env.PORT || 8080; 

// Quagga.init({
//   inputStream : {
//     name : "Live",
//     type : "LiveStream",
//     target: document.querySelector('#yourElement')    // Or '#yourElement' (optional)
//   },
//   decoder : {
//     readers : ["code_128_reader"]
//   }
// }, function(err) {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log("Initialization finished. Ready to start");
//     Quagga.start();
// });

app.get('/', (req , res) => {
  res.send('Probando');
})
  .listen(PORT);

console.log(`Iniciando Express en el puerto http://localhost:${PORT}`);