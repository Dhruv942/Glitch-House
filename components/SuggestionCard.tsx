import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface Props {
  name: string;
  image: string;
  bio: string;
}

const SuggestionCard: React.FC<Props> = ({ name, image, bio }) => (
  <View style={styles.card}>
    <Image source={{ uri: image }} style={styles.image} />
    <View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.bio}>{bio}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#fff',
    marginTop: 12,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 12,
    borderRadius: 25,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bio: {
    color: '#555',
  },
});

export default SuggestionCard;
