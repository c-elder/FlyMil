const arrow = `<img src="/ARROW.png"/>`;
const fourEng = `<img src="/4-ENG.png"/>`;
const EUFI = `<img src="/EUFI.png"/>`;
const H60 = `<img src="/H60.png"/>`;
const H64 = `<img src="/APACHE.png"/>`;
const drone = `<img src="/DRONE.png"/>`;
const plane = `<img src="/PLANE.png"/>`;
const jet = `<img src="/JET.png"/>`;
const chinook = `<img src="/CHINOOK.png"/>`;
const osprey = `<img src="/OSPREY.png"/>`;
const prop = `<img src="/PROP.png"/>`;
const pj = `<img src="/PJ.png"/>`;
const tower = `<img src="/TOWER.png"/>`;

export function getIcon(image: string = "UNKNOWN") {
  switch (image) {
    case "4-ENG":
      return fourEng;
    case "EUFI":
      return EUFI;
    case "H60":
      return H60;
    case "H64":
      return H64;
    case "DRONE":
      return drone;
    case "PROP":
      return prop;
    case "Q4":
      return drone;
    case "2-ENG":
      return plane;
    case "APACHE":
      return H64;
    case "JET":
      return jet;
    case "CHINOOK":
      return chinook;
    case "OSPREY":
      return osprey;
    case "PJ":
      return pj;
    case "TOWER":
      return tower;
    default:
      return arrow;
  }
}
