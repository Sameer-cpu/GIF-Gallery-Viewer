import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {SearchInput} from './Components/SearchInput';
import {Card} from './Components/Card';
import {useDispatch, useSelector} from 'react-redux';
import {showHomeGifs} from '../redux/Home/homeActions';
import {homeSelectors} from '../redux/Home/homeSelectors';

export const Home = () => {
  const dispatch = useDispatch();
  const [getGifsList, setGifsList] = useState([]);
  const gifList = useSelector(homeSelectors.showGifList);
  const [search, setSearch] = useState('flower');
  const fetchGIFs = async () => {
    try {
      const resp = await axios.get(
        `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=YIgFoVU5Y8vghmhTR4LmyhZffICVJHA7`,
      );
      dispatch(showHomeGifs(resp.data.data));
    } catch (error) {
      console.log({error});
    }
  };
  useEffect(() => {
    fetchGIFs();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <SearchInput
          placeholder="Search"
          onTextChange={(e: string) => {
            console.log({e});

            setSearch(e);
          }}
          onSearch={() => {
            fetchGIFs();
          }}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={styles.cardBox}
          data={gifList}
          renderItem={({item, index}: any) => {
            return (
              <Card
                title={item.title}
                url={item.images.preview_gif.url}
                key={index}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  cardBox: {
    justifyContent: 'space-between',
  },
});
