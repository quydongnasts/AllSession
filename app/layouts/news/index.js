'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image
} from 'react-native';

import { Icon } from 'react-native-elements';

class NewsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }

componentWillMount() {
  const d = new Date();
  const todayDate = d.toISOString().slice(0, 10);
  const yesterdayDate = [
   d.getFullYear(),
   (`0${(d.getMonth() + 1)}`).slice(-2),
   (`0${(d.getDate() - 1)}`).slice(-2)
 ].join('-');

  this.getMoviesFromApiAsync(todayDate, yesterdayDate);
}

 getMoviesFromApiAsync(todayDate, yesterdayDate) {
  return fetch(`https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=2a5c4f322f584224847b860ba6314385&from=${yesterdayDate}&to=${todayDate}`)
    .then((response) => response.json())
    .then((responseJson) => {
      // return responseJson.movies;
      this.setState({ data: responseJson.articles });
    })
    .catch((error) => {
      console.error(error);
    });
}

switchRenderImage = (name) => {
  switch (name) {
    case 'Engadget':
      // return './../../assets/img/icons/if_Engadget.png';
      return require('./../../assets/img/icons/if_Engadget.png');
    case 'TechCrunch':
      return require('./../../assets/img/icons/if_Tech_Crunch.png');
    case 'Gizmodo.com':
      return require('./../../assets/img/icons/if_Gizmodo.png');
    case 'The New York Times':
      return require('./../../assets/img/icons/if_The_New_York_Times.png');
    case 'Business Insider':
      return require('./../../assets/img/icons/if_Business_Insider.png');
    case 'Ars Technica':
      return require('./../../assets/img/icons/if_Ars_Technical.png');
    case 'Androidcentral.com':
      return require('./../../assets/img/icons/if_Android_Central.png');
    case 'Macrumors.com':
      return require('./../../assets/img/icons/if_Macrumors.png');
    default:
      return require('./../../assets/img/icons/if_Default.png');
  }
}


renderItem = ({ item }) => {
  const { name } = item.source;
  const { author, title, description, urlToImage, publishedAt } = item;
  const publishedAtNew = publishedAt.slice(0, 10);
  const checkName = this.switchRenderImage(name);
  return (
    <View style={styles.ItemWrap}>
      <View style={styles.ItemName}>
        <Image
          source={checkName}
          style={{ width: 35, height: 35 }}
        />
      </View>
      <View style={styles.ItemContent}>
        <View style={styles.ItemHeader}>
          <Text style={{ fontWeight: 'bold', color: '#000000' }}>{name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Text style={{ color: 'gray', fontSize: 11, fontStyle: 'italic' }}>
              {publishedAtNew}
            </Text>
            <Icon
              name='globe'
              type='entypo'
              color='gray'
              size={15}
              iconStyle={{ paddingLeft: 5 }}
            />
          </View>

        </View>
        <View style={styles.ItemTitle}>
          <Text style={{ color: '#000000' }}>{title}</Text>
        </View>
        <View style={styles.ItemUrlToImage}>
          { urlToImage != null ?
            <Image
              style={{ width: '100%', height: 150 }}
              source={{ uri: `${urlToImage}` }}
              cache='force-cache'
            />
            :
            <Image
              style={{ width: '100%', height: 150 }}
              source={{ uri: './../../assets/img/urlToImage.jpg' }}
              cache='force-cache'
            />
          }
        </View>
        <View style={styles.ItemDescription}>
          <Text
            style={{ color: 'gray', fontSize: 12, fontStyle: 'italic', lineHeight: 19 }}
          >
            " {description} "
          </Text>
        </View>
        <View style={styles.ItemAuthor}>
          <Text style={{ fontSize: 12 }}>
            {(author != null) ? author : 'Anonymous'}
          </Text>
        </View>

      </View>
    </View>
  );
}

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={index => index.url}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  ItemWrap: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginBottom: 5,
    borderBottomWidth: 0.5,
    borderColor: 'gray'
  },
  ItemName: {
    flex: 1
  },
  ItemContent: {
    flex: 9,
    paddingLeft: 5,
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  ItemHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderStyle: 'dotted',
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    paddingVertical: 7
  },
  ItemTitle: {
    flex: 1,
    paddingVertical: 5
  },
  ItemUrlToImage: {
    flex: 1,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ItemDescription: {
    flex: 1,
    paddingVertical: 5
  },
  ItemAuthor: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingVertical: 15
  }
});

export default NewsScreen;
