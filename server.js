const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Información simulada de pilotos de F1
const drivers = [
  {
    id: 1,
    name: 'Lando Norris',
    position: '1º',
    team: 'McLaren',
    imageUrl: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/norris',
    teamLogo: 'https://cdn.inspireuplift.com/uploads/images/seller_products/29868/1702914923_McLarenPapayaLogo.png'
  },
  {
    id: 2,
    name: 'Max Verstappen',
    position: '2º',
    team: 'Red Bull',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Max_Verstappen_2017_Malaysia_3.jpg/640px-Max_Verstappen_2017_Malaysia_3.jpg',
    teamLogo: 'https://brandlogo.org/wp-content/uploads/2024/04/Oracle-Red-Bull-Racing-Logo-300x300.png.webp'
  },
  {
    id: 3,
    name: 'Charles Leclerc',
    position: '3º',
    team: 'Ferrari',
    imageUrl: 'https://cdn-7.motorsport.com/images/mgl/YMdm7R32/s8/charles-leclerc-ferrari.jpg',
    teamLogo: 'https://logos-world.net/wp-content/uploads/2020/05/Ferrari-Emblem.png'
  }
];

app.get('/api/drivers', (req, res) => {
  res.json(drivers);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
