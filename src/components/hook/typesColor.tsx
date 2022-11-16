export default function getColor(type: string | undefined) {
  switch (type) {
    case "poison":
      return "rgb(160, 65, 162)";
    case "fire":
      return "rgb(242, 127, 44)";
    case "normal":
      return "rgb(170, 166, 131)";
    case "fighting":
      return "rgb(191, 48, 38)";
    case "water":
      return "rgb(104, 143, 245)";
    case "flying":
      return "rgb(167, 145, 236)";
    case "grass":
      return "rgb(119, 201, 74)";
    case "electric":
      return "rgb(249, 208, 47)";
    case "ground":
      return "rgb(220, 192, 106)";
    case "psychic":
      return "rgb(247, 92, 136)";
    case "rock":
      return "rgb(182, 160, 59)";
    case "ice":
      return "rgb(151, 217, 213)";
    case "bug":
      return "rgb(167, 185, 31)";
    case "dragon":
      return "rgb(114, 57, 244)";
    case "ghost":
      return "rgb(116, 88, 149)";
    case "dark":
      return "rgb(109, 90, 69)";
    case "steel":
      return "rgb(185, 184, 211)";
    case "fairy":
      return "rgb(235, 155, 170)";
  }
}
