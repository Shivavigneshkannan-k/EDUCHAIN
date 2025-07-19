import { useEvent } from "expo";
import { useVideoPlayer, VideoPlayer, VideoView } from "expo-video";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  Text
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows
} from "../styles/theme";
import { useEffect, useState } from "react";

const videoSource =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const VideoScreen = () => {
  const player = useVideoPlayer(videoSource);
  const insets = useSafeAreaInsets();

  
  const [isPlaying, setIsPlaying] = useState(false);

useEffect(() => {
  const sub = player.addListener("playingChange", (event) => {
    setIsPlaying(event.isPlaying);
  });

  return () => {
    sub.remove(); // Clean up the listener on unmount
  };
}, [player]);

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <VideoView
          style={styles.video}
          player={player}
          allowsFullscreen
        />
      </View>
      <View style={""}>
        <TouchableOpacity
          style={styles.playPauseButton}
          onPress={() => {
            if (isPlaying) {
              player.pause();
            } else {
              player.play();
            }
          }}>
          <Text style={""}>{isPlaying ? "⏸" : "▶"}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.controlsContainer}>
        <View style={styles.videoInfo}>
          <Text style={styles.videoTitle}>Introduction to React Native</Text>
          <Text style={styles.videoDescription}>
            Learn the basics of React Native and how to set up your development
            environment.
          </Text>
        </View>

        <View style={styles.videoStats}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Duration</Text>
            <Text style={styles.statValue}>25:30</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default VideoScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.lg
  },

  videoContainer: {
    position: "relative",
    backgroundColor: colors.textPrimary,
    borderRadius: borderRadius.xl,
    overflow: "hidden",
    ...shadows.lg
  },

  video: {
    width: "100%",
    aspectRatio: 16 / 9
  },

  videoOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)"
  },

  playPauseButton: {
    width: 60,
    height: 60,
    borderRadius: borderRadius.full,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    alignItems: "center",
    justifyContent: "center",
    ...shadows.lg
  },

  playPauseIcon: {
    fontSize: typography.xl,
    color: colors.textPrimary,
    marginLeft: 2
  },

  controlsContainer: {
    paddingVertical: spacing.lg
  },

  videoInfo: {
    marginBottom: spacing.md
  },

  videoTitle: {
    fontSize: typography.lg,
    fontWeight: typography.bold,
    color: colors.textPrimary,
    marginBottom: spacing.sm
  },

  videoDescription: {
    fontSize: typography.base,
    color: colors.textSecondary,
    lineHeight: typography.lineHeight.relaxed * typography.base
  },

  videoStats: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border
  },

  statItem: {
    alignItems: "center"
  },

  statLabel: {
    fontSize: typography.sm,
    color: colors.textSecondary,
    marginBottom: spacing.xs
  },

  statValue: {
    fontSize: typography.base,
    fontWeight: typography.semibold,
    color: colors.textPrimary
  }
});
