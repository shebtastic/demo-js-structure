import CardComponent from "./components/Card.js"
import {names as flamingos} from "./util/data.js"

const Card = {
  daten: "test"
}

flamingos.forEach((name) => {
  CardComponent(name)
});

