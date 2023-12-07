import axios from 'axios';

const API_URL =
  'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json';

export async function getData() {
  const { data, error } = await axios.get(API_URL);
  if (error) {
    console.error(error);
    throw new Error('Something wrong with fetching data🥲');
  }
  return data;
}
