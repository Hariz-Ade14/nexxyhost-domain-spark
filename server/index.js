import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
dotenv.config();
// process.env.PORT
app.get("/view-domain", async (req, res) => {
  // const {domainName} = req.body;
  // const domainName = req.body.domainName;

  try {
    const response = await fetch(
      `${process.env.API_URL}/ViewDomain?APIKey=xuxASjwpmP71KtJ&websiteName="nexxyhost.com"`
    );
    res.json({
      success: true,
      data: response,
    });
    console.log(response);
  } catch (error) {
    console.error("API Call Error:", error.message);
    res.status(500).json({
      success: false,
      error: "Failed to fetch data",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
