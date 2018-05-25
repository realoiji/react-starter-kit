import React from 'react';
import get from 'lodash/get';
import replace from 'lodash/replace';

import { New } from '../components';
import { getRouteMap } from '../services';

const routes = {
  'btsอ่อนนุช-btsเอกมัย1': {
    start: '13.708987, 100.599277',
    end: '13.710456, 100.597759'
  },
  'btsอ่อนนุช-btsเอกมัย2': {
    start: '13.710456, 100.597759',
    end: '13.713086, 100.594088'
  },
  'btsอ่อนนุช-btsเอกมัย3': {
    start: '13.713086, 100.594088',
    end: '13.714115, 100.592626'
  },
  'btsอ่อนนุช-btsเอกมัย4': {
    start: '13.714115, 100.592626',
    end: '13.719088, 100.585677'
  },
  'btsอ่อนนุช-btsเอกมัย5': {
    start: '13.719088, 100.585677',
    end: '13.719971, 100.584408'
  },
  'btsอ่อนนุช-btsเอกมัย6': {
    start: '13.719971, 100.584408',
    end: '13.723035, 100.580106'
  },
  'ซอยสุขุมวิท71-ถนนเพชรบุรี': {
    start: '13.713278, 100.594129',
    end: '13.740767, 100.600416'
  },
  'ถนนเอกมัย-ถนนเพชรบุรี': {
    start: '13.720146, 100.584464',
    end: '13.740705, 100.589652'
  },
  'ถนนพระราม4-คลองเตย1': {
    start: '13.714154, 100.592536',
    end: '13.712866, 100.584366'
  },
  'ถนนพระราม4-คลองเตย2': {
    start: '13.712866, 100.584366',
    end: '13.715146, 100.575963'
  },
  'ซอยสุขุมวิท42-btsเอกมัย1': {
    start: '13.710427, 100.582151',
    end: '13.712809, 100.583961'
  },
  'ซอยสุขุมวิท42-btsเอกมัย2': {
    start: '13.712809, 100.583961',
    end: '13.719448, 100.584987'
  }
};

export default class extends React.Component {
  componentDidMount() {
    this.getTraffic();
  }
  getTraffic = async () => {
    const textElements = document.querySelectorAll('text');
    if (textElements) {
      for (let index = 0; index < textElements.length; index += 1) {
        const textElement = textElements[index];
        textElement.remove();
      }
    }
    const svgRoutes = document.querySelectorAll('[route-data]');
    console.log('svgRoutes', svgRoutes);
    const promises = [];
    for (let index = 0; index < svgRoutes.length; index += 1) {
      const svgRoute = svgRoutes[index];
      const svgRouteData = svgRoute.getAttribute('route-data');
      const route = get(routes, svgRouteData);
      console.log('route', route);
      // const { start, end } = route;
      const start = replace(get(route, 'start'), ' ', '');
      const end = replace(get(route, 'end'), ' ', '');
      promises.push(new Promise(resolve =>
        resolve(getRouteMap(start, end))));
    }
    Promise.all(promises).then((trafficRoute) => {
      console.log('trafficRoute', trafficRoute);
      for (let index = 0; index < trafficRoute.length; index += 1) {
        const route = trafficRoute[index];
        const svgRoute = svgRoutes[index];
        const summary = get(route, 'response.route[0].summary');
        if (summary) {
          const { travelTime, baseTime } = summary;
          console.log('svgRoute', svgRoute);
          console.log('travelTime', travelTime);
          console.log('baseTime', baseTime);
          console.log('---------------');
          if (travelTime >= baseTime * 3) {
            svgRoute.setAttribute('class', 'color-dark-red');
            const bbox = svgRoute.getBBox();
            // console.log(svgRouteData, bbox);
            const x = bbox.x;
            const y = bbox.y;
            const width = bbox.width;
            // const height = bbox.height;
            const middleWidth = x + (width / 2);
            const textElement = `<text x="${middleWidth}" y="${y + 40}" font-family="DB Adman X Bd" font-size="30" fill="#ffffff">${parseInt((travelTime - baseTime) / 60, 10)}</text>`;
            svgRoute.insertAdjacentHTML('afterend', textElement);
          } else if (travelTime >= baseTime * 2) {
            svgRoute.setAttribute('class', 'color-red');
          } else if (travelTime >= baseTime * 1.5) {
            svgRoute.setAttribute('class', 'color-orange');
          } else {
            svgRoute.setAttribute('class', 'color-green');
          }
        }
      }
    });
  };
  render() {
    return (
      <div>
        <div className="traffic-container" style={{ width: 980, height: 696.5 }}>
          traffic
          <div className="map-bg">
            <img src="/map-bg.jpg" alt="" />
          </div>
          {/* eslint-disable */}
          <div className="route-svg">
            <svg
              version="1.1"
              id="Layer_2_1_"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 980 696.5"
              width="100%"
              height="100%"
            >
              <g>
                <polygon
                  className="color-green"
                  points="633.4,355.5 562.9,352.5 562.5,352.3 463.2,318.2 462.9,318 116.5,100.2 119.7,95.2 465.8,312.8 564.1,346.5 633.6,349.5"
                  route-data="ถนนพระราม4-คลองเตย1"
                />
              </g>
              <g>
                <rect
                  x="119.5"
                  y="95.3"
                  transform="matrix(1 -2.604149e-03 2.604149e-03 1 -0.2545 1.1202)"
                  className="color-green"
                  width="621"
                  height="6"
                  route-data="ซอยสุขุมวิท42-btsเอกมัย2"
                />
              </g>
              <polygon
                className="color-green"
                points="0,27 116.5,100.2 119.7,95.2 0,19.9 "
                route-data="ถนนพระราม4-คลองเตย2"
              />
              <polygon
                className="color-green"
                points="0,102.4 119.5,102.1 119.5,96.1 0,96.4 "
                route-data="ซอยสุขุมวิท42-btsเอกมัย1"
              />
              <polygon
                className="color-green"
                points="980,45.5 755.4,49.5 755.6,55.5 980,51.5 "
                route-data="ถนนเอกมัย-ถนนเพชรบุรี"
              />
              <polygon
                className="color-green"
                points="980,348 946.5,365.9 602.9,419.5 603.8,425.5 948.5,371.7 980,354.9 "
                route-data="ซอยสุขุมวิท71-ถนนเพชรบุรี"
              />
              <polygon
                className="color-green"
                points="980,569.6 536.6,577.2 536.7,583.2 980,575.6 "
              />
              <polygon
                className="color-green"
                points="0,592.3 536.7,583.2 536.6,577.2 0,586.3 "
              />
              <g>
                <rect
                  x="726.1"
                  y="70.7"
                  transform="matrix(0.3888 -0.9213 0.9213 0.3888 388.5047 736.9854)"
                  className="color-green"
                  width="47.3"
                  height="10"
                  route-data="btsอ่อนนุช-btsเอกมัย5"
                />
              </g>
              <g>
                <rect
                  x="580.1"
                  y="382.4"
                  transform="matrix(0.3891 -0.9212 0.9212 0.3891 20.7298 806.1371)"
                  className="color-green"
                  width="76.2"
                  height="10"
                  route-data="btsอ่อนนุช-btsเอกมัย3"
                />
              </g>
              <g>
                <path
                  className="color-green"
                  d="M637.6,354.2l-9.2-3.9c37.5-88.9,77.7-184.1,107.5-254.8l9.2,3.9C715.3,170.1,675.1,265.3,637.6,354.2z"
                  route-data="btsอ่อนนุช-btsเอกมัย4"
                />
              </g>
              <g>
                <path
                  className="color-green"
                  d="M541.2,582.3l-9.2-3.9c12.3-29.1,34.8-82.2,66.7-157.9l9.2,3.9C576,500.1,553.5,553.2,541.2,582.3z"
                  route-data="btsอ่อนนุช-btsเอกมัย2"
                />
              </g>
              <polygon
                className="color-green"
                points="776.2,0 754.3,52 763.5,55.9 787.1,0 "
                route-data="btsอ่อนนุช-btsเอกมัย6"
              />
              <path
                className="color-green"
                d="M520.8,604.4c-5.3,12.2-36.7,40.9-48.5,51.1l-56.1,41h17l45.2-33.1l0.3-0.2c0.1-0.1,11-9.5,22.6-20.7
                c15.9-15.4,25.5-26.9,28.7-34.1c0.8-1.8,4.5-10.6,11.1-26.2l-9.2-3.9C525.3,593.9,521.6,602.7,520.8,604.4z"
                route-data="btsอ่อนนุช-btsเอกมัย1"
              />
            </svg>
          {/* eslint-enable */}
          </div>
          <div className="route-text" style={{ top: '11%', left: '36%' }}>ซอย สุขุมวิท 42</div>
          <div className="route-text" style={{ top: '52%', left: '72%', transform: 'rotate(-8deg)' }}>ซอย สุขุมวิท 71</div>
          <div className="route-text" style={{ top: '4.5%', left: '80%' }}>ถนน เอกมัย</div>
          <div className="route-text" style={{ top: '34.5%', left: '27.5%', transform: 'rotate(32deg)' }}>ถนน พระราม 4</div>
          <div className="route-text" style={{ top: '81%', left: '10%' }}>ทางด่วนรามอินทรา-อาจณรงค์</div>
          <div className="u-r-here"><i className="fas fa-location-arrow" /></div>
        </div>
        <New />
      </div>
    );
  }
}
