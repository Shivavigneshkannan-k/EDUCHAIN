import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

import { PlayRecording } from './PlayRecording';

export default function AudioPlayer() {
  const recordingRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingURI, setRecordingURI] = useState(null);

  useEffect(() => {
    // Request microphone permission when the app is loaded
    Audio.requestPermissionsAsync();
  }, []);

  const startRecording = async () => {
    try {
      setRecordingURI(null);
      console.log('Starting recording..');
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync();
      await recording.startAsync();

      recordingRef.current = recording;
      setIsRecording(true);

      console.log('Recording started');
    } catch (error) {
      console.error('Failed to start recording:', error);
    }
  };

  const stopRecording = async () => {
    console.log('Stopping recording..');

    try {
      await recordingRef.current?.stopAndUnloadAsync();
    } catch (error) {
      // Do nothing -- we are already unloaded.
    }

    const uri = recordingRef.current?.getURI();
    setRecordingURI(uri);
    console.log('Recording stopped and stored at', uri);

    recordingRef.current = null;
    setIsRecording(false);
  };

  return (
    <View style={styles.container}>
      <Text>Audio Recording Example</Text>
      <Button
        title={isRecording ? 'Stop Recording' : 'Start Recording'}
        onPress={isRecording ? stopRecording : startRecording}
      />

      {recordingURI && (
        <View style={{ marginTop: 20 }}>
          <PlayRecording recordingURI={recordingURI} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});