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
    for (let i=0;i<50;i++){
        const random1000 = Math.floor(Math.random()*1000);
        const price = Math.floor(Math.random()*20)+ 10;
        const camp = new Campground({
            author: '66f2589a5112413847966f16',
            location: `${cities[random1000].city},${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit similique accusamus vitae perspiciatis ipsam saepe.",
            price,
            images: [
                {
                    url: 'https://res.cloudinary.com/dcbo3qlh9/image/upload/v1727267471/RahiTrails/fs5ifoo8hh973ftgr3li.png',
                    filename: 'RahiTrails/fs5ifoo8hh973ftgr3li',
                },
                {
                    url: 'https://res.cloudinary.com/dcbo3qlh9/image/upload/v1727267471/RahiTrails/itsydqyngdvo3uevioy0.png',
                    filename: 'RahiTrails/itsydqyngdvo3uevioy0',
                },
                {
                    url: 'https://res.cloudinary.com/dcbo3qlh9/image/upload/v1727267472/RahiTrails/l6b61akubmy9nridj47g.png',
                    filename: 'RahiTrails/l6b61akubmy9nridj47g',
                }]
        })
        await camp.save();
        console.log(camp);
    }
}

seedDB().then(()=>{
    mongoose.Connection.close();
});