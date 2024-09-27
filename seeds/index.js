const mongoose = require('mongoose');
const cities = require('./cities');
const {places, discriptors, descriptors} = require('./seedHelpers')
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/rahi-trail');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random()*array.length)];

const seedDB = async ()=> {
    await Campground.deleteMany({});
    for (let i=0;i<5;i++){
        const random1000 = Math.floor(Math.random()*1000);
        const price = Math.floor(Math.random()*20)+ 10;
        const camp = new Campground({
            author: '66f2589a5112413847966f16',
            location: `${cities[random1000].city},${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit similique accusamus vitae perspiciatis ipsam saepe.",
            price,
            geometry: { 
                type: 'Point', coordinates: [ 
                    cities[random1000].longitude,
                    cities[random1000].latitude
                ]
                },
            images: [{
                url: 'https://res.cloudinary.com/dcbo3qlh9/image/upload/v1727349147/RahiTrails/ax7jauoxeqvzn3ing0qp.jpg',
                filename: 'RahiTrails/ax7jauoxeqvzn3ing0qp',
                }]
        })
        await camp.save();
    }
}

seedDB().then(()=>{
    mongoose.Connection.close();
});