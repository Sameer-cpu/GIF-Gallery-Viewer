import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {View, TextInput} from 'react-native';

export const SearchInput: React.FC<any> = ({
  placeholder,
  onTextChange,
  labelStyles,
  aligngnment = 'left',
  value,
  keyboardReturnType = 'next',
  multiline = false,
  keyboardType,
  styling,
  onSearch,
}) => {
  return (
    <View style={[styles.continer, styling]}>
      <View style={styles.inputBox}>
        <TextInput
          style={[styles.input, labelStyles]}
          placeholder={placeholder || ''}
          textAlignVertical="center"
          autoCapitalize="none"
          underlineColorAndroid={'transparent'}
          textAlign={aligngnment}
          onChangeText={onTextChange}
          scrollEnabled={false}
          autoCorrect={false}
          placeholderTextColor={'#999999'}
          value={value}
          keyboardType={keyboardType}
          returnKeyType={keyboardReturnType}
          multiline={multiline}
        />
        <TouchableOpacity onPress={onSearch} style={styles.searchBtn}>
          <Text style={{color: 'white'}}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  continer: {
    borderColor: 'black',
    borderWidth: 0,
    borderRadius: 30,
    marginBottom: 13,
  },
  label: {
    fontWeight: '500',
    marginBottom: 6,
    fontSize: 14,
  },
  input: {
    flex: 1,
  },

  inputBox: {
    flexDirection: 'row',
    borderRadius: 30,
    height: 45,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#848484',
  },
  searchBtn: {
    justifyContent: 'center',
    backgroundColor: 'gray',
    paddingHorizontal: 6,
    borderTopEndRadius: 30,
    borderBottomEndRadius: 30,
  },
});
