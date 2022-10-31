export default function getColor(type: string | undefined) {
  switch (type) {
    case "poison":
      return "#a041a2";
    case "fire":
      return "#f27f2c";
    case "normal":
      return "#aaa683";
    case "fighting":
      return "#bf3026";
    case "water":
      return "#688ff5";
    case "flying":
      return "#a791ec";
    case "grass":
      return "#77c94a";
    case "electric":
      return "#f9d02f";
    case "ground":
      return "#dcc06a";
    case "psychic":
      return "#f75c88";
    case "rock":
      return "#b6a03b";
    case "ice":
      return "#97d9d5";
    case "bug":
      return "#a7b91f";
    case "dragon":
      return "#7239f4";
    case "ghost":
      return "#745895";
    case "dark":
      return "#6d5a45";
    case "steel":
      return "#b9b8d3";
    case "fairy":
      return "#eb9baa";
  }
}
