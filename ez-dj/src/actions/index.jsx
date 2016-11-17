export const FETCH_SCSONG = 'FETCH_WEATHER';

export function fetchScSong(songUrl) {
  console.log(songUrl);

  return {
    type: FETCH_SCSONG ,
    payload: request
  };
}
