import axios from "axios";

// Export an object containing methods we'll use for accessing the GitHub Jobs API

export default {
  searchTerms: function(query) {
    return axios.get(
      "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}" +
        query +
        // A4C4T4TWZX1H5A9Z
        "&limit=1&format=json&origin=*"

    );
  }
};
