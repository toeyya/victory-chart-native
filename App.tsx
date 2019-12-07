/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Component } from 'react';
import { VictoryChart, VictoryAxis, VictoryArea, VictoryStack, VictoryScatter } from 'victory-native';
import moment from 'moment';
import { View } from 'react-native';
import { Defs, Stop, LinearGradient } from 'react-native-svg';

function newDateString(day: number) {

  const result = moment().add({ days: day, hours: day + 8 });
  console.log('result', result);
  return result;
}

function randomScalingFactor() {
  const result = Math.random() * 100;
  return result;
}

const data = [
  { day: new Date("2019-12-07T16:03:22.831Z"), score: 10 },
  { day: new Date("2019-12-08T17:03:22.849Z"), score: 26 },
  { day: new Date("2019-12-09T18:03:22.855Z"), score: 18 },
  { day: new Date("2019-12-10T22:22:02.900Z"), score: 30 },
  { day: new Date("2019-12-11T23:03:22.862Z"), score: 8 },
  { day: new Date("2019-12-12T21:03:22.870Z"), score: 20 },
  { day: new Date("2019-12-13T22:03:22.874Z"), score: 13 }
];

// const data = [
//   { day: newDateString(0), score: 10 },
//   { day: newDateString(1), score: 26 },
//   { day: newDateString(2), score: 18 },
//   { day: newDateString(3), score: 37 },
//   { day: newDateString(4), score: 8 },
//   { day: newDateString(5), score: 20 },
//   { day: newDateString(6), score: 30 },
// ];


class App extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#414B5A' }} >
        <VictoryChart domainPadding={30} height={250} maxDomain={{ y: 37 }}>
          <VictoryAxis
            tickFormat={((y: Date, index: number) => {
              const word = ['月', '火', '水', '木', '金', '土', '日'];
              const result = index == 0 ? `${word[index]}\n \n${moment(y).format('M/D')}` : `${word[index]}\n \n${moment(y).format('D')}`;
              return result;
            })}
            style={
              {
                axis: {
                  strokeWidth: 0
                },
                grid: {
                  stroke: '#CCD5E3',
                  strokeWidth: 1,
                  strokeDasharray: '5, 4',
                },
                tickLabels: {
                  fontSize: '12px',
                  stroke: "#CCD5E3",
                  fill: "#CCD5E3",
                  fillOpacity: 1,
                },
              }
            }
          />
          <VictoryAxis
            dependentAxis
            offsetX={25}
            orientation="left"
            tickValues={[0, 37]}
            style={{
              axis: {
                stroke: '#CCD5E3',
                strokeWidth: 1,
                strokeDasharray: '5, 4',
              },
              tickLabels: {
                fontSize: '12px',
                stroke: "#CCD5E3",
                fill: "#CCD5E3",
                fillOpacity: 1,
              },
            }}
          />
          <VictoryAxis dependentAxis

            offsetX={30}
            orientation="right"
            style={{
              axis: {
                stroke: '#CCD5E3',
                strokeWidth: 1,
                strokeDasharray: '5, 4',
              },
              tickLabels: {
                fill: "#414B5A",
              },
            }}
          />
          <Defs>
            <LinearGradient
              id="gradientStroke"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <Stop offset="0%" stopColor="rgb(133,173,142)" stopOpacity="1" />
              <Stop offset="100%" stopColor="rgb(65,75,90)" stopOpacity="0.8" />
            </LinearGradient>
          </Defs>
         
            <VictoryArea
              data={data} x="day" y="score"
              scale={{ x: "time", y: "linear" }}
              style={{
                data: {
                  fill: "url(#gradientStroke)",
                  stroke: "#FFFFFF",
                  strokeWidth: 1
                }
              }}
            />
         
          <VictoryScatter data={data} x="day" y="score" size={4}
            style={{
              data: {
                fill: "#414B5A",
                stroke: "#FFFFFF",
                strokeWidth: 2,
              }
            }} />
         
        </VictoryChart>
      </View>
    );
  }
}

export default App;