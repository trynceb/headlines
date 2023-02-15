require('dotenv').config();
require('./config/database');


const { default: mongoose } = require('mongoose');
const Article = require('./models/article');

mongoose.connect(`${DATABASE_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})

const articles = [
    {
        title: "Elon Musk announces plans for a lunar colony",
        url: "https://www.space.com/elon-musk-lunar-colony-announcement",
        articleId: "3",
        source: {
            domain: "Space.com"
        },
        imageUrl: "https://www.space.com/images/lunar-colony.jpg",
        pubDate: new Date("2022-12-15"),
        description: "SpaceX CEO Elon Musk announces plans to build a self-sustaining city on the moon",
        content: "SpaceX CEO Elon Musk announced plans to build a self-sustaining city on the moon at a press conference today. The lunar colony will be the first step towards creating a permanent human presence on other planets, according to Musk. The colony will be powered by solar panels and will have the ability to grow its own food. The first crew of settlers is expected to arrive on the moon within the next decade.",
        keywords: ["SpaceX", "Elon Musk", "Lunar colony", "Moon"],
        topics: ["Space Exploration"],
        categories: ["Science"],
        companies: ["SpaceX"],
        summary: "SpaceX CEO Elon Musk announces plans to build a self-sustaining city on the moon, powered by solar panels and capable of growing its own food.",
        locations: ["Moon"]
    },
    {
        title: "Scientists discover new exoplanet with potential for life",
        url: "https://www.astronomy.com/news/2022/12/new-exoplanet-discovery",
        articleId: "4",
        source: {
            domain: "Astronomy.com"
        },
        imageUrl: "https://www.astronomy.com/images/new-exoplanet.jpg",
        pubDate: new Date("2022-12-20"),
        description: "Scientists discover a new exoplanet in a habitable zone with the potential to support life",
        content: "A team of scientists have discovered a new exoplanet located in the habitable zone of its star. The exoplanet, named Kepler-438b, has a similar size and temperature to Earth and is located in a position where liquid water could exist on its surface. The discovery marks a major milestone in the search for extraterrestrial life. Further studies will be conducted to determine if Kepler-438b is capable of supporting life.",
        keywords: ["Exoplanet", "Kepler-438b", "Habitable zone", "Extraterrestrial life"],
        topics: ["Astronomy", "Space Exploration"],
        categories: ["Science"],
        companies: [],
        summary: "A team of scientists discover a new exoplanet, Kepler-438b, in the habitable zone with the potential to support life.",
        locations: []
    },
    {
        title: "Volcano in Hawaii erupts, causing widespread damage",
        url: "https://www.geology.com/news/2022/05/hawaii-volcano-eruption",
        articleId: "5",
        source: {
            domain: "Geology.com"
        },
        imageUrl: "https://www.geology.com/images/hawaii-volcano.jpg",
        pubDate: new Date("2022-05-12"),
        description: "A volcano in Hawaii has erupted, causing widespread damage and evacuations",
        content: "The Kilauea volcano in Hawaii has erupted, causing widespread damage and leading to evacuations in the surrounding areas. Lava flows have destroyed several homes and buildings, and the ash cloud from the eruption is affecting air traffic. The eruption is the first significant activity from Kilauea since 2018, and geologists are monitoring the situation closely. The eruption is a reminder of the powerful forces of nature and the potential impact they can have on communities.",
        keywords: ["Volcano", "Hawaii", "Kilauea", "Eruption"],
        topics: ["Geology", "Natural Disasters"],
        categories: ["Science"],
        companies: [],
        summary: "The Kilauea volcano in Hawaii has erupted, causing widespread damage and evacuations in the surrounding areas.",
        locations: ["Hawaii"]
    },
    {
        title: "Bitcoin reaches new all-time high, surpassing $60,000",
        url: "https://www.crypto.com/news/2022/03/bitcoin-all-time-high",
        articleId: "6",
        source: {
            domain: "Crypto.com"
        },
        imageUrl: "https://www.crypto.com/images/bitcoin.jpg",
        pubDate: new Date("2022-03-15"),
        description: "Bitcoin has reached a new all-time high, surpassing $60,000 per coin",
        content: "Bitcoin has reached a new all-time high, surpassing $60,000 per coin. The cryptocurrency has been on a bullish trend for several months, driven by increased institutional adoption and a growing interest from individual investors. Experts predict that the current trend could continue, with some projecting that the price of bitcoin could reach $100,000 or more in the next few years. While there is some uncertainty in the market, many believe that the future of finance is increasingly tied to cryptocurrencies like bitcoin.",
        keywords: ["Bitcoin", "Cryptocurrency", "All-time high"],
        topics: ["Finance", "Technology"],
        categories: ["Business"],
        companies: [],
        summary: "Bitcoin has reached a new all-time high, surpassing $60,000 per coin, driven by increased institutional adoption and a growing interest from individual investors.",
        locations: []
    },
    {
        title: "New Pokemon game announced for 2022 release",
        url: "https://www.pokemongame.com/news/2021/12/new-game-announced",
        articleId: "7",
        source: {
            domain: "PokemonGame.com"
        },
        imageUrl: "https://www.pokemongame.com/images/new-game.jpg",
        pubDate: new Date("2021-12-01"),
        description: "The Pokemon Company has announced a new Pokemon game for 2022 release",
        content: "The Pokemon Company has announced a new Pokemon game for 2022 release. The game, which is currently untitled, will feature new Pokemon, new regions to explore, and new gameplay mechanics. Fans of the franchise are excited for the new addition to the series and are eager to see what the developers have in store for them. The new game will be available on Nintendo Switch, as well as mobile devices. The Pokemon Company has promised to reveal more details about the game in the coming months.",
        keywords: ["Pokemon", "Game", "Announcement"],
        topics: ["Video Games", "Entertainment"],
        categories: ["Gaming"],
        companies: ["The Pokemon Company"],
        summary: "The Pokemon Company has announced a new Pokemon game for 2022 release, featuring new Pokemon, regions, and gameplay mechanics.",
        locations: []
    }
  ];

  async function seedArticles() {
    try {
      await Article.deleteMany(); // remove existing articles
      await Article.create(articles); // add new articles
      console.log('Database seeded');
    } catch (err) {
      console.error(err);
    } finally {
      mongoose.disconnect(); // close the database connection
    }
  }
  
seedArticles();


// // IIFE - Immediately Invoked Function Expression
// (async function() {

//   await Article.deleteMany({});
//   const articles = await Article.create([
      
// ])

//   console.log(articles)

//   process.exit();

// })();


