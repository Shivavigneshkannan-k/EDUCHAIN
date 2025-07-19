import { use } from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link } from "expo-router";
import ProfilePic from "../assets/profilepic.webp";
import Course from "./course";

import {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  commonStyles
} from "../styles/theme";
const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  const courses = [
    {
      id: "1",
      title: "React Native Fundamentals",
      progress: 0,
      lessons: 12,
      duration: "4h 30m"
    },
    {
      id: "2",
      title: "Advanced JavaScript",
      progress: 0,
      lessons: 18,
      duration: "6h 15m"
    },
    {
      id: "3",
      title: "UI/UX Design Principles",
      progress: 0,
      lessons: 8,
      duration: "3h 45m"
    },
    {
      id: "4",
      title: "Mobile App Development",
      progress: 0,
      lessons: 15,
      duration: "5h 20m"
    }
  ];

  const renderCourseCard = ({ item }: { item: any }) => (
    <Link
      href='/course'
      asChild>
      <TouchableOpacity style={styles.courseCard}>
        <View style={styles.courseContent}>
          <View style={styles.courseHeader}>
            <Text style={styles.courseTitle}>{item.title}</Text>
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View
                  style={[styles.progressFill, { width: `${item.progress}%` }]}
                />
              </View>
              <Text style={styles.progressText}>{item.progress}%</Text>
            </View>
          </View>

          <View style={styles.courseStats}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{item.lessons}</Text>
              <Text style={styles.statLabel}>Lessons</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{item.duration}</Text>
              <Text style={styles.statLabel}>Duration</Text>
            </View>
          </View>

          <View style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Continue Learning</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <SafeAreaView style={[commonStyles.safeArea, { paddingTop: insets.top }]}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View>
              <Text style={styles.greeting}>Good morning!</Text>
              <Text style={styles.userName}>Luffy 👋</Text>
            </View>
            <TouchableOpacity style={styles.profileContainer}>
              <Image
                source={ProfilePic}
                style={styles.profileImage}
              />
              <View style={styles.notificationDot} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>
            Ready to continue your learning journey?
          </Text>
          <Text style={styles.welcomeSubtitle}>
            Pick up where you left off or explore new courses
          </Text>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statCardLabel}>Courses</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statCardLabel}>Completed</Text>
          </View>
        </View>

        {/* Courses Section */}
        <View style={styles.coursesSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Your Courses</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={courses}
            renderItem={renderCourseCard}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1
  },

  // Header Styles
  header: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.surface,
    ...shadows.sm
  },

  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  greeting: {
    fontSize: typography.sm,
    color: colors.textSecondary,
    fontWeight: typography.medium
  },

  userName: {
    fontSize: typography["2xl"],
    color: colors.textPrimary,
    fontWeight: typography.bold,
    marginTop: 4
  },

  profileContainer: {
    position: "relative"
  },

  profileImage: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.full,
    borderWidth: 2,
    borderColor: colors.primary
  },

  notificationDot: {
    position: "absolute",
    top: 2,
    right: 2,
    width: 12,
    height: 12,
    backgroundColor: colors.error,
    borderRadius: borderRadius.full,
    borderWidth: 2,
    borderColor: colors.surface
  },

  // Welcome Section
  welcomeSection: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xl,
    backgroundColor: colors.surface,
    marginTop: spacing.xs
  },

  welcomeTitle: {
    fontSize: typography.xl,
    fontWeight: typography.bold,
    color: colors.textPrimary,
    marginBottom: spacing.sm
  },

  welcomeSubtitle: {
    fontSize: typography.base,
    color: colors.textSecondary,
    lineHeight: typography.lineHeight.relaxed * typography.base
  },

  // Stats Section
  statsContainer: {
    flexDirection: "row",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    gap: spacing.md
  },

  statCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    alignItems: "center",
    ...shadows.sm
  },

  statNumber: {
    fontSize: typography["2xl"],
    fontWeight: typography.bold,
    color: colors.primary,
    marginBottom: spacing.xs
  },

  statCardLabel: {
    fontSize: typography.sm,
    color: colors.textSecondary,
    fontWeight: typography.medium
  },

  // Courses Section
  coursesSection: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.lg
  },

  sectionTitle: {
    fontSize: typography.xl,
    fontWeight: typography.bold,
    color: colors.textPrimary
  },

  seeAllText: {
    fontSize: typography.base,
    color: colors.primary,
    fontWeight: typography.semibold
  },

  // Course Card Styles
  courseCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...shadows.md
  },

  courseContent: {
    flex: 1
  },

  courseHeader: {
    marginBottom: spacing.md
  },

  courseTitle: {
    fontSize: typography.lg,
    fontWeight: typography.bold,
    color: colors.textPrimary,
    marginBottom: spacing.sm
  },

  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm
  },

  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: colors.borderLight,
    borderRadius: borderRadius.full,
    overflow: "hidden"
  },

  progressFill: {
    height: "100%",
    backgroundColor: colors.secondary,
    borderRadius: borderRadius.full
  },

  progressText: {
    fontSize: typography.sm,
    fontWeight: typography.semibold,
    color: colors.secondary,
    minWidth: 35,
    textAlign: "right"
  },

  courseStats: {
    flexDirection: "row",
    gap: spacing.lg,
    marginBottom: spacing.md
  },

  statItem: {
    alignItems: "center"
  },

  statValue: {
    fontSize: typography.base,
    fontWeight: typography.bold,
    color: colors.textPrimary,
    marginBottom: 2
  },

  statLabel: {
    fontSize: typography.xs,
    color: colors.textSecondary,
    fontWeight: typography.medium
  },

  continueButton: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    alignItems: "center",
    ...shadows.sm
  },

  continueButtonText: {
    color: colors.textOnPrimary,
    fontSize: typography.sm,
    fontWeight: typography.semibold
  }
});
export default HomeScreen;
