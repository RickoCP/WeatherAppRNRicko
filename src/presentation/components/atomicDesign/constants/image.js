/* eslint-disable prettier/prettier */


const backgroundImage = require('../../assets/image/map-background.png');
const nightbackgroundImage = require('../../assets/image/nightBackground.png');
const daybackgroundImage = require('../../assets/image/dayBackground.png');

const PartlyCloudy = require('../../assets/image/partlycloudy.png');
const ModerateRain = require('../../assets/image/moderaterain.png');
const PatchyRainPossible = require('../../assets/image/moderaterain.png');
const Sunny = require('../../assets/image/sun.png');
const Clear = require('../../assets/image/sun.png');
const Overcast = require('../../assets/image/cloud.png');
const Cloudy = require('../../assets/image/cloud.png');
const LightRain = require('../../assets/image/moderaterain.png');
const ModerateRainAtTimes = require('../../assets/image/moderaterain.png');
const HeavyRain = require('../../assets/image/heavyrain.png');
const HeavyRainAtTimes = require('../../assets/image/heavyrain.png');
const ModerateOrHeavyFreezingRain = require('../../assets/image/heavyrain.png');
const ModerateOrHeavyRainShower = require('../../assets/image/heavyrain.png');
const ModerateOrHeavyRainWithThunder = require('../../assets/image/heavyrain.png');
const Mist = require('../../assets/image/mist.png');
const other = require('../../assets/image/moderaterain.png');
const WeatherIcon = require('../../assets/image/weatherIcon.png');

const windIcon = require('../../assets/animation/wind.json');
const humidityIcon = require('../../assets/animation/humidity.json');
const uvIcon = require('../../assets/animation/eye1.json');

export const weatherImages = {
  'Partly cloudy': PartlyCloudy,
  'Moderate rain': ModerateRain,
  'Patchy rain possible': PatchyRainPossible,
  'Sunny': Sunny,
  'Clear': Clear,
  'Overcast': Overcast,
  'Cloudy': Cloudy,
  'Light rain': LightRain,
  'Moderate rain at times': ModerateRainAtTimes,
  'Heavy rain': HeavyRain,
  'Heavy rain at times': HeavyRainAtTimes,
  'Moderate or heavy freezing rain': ModerateOrHeavyFreezingRain,
  'Moderate or heavy rain shower': ModerateOrHeavyRainShower,
  'Moderate or heavy rain with thunder': ModerateOrHeavyRainWithThunder,
  'Mist': Mist,
  'other': other,
};

export default {
  PartlyCloudy,
  ModerateRain,
  PatchyRainPossible,
  Sunny,
  Clear,
  Overcast,
  Cloudy,
  LightRain,
  ModerateRainAtTimes,
  HeavyRain,
  HeavyRainAtTimes,
  ModerateOrHeavyFreezingRain,
  ModerateOrHeavyRainShower,
  ModerateOrHeavyRainWithThunder,
  Mist,
  other,
  backgroundImage,
  nightbackgroundImage,
  daybackgroundImage,
  WeatherIcon,
  windIcon,
  humidityIcon,
  uvIcon,
};
