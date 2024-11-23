const express = require('express');
const bodyParser = require('body-parser');

const app = express().use(bodyParser.json());
const port = 3000;

const viajes = [
    {id: 1, destino: "Centro de la ciudad", fecha: "2024-11-01", conductor: "Andrés", calificacion: 5.0, urlImg: ""},
    {id: 2, destino: "Aeropuerto", fecha: "2024-11-01", conductor: "Nicolás", calificacion: 5.0, urlImg: ""},
    {id: 3, destino: "Terminal de buses", fecha: "2024-11-01", conductor: "Arturo", calificacion: 5.0, urlImg: ""},
    {id: 4, destino: "Salento", fecha: "2024-11-01", conductor: "Andrea", calificacion: 5.0, urlImg: ""},
    {id: 5, destino: "Circasia", fecha: "2024-11-01", conductor: "Juan", calificacion: 5.0, urlImg: ""}
  ];

const infoviajes = [
    {
      id: 1,
      conductor: "Andrés",
      auto: "Toyota Corolla",
      placa: "ABC123",  
      tiempo_estimado_de_llegada: "14:30",
      destino: "Centro de la ciudad",
      imgUrl: "https://th.bing.com/th/id/OIP.FTnIoIKigcwSSVXo3Lv7kQHaEK?w=260&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
      id: 2,
      conductor: "Nicolás",
      auto: "Honda Civic",
      placa: "DEF456",
      tiempo_estimado_de_llegada: "15:00",
      destino: "Aeropuerto",
      imgUrl: "https://th.bing.com/th/id/OIP.tp3t7VXAFBeMBQXyTy3q8wHaFT?w=225&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
      id: 3,
      conductor: "Arturo",
      auto: "Ford Focus",
      placa: "GHI789",
      tiempo_estimado_de_llegada: "15:30",
      destino: "Terminal de buses",
      imgUrl: "https://th.bing.com/th/id/OIP.KWguEuaoLO_dUVVLwvj3QAHaDT?w=321&h=156&c=7&r=0&o=5&pid=1.7"
    },
    {
      id: 4,
      conductor: "Andrea",
      auto: "Chevrolet Spark",
      placa: "JKL012",
      tiempo_estimado_de_llegada: "16:00",
      destino: "Salento",
      imgUrl: "https://th.bing.com/th/id/OIP.1hcbOaS0GE96AKyOq_RYzgHaE8?w=61&h=61&c=1&rs=1&qlt=90&r=0&pid=InlineBlock"
    },
    {
      id: 5,
      conductor: "Juan",
      auto: "Mazda 3",
      placa: "MNO345",
      tiempo_estimado_de_llegada: "16:30",
      destino: "Circasia",
      imgUrl: "https://th.bing.com/th/id/OIP.1hcbOaS0GE96AKyOq_RYzgHaE8?w=61&h=61&c=1&rs=1&qlt=90&r=0&pid=InlineBlock"
    }
  ];

  const mensajes = {
      explorar: "Nuestra plataforma te permite reservar viajes en cualquier momento y lugar. Con conductores profesionales y precios competitivos, tu experiencia de viaje será siempre cómoda y eficiente. ¡Explora nuevas ciudades y disfruta de tus viajes con nosotros!",
    };

app.get('/viajes', (req, res) => {
  res.json({data: viajes});
});

app.get('/info-viajes', (req, res) => {
  res.json({data: infoviajes});
});

app.get('/mensajes', (req, res) => {
  res.json({data: mensajes});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
