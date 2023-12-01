import {StyleSheet, Text, View, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';

const {width, height} = Dimensions.get('screen');

interface Props {
  title: string;
  url: string;
}

export const Card: React.FC<Props> = ({title, url}) => {
  return (
    <View style={styles.box}>
      <FastImage
        source={{
          uri: url,
        }}
        style={styles.img}
      />
      <View style={styles.detailBox}>
        <Text>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderRadius: 5,
    width: width / 2.3,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 5,
  },
  img: {
    height: height / 4,
    width: width / 2.3,
    borderTopEndRadius: 5,
    borderTopRightRadius: 5,
  },
  loader: {
    position: 'absolute',
    zIndex: 1,
  },
  detailBox: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
