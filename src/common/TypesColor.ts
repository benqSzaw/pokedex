const TypeColor = (type: string) => {
  type = type.charAt(0).toUpperCase() + type.slice(1);
  let color = "#FFFFFF";
  let colorFont = "#000000";

  const white = "#FFFFFF";
  const black = "#000000";

  switch (type) {
    case "Normal":
      color = "#A8A77A";
      colorFont = black;
      break;
    case "Fighting":
      color = "#C22E28";
      colorFont = white;
      break;
    case "Flying":
      color = "#A98FF3";
      colorFont = black;
      break;
    case "Poison":
      color = "#A33EA1";
      colorFont = white;
      break;
    case "Ground":
      color = "#E2BF65";
      colorFont = black;
      break;
    case "Rock":
      color = "#B6A136";
      colorFont = white;
      break;
    case "Bug":
      color = "#A6B91A";
      colorFont = white;
      break;
    case "Ghost":
      color = "#735797";
      colorFont = white;
      break;
    case "Steel":
      color = "#B7B7CE";
      colorFont = black;
      break;
    case "Fire":
      color = "#EE8130";
      colorFont = white;
      break;
    case "Water":
      color = "#6390F0";
      colorFont = white;
      break;
    case "Grass":
      color = "#7AC74C";
      colorFont = black;
      break;
    case "Electric":
      color = "#F7D02C";
      colorFont = black;
      break;
    case "Psychic":
      color = "#F95587";
      colorFont = white;
      break;
    case "Ice":
      color = "#96D9D6";
      colorFont = black;
      break;
    case "Dragon":
      color = "#6F35FC";
      colorFont = white;
      break;
    case "Dark":
      color = "#705746";
      colorFont = white;
      break;
    case "Fairy":
      color = "#D685AD";
      colorFont = black;
      break;
  }

  return { color, colorFont };
};

export default TypeColor;
