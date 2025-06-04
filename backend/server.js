import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import axios from "axios";
import { getRecentSearches, saveSearch } from "./connectToDatabase.js";

dotenv.config();

const numberOfRecipes = 3;

const app = express();
const port = process.env.PORT;
const apiKey = process.env.API_KEY;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.get("/search", async (req, res) => {
  try {
    const { query } = req.query;
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=${numberOfRecipes}&sort=calories&sortDirection=asc&apiKey=${apiKey}&addRecipeInformation=true&instructionsRequired=true`;

    const response = await axios.get(apiUrl);
    res.json(response.data);
    saveSearch(query, response.data);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
});

app.get("/recent-search", async (req, res) => {
  try {
    const recentSearches = await getRecentSearches();
    res.json(recentSearches);
  } catch (error) {
    console.error("Error fetching recent searches:", error);
    res.status(500).json({ error: "Failed to fetch recent searches" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
