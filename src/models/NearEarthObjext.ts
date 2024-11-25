import { numericalDisplay } from "src/utils";

interface NearEarthObjectInterface {
  id: string;
  name: string;
  estDiamFeetMin: number;
  estDiamFeetMax: number;
  relativeVelocityMPH: string;
  missDistanceMiles: string;
  potentiallyHazerdous: boolean;
  estimatedDiameterDescription: () => string;
  relativeVelocityMPHDescription: () => string;
  missDistanceDescription: () => string;
  potentialHazerdDescription: () => string;
}

class NearEarthObject implements NearEarthObjectInterface {
  id: string;
  name: string;
  estDiamFeetMin: number;
  estDiamFeetMax: number;
  relativeVelocityMPH: string;
  missDistanceMiles: string;
  potentiallyHazerdous: boolean;

  constructor(
    id: string,
    name: string,
    estDiamFeetMin: number,
    estDiamFeetMax: number,
    relativeVelocityMPH: string,
    missDistanceMiles: string,
    potentiallyHazerdous: boolean,
  ) {
    this.id = id;
    this.name = name;
    this.estDiamFeetMin = estDiamFeetMin;
    this.estDiamFeetMax = estDiamFeetMax;
    this.relativeVelocityMPH = relativeVelocityMPH;
    this.missDistanceMiles = missDistanceMiles;
    this.potentiallyHazerdous = potentiallyHazerdous;
  }

  estimatedDiameterDescription = (): string => {
    const min = numericalDisplay(this.estDiamFeetMin);
    const max = numericalDisplay(this.estDiamFeetMax);
    
    return `Between ${min}  and ${max} feet.`
  }

  relativeVelocityMPHDescription = (): string => {
    const velocity = numericalDisplay(parseFloat(this.relativeVelocityMPH));

    return `Traveling at ${velocity} mph.`
  }

  missDistanceDescription = (): string => {
    const distanceInMiles = numericalDisplay(parseFloat(this.missDistanceMiles));

    return `Missing the Earth by ${distanceInMiles} miles.`
  }

  potentialHazerdDescription = (): string => (
    this.potentiallyHazerdous ? "Potentially hazerdous!" : "Not a potential hazard."
  )
}

export default NearEarthObject;
