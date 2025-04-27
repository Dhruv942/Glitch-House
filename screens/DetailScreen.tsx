import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { users } from '../data/fakeData';

interface Props {
  user: typeof users[0];
  onBack: () => void;
}

const DetailScreen: React.FC<Props> = ({ user, onBack }) => (
  <View style={styles.container}>
    <Image source={{ uri: user.image }} style={styles.image} />
    
    {/* Horizontal Line */}
    <View style={styles.line} />

    <Text style={styles.name}>{user.name}</Text>
    <Text style={styles.bio}>{user.bio}</Text>
    
    <Text style={styles.projectsTitle}>Projects:</Text>
    {user.projects.map((project, index) => (
      <Text key={index} style={styles.project}>{project}</Text>
    ))}
    
    <Text style={styles.topic}>Topic: {user.topic}</Text>
    <Text style={styles.game}>Game: {user.game}</Text>

    <Button title="🔙 Go Back" onPress={onBack} color="#0066cc" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: '100%',  // Make the image take the full width
    height: 200,    // Set a fixed height for the image
    marginBottom: 16,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 16,  // Add margin to separate the line from the content
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    color: '#555',
  },
  projectsTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
  },
  project: {
    fontSize: 14,
    color: '#333',
    marginVertical: 4,
  },
  topic: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
  },
  game: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
});

export default DetailScreen;
