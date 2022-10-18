const axios = require("axios");

exports.getLaunchData = async (route) => {
  try {
    const result = await axios.get(`https://api.spacexdata.com/v5/launches/${route}`);
    return { ...result.data };
  }
  catch (err) {
    throw { error: err.message };
  }
};