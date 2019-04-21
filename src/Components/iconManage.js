import clearDay from '../assets/clearDay.svg'
import clearNight from '../assets/clearNight.svg'
import clearRainy from '../assets/clearRainy.svg'
import cloudyDay from '../assets/cloudyDay.svg'
import cloudyNight from '../assets/cloudyNight.svg'
import rain from '../assets/rain.svg'
import snowy from '../assets/snowy.svg'
import thunder from '../assets/thunder.svg'

function findIco(code) {
  switch (true) {
    case code === 32:
    case code === 34:
    case code === 36:
      return clearDay;
    case code === 31:
    case code === 33:
      return(clearNight);
    case code === 44:
      return(clearRainy);
    case code >= 18 && code <= 26:
    case code === 28:
    case code === 30:
      return(cloudyDay);
    case code === 27:
    case code === 29:
      return(cloudyNight);
    case code >= 5 && code <= 12:
    case code === 35:
    case code === 40:
      return(rain);
    case code >= 13 && code <= 17:
    case code >= 41 && code <= 43:
    case code === 46:
      return(snowy);
    case code >= 0 && code <= 4:
    case code >= 37 && code <= 39:
    case code === 45:
    case code === 47:
      return(thunder);

    default:
      return("Error");
  }
}

export default findIco;
