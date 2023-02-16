require('dotenv').config();
require('./config/database');

const { default: mongoose } = require('mongoose');
const Article = require('./models/article');

mongoose.connect(`${process.env.DATABASE_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})

const articles = [
    {
        title: "Elon Musk announces plans for a lunar colony",
        url: "https://www.space.com/elon-musk-lunar-colony-announcement",
        articleId: "30",
        source: {
            domain: "Space.com"
        },
        imageUrl: "https://iili.io/HG2775l.jpg",
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
        title: "Researchers Discover Oldest Fossil Evidence of Parasitism in Earth's History",
        url: "https://www.sciencedaily.com/releases/2021/06/210617145237.htm",
        articleId: "40",
        source: {
            domain: "Science Daily"
        },
        imageUrl: "https://iili.io/HG2jYxa.jpg",
        pubDate: new Date("2021-06-17"),
        description: "Researchers have discovered the oldest fossil evidence of parasitism in Earth's history, dating back to the Cambrian period approximately 512 million years ago. The fossilized worm-like creature, found in what is now Yunnan Province in China, was identified as a new species and named Cicerina adami.",
        content: "The discovery of Cicerina adami provides important insights into the evolution of parasitism and its impact on early life forms. The researchers believe that the creature attached itself to the body of a larger host, most likely a trilobite, and fed on its blood or bodily fluids. This finding suggests that parasitism played a significant role in shaping the early history of life on Earth.",
        keywords: [],
        topics: [],
        categories: [],
        companies: [],
        summary: "Researchers have discovered the oldest fossil evidence of parasitism in Earth's history, dating back to the Cambrian period approximately 512 million years ago. The fossilized worm-like creature, named Cicerina adami, provides important insights into the evolution of parasitism and its impact on early life forms. The discovery suggests that parasitism played a significant role in shaping the early history of life on Earth.",
        locations: []
    },
    {
        title: "Scientists discover new exoplanet with potential for life",
        url: "https://www.astronomy.com/news/2022/12/new-exoplanet-discovery",
        articleId: "50",
        source: {
            domain: "Astronomy.com"
        },
        imageUrl: "https://iili.io/HG2jciv.jpg",
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
        title: "Silicon Valley TV show to return for new season",
        url: "https://www.hollywoodreporter.com/tv/tv-news/silicon-valley-hbo-season-7-1235252988/",
        articleId: "60",
        source: {
        domain: "Hollywood Reporter"
        },
        imageUrl: "https://iili.io/HG2jVRt.webp",
        pubDate: new Date("2022-12-23"),
        description: "The popular HBO TV show Silicon Valley will return for a new season",
        content: "The Emmy-nominated TV show Silicon Valley will return for a seventh season on HBO. The show, which follows a group of tech entrepreneurs as they navigate the startup world in Silicon Valley, has been a fan favorite since its premiere in 2014. The upcoming season will be the last, as announced by the show's creators, but fans can look forward to a satisfying conclusion to the series.",
        keywords: ["Silicon Valley", "HBO", "TV show", "Tech entrepreneurs"],
        topics: ["TV shows", "Silicon Valley", "Tech entrepreneurship"],
        categories: ["Entertainment"],
        companies: ["HBO"],
        summary: "The popular HBO TV show Silicon Valley will return for a seventh and final season, offering a satisfying conclusion to the fan-favorite series.",
        locations: ["Silicon Valley"]
    },
    {
        title: "Volcano in Hawaii erupts, causing widespread damage",
        url: "https://www.geology.com/news/2022/05/hawaii-volcano-eruption",
        articleId: "70",
        source: {
            domain: "Geology.com"
        },
        imageUrl: "https://iili.io/HG2jSJS.jpg",
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
        articleId: "80",
        source: {
            domain: "Crypto.com"
        },
        imageUrl: "https://iili.io/HG2j6zu.jpg",
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
        articleId: "90",
        source: {
            domain: "PokemonGame.com"
        },
        imageUrl: "https://iili.io/HG2jisj.jpg",
        pubDate: new Date("2021-12-01"),
        description: "The Pokemon Company has announced a new Pokemon game for 2022 release",
        content: "The Pokemon Company has announced a new Pokemon game for 2022 release. The game, which is currently untitled, will feature new Pokemon, new regions to explore, and new gameplay mechanics. Fans of the franchise are excited for the new addition to the series and are eager to see what the developers have in store for them. The new game will be available on Nintendo Switch, as well as mobile devices. The Pokemon Company has promised to reveal more details about the game in the coming months.",
        keywords: ["Pokemon", "Game", "Announcement"],
        topics: ["Video Games", "Entertainment"],
        categories: ["Gaming"],
        companies: ["The Pokemon Company"],
        summary: "The Pokemon Company has announced a new Pokemon game for 2022 release, featuring new Pokemon, regions, and gameplay mechanics.",
        locations: []
    },
    {
        title: "Local Cat Elected as Mayor",
        url: "https://iili.io/HG2hvAF.jpg",
        articleId: "20",
        source: {
            domain: "Funny Stuff"
        },
        imageUrl: "https://www.funnystuff.com/wp-content/uploads/2022/01/cat-mayor.jpg",
        pubDate: new Date("2022-01-15"),
        description: "A local cat has been elected as mayor of a small town",
        content: "In a surprising turn of events, a local cat named Whiskers has been elected as the new mayor of the small town of Meowville. Whiskers won the election by a landslide, with voters citing his calm demeanor and adorable whiskers as key factors in their decision. The new mayor's first order of business is to institute mandatory nap times for all town employees.",
        keywords: ["Cat", "Mayor", "Election", "Small town"],
        topics: ["Pets", "Politics"],
        categories: ["Humor"],
        companies: [],
        summary: "In a surprising turn of events, a local cat named Whiskers has been elected as the new mayor of the small town of Meowville, promising mandatory nap times for all town employees.",
        locations: ["Meowville"]
    },
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