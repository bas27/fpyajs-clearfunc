// health >= 50 - green;
// health < 50 & #health >= 15 - yellow;
// health < 15 - red;

export default function healthStatus(character) {
  if (character.health > 50) {
    return 'healthy';
  } if (character.health < 15) {
    return 'critical';
  }
  return 'wounded';
}
