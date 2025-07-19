import { useEvent } from 'expo';
import { useVideoPlayer, VideoPlayer, VideoView } from 'expo-video';
import { StyleSheet, View, Button, SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const videoSource =   'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
const VideoScreen = () => {
  const player = useVideoPlayer(videoSource);
  const insets = useSafeAreaInsets();

  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

  return (
    <SafeAreaView style={[styles.contentContainer,{paddingTop: insets.top,paddingBottom: insets.bottom}]}>
      <VideoView style={[styles.video]} player={player} allowsFullscreen/>
      <View style={styles.controlsContainer}>
        <Button
          title={isPlaying ? 'Pause' : 'Play'}
          onPress={() => {
            if (isPlaying) {
              player.pause();
            } else {
              player.play();
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
}
export default VideoScreen;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});
