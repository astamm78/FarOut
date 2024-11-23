import { NearEarthObject } from '../models';
import { NetworkConfig } from './';
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
    return json.near_earth_objects[apiString(startDate)] as NearEarthObject[];
  } catch(error) {
    console.log(error);
  }
}
