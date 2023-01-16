import genericAttackRed from '../assets/generic-attack-red.png';
import genericAttackBlue from '../assets/generic-attack-blue.png';

const borderArt = {
  'generic-attack-red': genericAttackRed,
  'generic-attack-blue': genericAttackBlue,
}

const borderArts = (borderName) => {
  return borderArt[borderName]
}

export default borderArts
