import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HeadlinesPage.css';
import Article from '../../components/Article/Article';

const HeadlinesPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const res = await axios.get(`https://api.goperigon.com/v1/headlines?apiKey=${process.env.REACT_APP_API_KEY}`);
        setArticles(Array.from(res.data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchHeadlines();
  }, []);

  return (
    <div className="d-flex justify-content-center news-feed-column">
      <div className="col-md-8 bg-white p-3">
        <h1 className="text-center">Headlines Page</h1>
        <ul>
          {articles.map((article, index) => {
            return <li key={index}><Article article={article} /></li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default HeadlinesPage;

/*

How can I connect my React front end with my Express and MongoDB backend?
I don't want to save to local storage, but MongoDB instead.
```
controllers/articles.js:
const { redirect } = require('react-router-dom')
const Article = require('../../models/article')

module.exports = {
    index,
    show,
    delete: deleteSaved
}

async function index(req, res) {
    const articles = await Article.find({})
    res.json(articles)
}

async function show(req, res) {
    const article = await Article.findOne({articleId:req.params.id})
    res.json(article)
}

async function deleteSaved(req,res) {
    Article.findByIdAndRemove(req.params.id, 
        (error, data) => {
            res.redirect('/saved')
        })
    // res.json(article)
}
```
controllers/users.js:
const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
    create,
    login,
    checkToken
}

async function create(req, res) {
    try {
        // Add the user to the database
        const user = await User.create(req.body)
        const token = createJWT(user)
        res.json(token)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email })
        const isValid = await bcrypt.compare(req.body.password, user.password)
        if (isValid) {
            const token = createJWT(user)
            return res.json(token)
        }
        throw new Error
    } catch (err) {
        res.status(401).json('Unauthorized - Bad Credentials')
    }
}

function checkToken(req, res) {
    console.log('req.user', req.user)
    res.json(req.exp)
}

function createJWT(user) {
    return jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    )
}
```
models/article.js:
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    articleId: {
        type: String,
        required: true
    },
    source: {
        domain: {
            type: String,
            required: true
        }
    },
    imageUrl: {
        type: String
    },
    pubDate: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: false
    },
    keywords: [],
    topics: [],
    categories: [],
    companies: [],
    summary: {
        type: String,
        required: false
    },
    locations: []
}, {
    timestamps: true
})

module.exports = mongoose.model('Article', articleSchema)
```
models/user.js:
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 6

const userSchema = new Schema({
    name: {
        type: String, required: true
    },
    email: {
        type: String, 
        unique: true, 
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        trim: true, 
        minLenth: 3,
        required: true
    },
}, {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password
            return ret
        }
    }
})

userSchema.pre('save', async function(next) {
    // 'this' is the user doc
    if (!this.isModified('password')) return next()
    // update the password with the computed hash
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
    return next()
})

module.exports = mongoose.model('User', userSchema)
```
routes/api/articles.js:
const express = require('express');
const router = express.Router();
const articlesCtrl = require('../../controllers/api/articles')

router.get('/', articlesCtrl.index)
router.get('/:id', articlesCtrl.show)
router.delete('/saved/:id', articlesCtrl.delete)

module.exports = router
```
routers/api/users.js:
const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users
router.post('/', usersCtrl.create)
router.post('/login', usersCtrl.login)
router.get('/check-token', usersCtrl.checkToken)
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

module.exports = router
```
src/components/Article.jsx:
import { Link } from 'react-router-dom';
import './Article.css';

function Article({ article, handleSave, handleRemove }) {
    const date = new Date(article.pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="article">
          <h3>{article.title}</h3>
          <p>Source: {article.source.domain}</p>
          <p>Date: {date}</p>
          <p>{article.description}</p>
          <button className="btn btn-primary" onClick={handleSave}>Save</button>
          <button className="btn btn-success" onClick={handleRemove}>Remove</button>
          <Link to={`/headlines/${article._id}`}>
            <button className="btn btn-info">Read More</button>
          </Link>
        </div>
    )
}

export default Article;
```
src/pages/App/App.jsx:
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import HeadlinesPage from '../HeadlinesPage/HeadlinesPage';
import SavedArticlesPage from '../SavedArticlesPage/SavedArticlesPage';
import DetailsPage from '../DetailsPage/DetailsPage';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());
  const [sharedArticles, setSharedArticles] = useState();
  const [savedArticles, setSavedArticles] = useState([]);

  return (
    <main className="App">
      <Header user={user} setUser={setUser} />
      {user ? (
        <>
          <div className="nav-container">
            <NavBar />
          </div>
          <div className="main-content-container">
            <Routes>
              <Route
                exact
                path="/headlines"
                element={
                  <HeadlinesPage
                    savedArticles={savedArticles}
                    sharedArticles={sharedArticles}
                    setSharedArticles={setSharedArticles}
                    setSavedArticles={setSavedArticles}
                  />
                }
              />
              <Route
                path="/saved"
                element={<SavedArticlesPage articles={savedArticles} setSavedArticles={setSavedArticles} />}
              />
              <Route
                exact
                path="/headlines/:id"
                element={<DetailsPage articles={sharedArticles} />}
              />
            </Routes>
          </div>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
```
src/pages/Details.jsx:
import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import './DetailsPage.css';

const DetailsPage = ({ articles }) => {
  const [article, setArticle] = useState({})
  const {id} = useParams()

  useEffect(() => getArticle(),[])

  function getArticle() {
    const currentArticle = articles.find(article => article._id === id)
    setArticle(currentArticle)
  }

  const date = new Date(article.pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="card">
            {article.imageUrl && (
              <img src={article.imageUrl} className="card-img-top" alt={article.title} />
            )}
            <div className="card-body">
              <h2 className="card-title">{article.title}</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Source: {article.source && article.source.domain}</li>
                <li className="list-group-item">Published Date: {date}</li>
              </ul>
              <p className="card-text">{article.content}</p>
            </div>
            <div className="card-body">
              <Link to="/headlines" className="card-link">Back to Headlines</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage;
```
src/pages/Headlines.jsx:
import './HeadlinesPage.css';
import React, { useState, useEffect } from 'react';
import * as articlesAPI from '../../utilities/articles-api'
import Article from '../../components/Article/Article';

const HeadlinesPage = ({ savedArticles, sharedArticles, setSharedArticles, setSavedArticles }) => {
  const [articles, setArticles] = useState([]);

  useEffect(function() {
    async function getArticles() {
      const articles = await articlesAPI.getAll()
      setArticles(articles);
      setSharedArticles(articles)
      console.log(articles, "This is after setArtcles")
    }
    getArticles()

    async function getSaved() {
      const savedArticles = JSON.parse(localStorage.getItem('savedArticles')) || [];
      setSavedArticles(savedArticles)
    }
    getSaved()
  }, []);
  
  
  const handleSave = async (e, article) => {
    e.preventDefault()
    await articlesAPI.save(article)
    setSavedArticles((prevArticles) => [...prevArticles, article])
  }

  return (
    <div className="d-flex justify-content-center news-feed-column">
      <div className="col-md-8 bg-white p-3">
        <h1 className="text-center">Headlines Page</h1>
        <ul>
          {articles.reduce((prev, article, index) => {
            return [...prev, <li key={index}>
              <Article 
                article={article} 
                handleSave={(e) => handleSave(e, article)} 
              /></li>];
          }, [])}
        </ul>
      </div>
    </div>
  );
};

export default HeadlinesPage;
```
src/pages/SavedArticles.jsx:
import React from 'react';
import * as articlesAPI from '../../utilities/articles-api'
import Article from '../../components/Article/Article';

const SavedArticlesPage = ({ articles, setSavedArticles }) => {

  const handleRemove = async (e, article) => {
    e.preventDefault()
    await articlesAPI.remove(article)
    console.log(articles, "%cAfter Remove", "color: green")
    setSavedArticles(prevArticles => prevArticles.filter(a => a._id !== article._id))

    const savedArticles = JSON.parse(localStorage.getItem(articles)) || []
    const updatedList = savedArticles.filter(a => a._id !== article._id)
    localStorage.setItem(savedArticles, JSON.stringify(updatedList))
    console.log(savedArticles, "%cAfter deleting!", "color: orange")
  }

  return (
    <div className="d-flex justify-content-center news-feed-column">
      <div className="col-md-8 bg-white p-3">
          <h1>Saved Articles Page</h1>
          <ul className="articles">
            {articles.map((article, index) => (
              <li key={index} className="article">
                <Article 
                article={article}
                handleRemove={(e) => handleRemove(e, article)}
                />
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
};

export default SavedArticlesPage;
```
src/utilities/articles-api.js:
import sendRequest from './send-request';

const BASE_URL = '/api/articles';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export async function request(id, method = 'GET') {
    return sendRequest(`/api/articles/${id}`)
}

export function getSaved(id) {
  return sendRequest(`${BASE_URL}/saved`,'POST', {id})
}

export function save(id) {
  return sendRequest(`${BASE_URL}/${id}`)
}

export function remove(id) {
  console.log("%cBefore sendRequest!", "color: purple")
  return sendRequest(`${BASE_URL}/saved/${id}`, 'DELETE')
}
```
src/pages/utilities/send-request.js:
import { getToken } from './users-service';

export default async function sendRequest(url, method = 'GET', payload = null) {
  // Fetch takes an optional options object as the 2nd argument
  // used to include a data payload, set headers, etc. 
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }
  const token = getToken();
  if (token) {
    // Ensure headers object exists
    options.headers = options.headers || {};
    // Add token to an Authorization header
    // Prefacing with 'Bearer' is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(url, options);
  console.log(res)
  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}
```
src/index.js:
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App/App';
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
```
.env:
REACT_APP_API_KEY=b4dd53d1-8844-42b4-b8b5-c8b587102200
DATABASE_URL=mongodb+srv://admin:abc1234@cluster0.xaidq4e.mongodb.net/?retryWrites=true&w=majority
SECRET=headlinesByTrynce
```
seed.js:
require('dotenv').config();
require('./config/database');

const Article = require('./models/article');

// IIFE - Immediately Invoked Function Expression
(async function() {

  await Article.deleteMany({});
  const articles = await Article.create([
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
])

  console.log(articles)

  process.exit();

})();
```
server.js:
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');

// Load environment variables from .env file
require('dotenv').config();

// Connect to the database
require('./config/database');

const app = express();

// Set up CORS middleware
app.use(cors());

// Use Morgan middleware for logging
app.use(logger('dev'));

// Use JSON middleware to parse request bodies
app.use(express.json());

// Serve favicon
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));

// Serve static files from build directory
app.use(express.static(path.join(__dirname, 'build')));

// Apply checkToken middleware to all requests
app.use(require('./config/checkToken'));

// Mount the users route at /api/users
app.use('/api/articles', require('./routes/api/articles'));
app.use('/api/users', require('./routes/api/users'));

// Serve the index.html file for all other requests
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Get the port number from the environment or use 3001 as a default
const port = process.env.PORT || 3001;

// Start the express app
app.listen(port, function() {
    console.log(`Express app running on port ${port}`);
});
```
*/