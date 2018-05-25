import fetchJson from './api';

const { REACT_APP_MAP_APP_ID, REACT_APP_MAP_APP_CODE } = process.env;

const getRouteMap = (start, end) => fetchJson(`https://route.cit.api.here.com/routing/7.2/calculateroute.json?waypoint0=${start}&waypoint1=${end}&mode=fastest%3Bcar%3Btraffic%3Aenabled&app_id=${REACT_APP_MAP_APP_ID}&app_code=${REACT_APP_MAP_APP_CODE}&departure=now`);
// const getNews = (start, end) => fetchJson(``);

export { getRouteMap };
