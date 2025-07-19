import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import VideoPlayer from "./VideoPlayer.tsx";
import {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  commonStyles
} from "../styles/theme";

const Course = () => {
  const insets = useSafeAreaInsets();

  const courseData = {
    title: "React Native Fundamentals",
    instructor: "John Doe",
    duration: "4h 30m",
    lessons: 12,
    progress: 75,
    description:
      "Master the fundamentals of React Native development. Learn to build beautiful, performant mobile applications for iOS and Android using React Native.",
    modules: [
      {
        id: 1,
        title: "Introduction to React Native",
        duration: "25 min",
        completed: true
      },
      {
        id: 2,
        title: "Setting up Development Environment",
        duration: "30 min",
        completed: true
      },
      {
        id: 3,
        title: "Understanding Components",
        duration: "45 min",
        completed: true
      },
      {
        id: 4,
        title: "Navigation and Routing",
        duration: "35 min",
        completed: false,
        current: true
      },
      {
        id: 5,
        title: "State Management",
        duration: "40 min",
        completed: false
      },
      { id: 6, title: "API Integration", duration: "50 min", completed: false }
    ]
  };

  return (
    <ScrollView
      style={[commonStyles.safeArea, { paddingTop: insets.top }]}
      showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={[styles.headerTitle]}>Course</Text>
      </View>

      {/* Course Info */}
      <View style={styles.courseInfo}>
        <Text style={styles.courseTitle}>{courseData.title}</Text>
        <Text style={styles.instructor}>by {courseData.instructor}</Text>

        <View style={styles.courseMetrics}>
          <View style={styles.metricItem}>
            <Text style={styles.metricValue}>{courseData.duration}</Text>
            <Text style={styles.metricLabel}>Total Time</Text>
          </View>
          <View style={styles.metricItem}>
            <Text style={styles.metricValue}>{courseData.lessons}</Text>
            <Text style={styles.metricLabel}>Lessons</Text>
          </View>
        </View>

        <View style={styles.progressSection}>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                { width: `${courseData.progress}%` }
              ]}
            />
          </View>
        </View>
      </View>

      {/* Video Player */}
      <View style={styles.videoSection}>
        <VideoPlayer />
      </View>

      {/* Description */}
      <View style={styles.descriptionSection}>
        <Text style={styles.sectionTitle}>About this course</Text>
        <Text style={styles.description}>{courseData.description}</Text>
      </View>

      {/* Course Modules */}
      <View style={styles.modulesSection}>
        <Text style={styles.sectionTitle}>Course Content</Text>
        {courseData.modules.map((module) => (
          <TouchableOpacity
            key={module.id}
            style={[
              styles.moduleItem,
            ]}>
            <View style={styles.moduleLeft}>
              <View
                style={[
                  styles.moduleIcon,
                ]}>
                <Text
                  style={[
                    styles.moduleIconText,
                  ]}>
                  {module.id}
                </Text>
              </View>
              <View style={styles.moduleInfo}>
                <Text
                  style={[
                    styles.moduleTitle,
                  ]}>
                  {module.title}
                </Text>
                <Text style={styles.moduleDuration}>{module.duration}</Text>
              </View>
            </View>

          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};
export default Course;

const styles = StyleSheet.create({
  // Header Styles
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.surface,
    ...shadows.sm
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.md,
    backgroundColor: colors.surfaceSecondary,
    alignItems: "center",
    justifyContent: "center"
  },

  backButtonText: {
    fontSize: typography.lg,
    color: colors.textPrimary,
    fontWeight: typography.semibold
  },

  headerTitle: {
    fontSize: typography.lg,
    fontWeight: typography.bold,
    color: colors.textPrimary
  },

  menuButton: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.md,
    backgroundColor: colors.surfaceSecondary,
    alignItems: "center",
    justifyContent: "center"
  },

  menuButtonText: {
    fontSize: typography.lg,
    color: colors.textPrimary,
    fontWeight: typography.bold
  },

  // Course Info
  courseInfo: {
    backgroundColor: colors.surface,
    padding: spacing.lg,
    marginTop: spacing.xs
  },

  courseTitle: {
    fontSize: typography["3xl"],
    fontWeight: typography.bold,
    color: colors.textPrimary,
    marginBottom: spacing.sm
  },

  instructor: {
    fontSize: typography.base,
    color: colors.textSecondary,
    marginBottom: spacing.lg
  },

  courseMetrics: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: spacing.lg
  },

  metricItem: {
    alignItems: "center"
  },

  metricValue: {
    fontSize: typography.xl,
    fontWeight: typography.bold,
    color: colors.primary,
    marginBottom: spacing.xs
  },

  metricLabel: {
    fontSize: typography.sm,
    color: colors.textSecondary,
    fontWeight: typography.medium
  },

  progressSection: {
    marginTop: spacing.md
  },

  progressBar: {
    height: 8,
    backgroundColor: colors.borderLight,
    borderRadius: borderRadius.full,
    overflow: "hidden"
  },

  progressFill: {
    height: "100%",
    backgroundColor: colors.secondary,
    borderRadius: borderRadius.full
  },

  // Video Section
  videoSection: {
    backgroundColor: colors.surface,
    marginTop: spacing.xs,
    paddingVertical: spacing.md
  },

  // Description Section
  descriptionSection: {
    backgroundColor: colors.surface,
    padding: spacing.lg,
    marginTop: spacing.xs
  },

  sectionTitle: {
    fontSize: typography.xl,
    fontWeight: typography.bold,
    color: colors.textPrimary,
    marginBottom: spacing.md
  },

  description: {
    fontSize: typography.base,
    color: colors.textSecondary,
    lineHeight: typography.lineHeight.relaxed * typography.base
  },

  // Modules Section
  modulesSection: {
    backgroundColor: colors.surface,
    padding: spacing.lg,
    marginTop: spacing.xs,
    marginBottom: spacing.xl
  },

  moduleItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.sm,
    backgroundColor: colors.surfaceSecondary,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.border
  },

  moduleItemCurrent: {
    backgroundColor: colors.primaryLight + "20",
    borderColor: colors.primary
  },

  moduleItemCompleted: {
    backgroundColor: colors.secondaryLight + "20",
    borderColor: colors.secondary
  },

  moduleLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1
  },

  moduleIcon: {
    width: 32,
    height: 32,
    borderRadius: borderRadius.full,
    backgroundColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.md
  },

  moduleIconCurrent: {
    backgroundColor: colors.primary
  },

  moduleIconCompleted: {
    backgroundColor: colors.secondary
  },

  moduleIconText: {
    fontSize: typography.sm,
    fontWeight: typography.bold,
    color: colors.textSecondary
  },

  moduleIconTextCurrent: {
    color: colors.textOnPrimary
  },

  moduleIconTextCompleted: {
    color: colors.textOnPrimary
  },

  moduleInfo: {
    flex: 1
  },

  moduleTitle: {
    fontSize: typography.base,
    fontWeight: typography.semibold,
    color: colors.textPrimary,
    marginBottom: 2
  },

  moduleTitleCurrent: {
    color: colors.primary
  },

  moduleDuration: {
    fontSize: typography.sm,
    color: colors.textSecondary
  },

  playButton: {
    width: 36,
    height: 36,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    ...shadows.sm
  },

  playButtonText: {
    color: colors.textOnPrimary,
    fontSize: typography.sm,
    marginLeft: 2
  }
});
