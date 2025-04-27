import React from 'react';
import { View } from 'react-native';
import SearchBar from '../components/Searchbar';
import { users } from '../data/fakeData';

interface Props {
  onSelectUser: (user: typeof users[0]) => void;
}

const HomeScreen: React.FC<Props> = ({ onSelectUser }) => (
  <View>
    <SearchBar onSelect={onSelectUser} />
  </View>
);

export default HomeScreen;
