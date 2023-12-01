import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import {SearchInput} from './Components/SearchInput';
import {Card} from './Components/Card';

export const Home = () => {
  const [getGifsList, setGifsList] = useState([]);
  const [search, setSearch] = useState('flower');
  const fetchGIFs = async () => {
    try {
      const resp = await axios.get(
        `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=YIgFoVU5Y8vghmhTR4LmyhZffICVJHA7`,
      );
      setGifsList(resp.data.data);
      console.log(resp);
    } catch (error) {
      console.log({error});
    }
  };
  console.log({getGifsList});

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
        <TouchableOpacity onPress={fetchGIFs}>
          <Text>Fetch Detals </Text>
        </TouchableOpacity>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={styles.cardBox}
          data={getGifsList}
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
