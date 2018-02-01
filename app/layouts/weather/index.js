/*global alert, confirm, console, Debug, opera, prompt, WSH */
'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  ScrollView
} from 'react-native';

import { Icon } from 'react-native-elements';

class WeatherScreen extends Component {
  static navigationOptions = () => ({
    header: null,
  });

  constructor(props) {
    super(props);
    this.state = {
      currentArr: '',
      dataArr: '',
      dataArrNew: '',
      todayInfor: {
        cityName: '',
        dateTime: '',
        description: '',
        temp: '',
        maxTemp: '',
        minTemp: ''
      }
    };
  }

  componentWillMount() {
    return fetch('https://api.weatherbit.io/v2.0/forecast/daily?key=eefc00525bda4d0ca26517e11271f366&city=Saigon')
    .then((response) => response.json())
    .then((responseJson) => {
      // console.log('aray :', responseJson.data);
      this.setState({
        currentArr: responseJson.data[0],
        dataArr: responseJson.data.slice(2),
        dataArrNew: responseJson.data.slice(2, 9),
        todayInfor: {
          cityName: responseJson.city_name,
          dateTime: responseJson.data[0].datetime,
          description: responseJson.data[0].weather.description,
          temp: responseJson.data[0].temp,
          maxTemp: responseJson.data[0].max_temp,
          minTemp: responseJson.data[0].min_temp,
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  renderItem = ({ item }) => {
    const { datetime, temp, weather } = item;
    const day = new Date(datetime);
    const months =
    ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Now', 'Dec'];

    // Render Day and Month
    const dnm = `${months[day.getMonth()]} ${day.getDate()}`;

    //Render Icon Styles
    const name = this.renderIcon(weather.description);
    const color = this.renderColor(weather.description);
    return (
      <View style={styles.renderItem}>
        <Text style={{ fontSize: 12, color: 'white' }}>{dnm}</Text>
        <Icon
          name={name}
          type='material-community'
          color={color}
        />
        <Text style={{ color: 'white' }}>{temp}°</Text>
      </View>
    );
  }

  renderIcon = (description) => {
    switch (description) {
      case 'Broken clouds': //Nhieu dam may nho
        return 'weather-hail';
      case 'Scattered clouds': // May phan tan
        return 'weather-lightning';
      case 'Clear sky': // Troi dep
        return 'weather-partlycloudy';
      case 'Overcast clouds': // May che phu
        return 'weather-cloudy';
      default:
        return 'weather-partlycloudy';
    }
  }

  renderColor = (description) => {
    switch (description) {
      case 'Broken clouds':
        return '#D0D3D4';
      case 'Scattered clouds':
        return '#D0D3D4';
      case 'Clear sky':
        return '#f4d041';
      case 'Overcast clouds':
        return '#F4F6F7';
      default:
        return '#F4F6F7';
    }
  }

  renderItemNew = ({ item }) => {
    const { datetime, max_temp, min_temp, weather } = item;
    const day = new Date(datetime);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Render fullname date
    const fullDate = days[day.getDay()];
    //
    const name = this.renderIcon(weather.description);
    const color = this.renderColor(weather.description);
    return (
      <View style={styles.renderItemNew}>
        <View style={styles.itemCol1}>
          <Text style={{ color: '#F4F6F7', fontSize: 12 }}>{fullDate}</Text>
          <Icon
            name={name}
            type='material-community'
            color={color}
            size={15}
          />
        </View>
        <View style={styles.itemCol2}>
          <Text style={{ color: '#F4F6F7', width: 50, fontSize: 12 }}>{max_temp}</Text>
          <Text style={{ color: '#F4F6F7', width: 30, fontSize: 12 }}>{min_temp}</Text>
        </View>
      </View>
    );
  }

  render() {
    const { dateTime, description, temp, maxTemp, minTemp } = this.state.todayInfor;
    const { currentArr } = this.state;
    const d = new Date(dateTime);
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dateName = days[d.getDay()];
    return (
      <ScrollView>
      <View style={styles.container}>
        <Image
          source={require('./../../assets/img/bg_container.jpg')}
          style={styles.bgImgStyles}
        />
        <View style={styles.row1}>
          <View style={styles.row1Top}>
            <Text style={{ fontSize: 20, color: '#F4F6F7' }}>Thành phố Hồ Chí Minh</Text>
            <Text style={{ fontSize: 14, color: '#F4F6F7' }}>{description}</Text>
            <Text style={{ fontSize: 50, color: '#f4d041' }}>{temp}°C</Text>
          </View>
          <View style={styles.row1Bottom}>
            <Text style={{ color: '#F4F6F7' }}>{dateName}</Text>
            <Text style={{ color: '#F4F6F7' }}>Today</Text>
            <Text />
            <Text />
            <Text />
            <Text style={{ color: '#F4F6F7' }}>{maxTemp}</Text>
            <Text style={{ color: '#F4F6F7' }}>{minTemp}</Text>
          </View>
        </View>
        <View style={styles.row2}>
          <FlatList
            data={this.state.dataArr}
            renderItem={this.renderItem}
            keyExtractor={index => index.datetime}
            horizontal
          />
        </View>
        <View style={styles.row3}>
          <FlatList
            data={this.state.dataArrNew}
            renderItem={this.renderItemNew}
            keyExtractor={index => index.datetime}
          />
        </View>
          <View style={styles.row4}>
            <Text style={{ fontSize: 11, color: 'white' }}>
              Today: {description} currently. The high will be {maxTemp}°C.
              Tonight with a low of {minTemp}°C
            </Text>
          </View>
          <View style={styles.row5}>

            <View style={styles.row5Container}>
              <View style={styles.row5Left}>
                <Text style={{ color: '#F4F6F7', fontSize: 12 }}>Wind direction</Text>
              </View>
              <View style={styles.row5Right}>
                <Text style={{ color: '#F4F6F7', fontSize: 12 }}>
                  {currentArr.wind_cdir_full}
                </Text>
              </View>
            </View>

            <View style={styles.row5Container}>
              <View style={styles.row5Left}>
                <Text style={{ color: '#F4F6F7', fontSize: 12 }}>Probability of Precipitation</Text>
              </View>
              <View style={styles.row5Right}>
                <Text style={{ color: '#F4F6F7', fontSize: 12 }}>{currentArr.pop} %</Text>
              </View>
            </View>

            <View style={styles.row5Container}>
              <View style={styles.row5Left}>
                <Text style={{ color: '#F4F6F7', fontSize: 12 }}>Visibility</Text>
              </View>
              <View style={styles.row5Right}>
                <Text style={{ color: '#F4F6F7', fontSize: 12 }}>{currentArr.vis} km</Text>
              </View>
            </View>

            <View style={styles.row5ContainerEnd}>
              <View style={styles.row5Left}>
                <Text style={{ color: '#F4F6F7', fontSize: 12 }}>Precipitation</Text>
              </View>
              <View style={styles.row5Right}>
                <Text style={{ color: '#F4F6F7', fontSize: 12 }}>{currentArr.precip} mm</Text>
              </View>
            </View>

          </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  bgImgStyles: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  row1: {
    height: 200,
    paddingHorizontal: 10
  },
  row1Top: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row1Bottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  row2: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#F4F6F7'
  },
  renderItem: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: 50,
    alignItems: 'center'
  },
  renderItemNew: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
    paddingHorizontal: 10
  },
  itemCol1: {
    flex: 2,
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemCol2: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  row3: {
    height: 155,
    marginTop: 10
  },
  row4: {
    padding: 10,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#F4F6F7'
  },
  row5: {

    marginTop: 5,
    paddingHorizontal: 10
  },
  row5Container: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: '#F4F6F7',
    paddingVertical: 5
  },
  row5ContainerEnd: {
    flexDirection: 'row',
    paddingVertical: 5
  },
  row5Left: {
    flex: 1
  },
  row5Right: {
    flex: 1
  }
});


export default WeatherScreen;
