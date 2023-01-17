import genericAttackRed from "../assets/generic-attack-red.png";
import genericAttackBlue from "../assets/generic-attack-blue.png";
import AriaAttackBlue from "../assets/Aria-Attack-blue.png";
import AriaAttackRed from "../assets/Aria-Attack-red.png";
import AriaAttackYellow from "../assets/Aria-Attack-yellow.png";
import AriaInstantBlue from "../assets/Aria-Instant-blue.png";
import AriaInstantRed from "../assets/Aria-Instant-red.png";
import AriaInstantYellow from "../assets/Aria-Instant-yellow.png";
import AriaNonAttackBlue from "../assets/Aria-Non-Attack-blue.png";
import AriaNonAttackRed from "../assets/Aria-Non-Attack-red.png";
import AriaNonAttackYellow from "../assets/Aria-Non-Attack-yellow.png";

const borderArt = {
  "generic-attack-red": genericAttackRed,
  "generic-attack-blue": genericAttackBlue,
  "Aria-Attack-blue": AriaAttackBlue,
  "Aria-Attack-red": AriaAttackRed,
  "Aria-Attack-yellow": AriaAttackYellow,
  "Aria-Instant-blue": AriaInstantBlue,
  "Aria-Instant-red": AriaInstantRed,
  "Aria-Instant-yellow": AriaInstantYellow,
  "Aria-Non-Attack-blue": AriaNonAttackBlue,
  "Aria-Non-Attack-red": AriaNonAttackRed,
  "Aria-Non-Attack-yellow": AriaNonAttackYellow,
};

const borderArts = (borderName) => {
  return borderArt[borderName];
};

export const BORDER_ART_LABELS = [
  { value: "Generic Attack - Red", label: "generic-attack-red" },
  { value: "Generic Attack - Blue", label: "generic-attack-blue" },
  { value: "Aria Attack - Blue", label: "Aria-Attack-blue" },
  { value: "Aria Attack - Red", label: "Aria-Attack-red" },
  { value: "Aria Attack - Yellow", label: "Aria-Attack-yellow" },
  { value: "Aria Instant - Blue", label: "Aria-Instant-blue" },
  { value: "Aria Instant - Red", label: "Aria-Instant-red" },
  { value: "Aria Instant - Yellow", label: "Aria-Instant-yellow" },
  { value: "Aria NonAttack - Blue", label: "Aria-Non-Attack-blue" },
  { value: "Aria NonAttack - Red", label: "Aria-Non-Attack-red" },
  { value: "Aria NonAttack - Yellow", label: "Aria-Non-Attack-yellow" },
];

export default borderArts;
