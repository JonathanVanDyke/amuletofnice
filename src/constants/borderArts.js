import genericAttackRed from '../assets/generic-attack-red.png';
import genericAttackBlue from '../assets/generic-attack-blue.png';

const borderArt = {
  'generic-attack-red': genericAttackRed,
  'generic-attack-blue': genericAttackBlue,
}

const borderArts = (borderName) => {
  return borderArt[borderName]
}

export const BORDER_ART_LABELS = [
  { value: 'Generic Attack - Red', label: 'generic-attack-red' },
  { value: 'Generic Attack - Blue', label: 'generic-attack-blue' },
];

export default borderArts
