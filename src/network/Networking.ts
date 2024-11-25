import { NearEarthObject } from '../models';
import NetworkConfig from './NetworkConfig';
import { apiString } from '../utils';

export const loadNEOs = async (startDate: Date): Promise<NearEarthObject[]> => {
  const path = '/neo/rest/v1/feed'
  const endDate = startDate
  endDate.setDate(startDate.getDate() + 1);

  try {
    const response = await fetch(
      `${NetworkConfig.baseURL}${path}?api_key=${NetworkConfig.apiKey}&start_date=${apiString(startDate)}&end_date=${apiString(endDate)}`,
      { method: 'GET' }
    )

    const json = await response.json();
    let arrayData = json.near_earth_objects[apiString(startDate)];
    console.log(arrayData[0]);
    return arrayData.map((data: any) => (
      new NearEarthObject(
        data.id, 
        data.name, 
        data.estimated_diameter.feet.estimated_diameter_min, 
        data.estimated_diameter.feet.estimated_diameter_max, 
        data.close_approach_data[0].relative_velocity.miles_per_hour,
        data.close_approach_data[0].miss_distance.miles,
        data.is_potentially_hazardous_asteroid
      )
    ))
  } catch(error) {
    console.log(error);
    return [];
  }
}
