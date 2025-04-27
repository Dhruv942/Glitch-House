import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Pressable,
  Image,
  Text,
  StyleSheet,
  useColorScheme,
  Animated,
  Easing,
} from 'react-native';
import { users } from '../data/fakeData'; // Importing users with topics and games
import Icon from 'react-native-vector-icons/Feather';

interface Props {
  onSelect: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSelect }) => {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(query.toLowerCase())
  );

  const combinedResults = [
    ...filtered,
    { id: 'all', name: `SHOW ALL RESULTS FOR "${query}"`, image: '', bio: '', category: '', topic: '', game: '' },
  ];

  const scaleAnim = useRef(new Animated.Value(1)).current;
  const entranceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (query.length > 0) {
      Animated.timing(entranceAnim, {
        toValue: 1,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();
    } else {
      entranceAnim.setValue(0);
    }
  }, [query]);

  return (
    <View>
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <View style={{ width: '90%', position: 'relative', height: 51.44 }}>
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search profiles"
            placeholderTextColor={isDarkMode ? '#888' : '#aaa'}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={[
              styles.input,
              {
                backgroundColor: isDarkMode ? 'black' : 'white',
                color: isDarkMode ? 'white' : 'black',
                borderColor: isDarkMode ? '#333' : '#ccc',
                shadowColor: focused ? '#00cc99' : 'transparent',
                shadowOpacity: focused ? 0.4 : 0,
                shadowRadius: focused ? 8 : 0,
                elevation: focused ? 4 : 0,
                paddingLeft: 45,
                paddingRight: 45,
              },
            ]}
          />
          <Pressable
            onPress={() => {
              setQuery('');
              setFocused(false);
            }}
            style={{ position: 'absolute', left: 12, top: 13 }}
          >
            <Icon name="chevron-left" size={24} color={isDarkMode ? 'silver' : '#000'} />
          </Pressable>

          <Pressable
            onPress={() => setQuery('')}
            style={{ position: 'absolute', right: 12, top: 13 }}
          >
            <Icon name="x" size={22} color={isDarkMode ? 'silver' : '#000'} />
          </Pressable>
        </View>
      </View>

      {query.length > 0 && (
        <Animated.View
          style={{
            opacity: entranceAnim,
            transform: [
              {
                translateY: entranceAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [10, 0],
                }),
              },
            ],
            marginTop: 12,
          }}
        >
          <FlatList
            data={combinedResults}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Pressable
                onPressIn={() => scaleAnim.setValue(0.96)}
                onPressOut={() => {
                  Animated.timing(scaleAnim, {
                    toValue: 1,
                    duration: 150,
                    useNativeDriver: true,
                  }).start(() => {
                    // Send query to the parent component
                    onSelect(query); // Always pass query string
                    setQuery(''); // Clear input after selection
                    setFocused(false); // Remove focus from search bar
                  });
                }}
              >
                <Animated.View
                  style={[
                    styles.item,
                    {
                      transform: [{ scale: scaleAnim }],
                      backgroundColor: isDarkMode ? '#000' : '#fff',
                      paddingVertical: item.id === 'all' ? 18 : 16,
                    },
                  ]}
                >
                  <Icon
                    name="search"
                    size={item.id === 'all' ? 24 : 20}
                    color={isDarkMode ? '#999' : '#555'}
                    style={[styles.searchIcon, { marginRight: item.id === 'all' ? 14 : 10 }]}
                  />
                  <View style={styles.itemTextContainer}>
                    <Text
                      style={[
                        styles.itemTitle,
                        {
                          fontSize: item.id === 'all' ? 18 : 16,
                          color: isDarkMode
                            ? item.id === 'all'
                              ? '#aaa'
                              : 'white'
                            : item.id === 'all'
                            ? '#555'
                            : 'black',
                          fontWeight: item.id === 'all' ? '600' : '500',
                        },
                      ]}
                    >
                      {item.name}
                    </Text>
                    {item.topic && (
                      <Text style={[styles.itemSubtitle, { fontSize: 14, color: '#777' }]}>
                        in {item.topic}
                      </Text>
                    )}
                  </View>
                  {item.image !== '' && (
                    <Image source={{ uri: item.image }} style={styles.avatar} />
                  )}
                  {item.id === 'all' && (
                    <Icon name="chevron-right" size={25} color={isDarkMode ? '#aaa' : '#000'} />
                  )}
                </Animated.View>
              </Pressable>
            )}
          />
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    height: 51.44,
    width: 350,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#555',
    borderRadius: 6,
    marginVertical: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  itemTextContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  avatar: {
    width: 36,
    height: 36,
    marginLeft: 10,
  },
});

export default SearchBar;
