import React, { useState, useRef } from 'react';
import { Button } from 'react-native';
import { Audio } from 'expo-av';

export function PlayRecording({ recordingURI }) {
  const soundRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <Button
        title="Stop Playing"
        onPress={() => {
          soundRef.current?.stopAsync();
          soundRef.current = null;
          setIsPlaying(false);
        }}
      />
    );
  }

  return (
    <Button
      title="Play Recording"
      onPress={async () => {
        console.log('Loading sound..');
        const { sound } = await Audio.Sound.createAsync(
          { uri: recordingURI },
          { shouldPlay: true }
        );

        sound.setOnPlaybackStatusUpdate((status) => {
          setIsPlaying(status.isPlaying);

          if (status.didJustFinish) {
            setIsPlaying(false); // Reset playing status when finished
          }
        });

        console.log('Playing sound..');
        await sound.playAsync();

        soundRef.current = sound;
      }}
    />
  );
}