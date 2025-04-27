import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Animated,
} from 'react-native';
import { users } from '../data/fakeData'; // Import your fake data
import Icon from 'react-native-vector-icons/Feather';

interface SearchResultsScreenProps {
  query: string;
  onBack: () => void;
  onSelectUser: (user: User) => void;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const SearchResultsScreen: React.FC<SearchResultsScreenProps> = ({ query, onBack, onSelectUser }) => {
  const theme = useColorScheme();
  const isDark = theme === 'dark';
  const [searchQuery, setSearchQuery] = useState(query);

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Animation for search bar
  const searchBarScale = useRef(new Animated.Value(1)).current;

  // Cross icon animation
  const crossIconScale = useRef(new Animated.Value(1)).current;

  // Animate scale on search bar focus
  const handleFocus = () => {
    Animated.timing(searchBarScale, {
      toValue: 1.05,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handleBlur = () => {
    Animated.timing(searchBarScale, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      handleFocus();
    } else {
      handleBlur();
    }
  }, [searchQuery]);

  // Animate the cross icon on press
  const animateCrossIcon = () => {
    Animated.sequence([
      Animated.spring(crossIconScale, {
        toValue: 1.2,
        friction: 3,
        useNativeDriver: true,
      }),
      Animated.spring(crossIconScale, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={[styles.container]}>
      {/* Search Bar */}
      <View style={{ alignItems: 'center', marginBottom: 10 }}>
        <Animated.View
          style={[{ width: 350, position: 'relative', height: 51.44, transform: [{ scale: searchBarScale }] }]}
        >
          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder={`Search for "${searchQuery}"...`}
            placeholderTextColor={isDark ? '#888' : '#aaa'}
            style={[
              styles.input,
              {
                backgroundColor: isDark ? '#333' : '#f0f0f0', // Dark background in dark mode, light in light mode
                color: isDark ? '#fff' : '#000', // Text color: white in dark mode, black in light mode
              },
            ]}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          {/* Left Back Icon */}
          <TouchableOpacity onPress={onBack} style={styles.iconLeft}>
            <Icon name="chevron-left" size={24} color={isDark ? 'silver' : '#000'} />
          </TouchableOpacity>

          {/* Right Clear Icon */}
          <TouchableOpacity
            onPress={() => {
              setSearchQuery('');
              animateCrossIcon(); // Animate cross icon on press
            }}
            style={styles.iconRight}
          >
            <Animated.View style={{ transform: [{ scale: crossIconScale }] }}>
              <Icon name="x" size={22} color={isDark ? 'silver' : '#000'} />
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>
      </View>

      {/* Heading */}
      <Text style={[styles.heading, { color: isDark ? '#fff' : '#000' }]}>
        "{searchQuery}"
      </Text>

      {/* User List */}
      <FlatList
        data={filtered}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onSelectUser(item)}
            style={[styles.card, { backgroundColor: isDark ? '#1c1c1e' : '#f9f9f9' }]}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]} numberOfLines={2}>
                {item.name}
              </Text>
              {/* Three-dot icon */}
              <TouchableOpacity style={styles.menuIcon}>
                <Icon name="more-vertical" size={20} color={isDark ? '#fff' : '#000'} />
              </TouchableOpacity>
            </View>
            <View style={styles.statsRow}>
              <View style={styles.statsItem}>
                <Icon name="eye" size={14} color={isDark ? '#aaa' : '#666'} />
                <Text style={[styles.statsText, { color: isDark ? '#aaa' : '#666' }]}>10.1K</Text>
              </View>
              <View style={styles.statsItem}>
                <Icon name="heart" size={14} color="limegreen" />
                <Text style={[styles.statsText, { color: 'limegreen' }]}>2435</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingHorizontal: 14, paddingBottom: 80, paddingLeft: 0, paddingRight: 0 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
    height: 51.44,
    paddingLeft: 40, // Space for the left icon
    paddingRight: 40, // Space for the right icon
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    paddingLeft: 8,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 2,
    padding: 8,
    marginHorizontal: 6,
    marginVertical: 5,
    width: (SCREEN_WIDTH / 2) - 24,
    height: 250,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 2,
    marginBottom: 6,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 6,
    height: 36,
  },
  menuIcon: {
    padding: 6,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
  },
  statsItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statsText: {
    fontSize: 12,
    marginLeft: 4,
  },
  iconLeft: {
    position: 'absolute',
    left: 12,
    top: 13,
  },
  iconRight: {
    position: 'absolute',
    right: 12,
    top: 13,
  },
});

export default SearchResultsScreen;
