import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 4000;

app.use(cors({
  origin: 'http://localhost:8080'
}));

app.get('/check-domain', async (req, res) => {
  const { domainName } = req.query;

  if (!domainName) {
    return res.status(400).json({ error: 'Missing domain name' });
  }

  try {
    const response = await axios.get('https://api.connectreseller.com/ConnectReseller/ESHOP/ViewDomain', {
      params: {
        APIKey: process.env.API_KEY,
        websiteName: domainName
      }
    });
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'API request failed', details: error.message });
  }
});

app.get('/view-domain', async (req, res) => {
  const { domainName } = req.query;

  if (!domainName) {
    return res.status(400).json({ error: 'Missing domain name' });
  }

  try {
    const response = await axios.get('https://api.connectreseller.com/ConnectReseller/ESHOP/checkdomainavailable', {
      params: {
        APIKey: process.env.API_KEY,
        websiteName: domainName
      }
    });
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'API request failed', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server is running at http://localhost:${PORT}`);
});