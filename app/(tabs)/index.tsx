// App.tsx
import React, { useState } from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';
import HomeScreen from '../../screens/HomeScreen';
import DetailScreen from '../../screens/DetailScreen';
import { users } from '../../data/fakeData';
import SearchResults from '../../components/SearchResultsScreen';

export default function App() {
  const [selectedUser, setSelectedUser] = useState<string | typeof users[0] | null>(null);
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const handleSelectUser = (user: typeof users[0]) => {
    setSelectedUser(user);
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
      {!selectedUser ? (
        <HomeScreen onSelectUser={handleSelectUser} />
      ) : typeof selectedUser === 'string' ? (
        <SearchResults query={selectedUser} onBack={() => setSelectedUser(null)} onSelectUser={handleSelectUser} />
      ) : (
        <DetailScreen user={selectedUser} onBack={() => setSelectedUser(null)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 16,
  },
});
