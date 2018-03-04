const DarkSky = require('dark-sky');
const { json } = require('micro');
const { API_KEY } = process.env;
const darkSky = new DarkSky(API_KEY);

module.exports = async (req, res) => {
  try {
    const location = await json(req);
    const result = await darkSky.coordinates(location).get();
    res.end(JSON.stringify(result.currently));
  } catch (err) {
    console.log(err);
    res.end('err');
  }
};
