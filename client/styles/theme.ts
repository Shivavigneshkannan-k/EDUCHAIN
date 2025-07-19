import { StyleSheet } from "react-native";

// Color palette for professional course application
export const colors = {
  // Primary colors
  primary: "#6366F1", // Modern indigo
  primaryDark: "#4F46E5", // Darker indigo
  primaryLight: "#A5B4FC", // Light indigo

  // Secondary colors
  secondary: "#10B981", // Emerald green
  secondaryDark: "#059669",
  secondaryLight: "#6EE7B7",

  // Neutral colors
  background: "#F8FAFC", // Very light gray
  surface: "#FFFFFF", // Pure white
  surfaceSecondary: "#F1F5F9", // Light gray

  // Text colors
  textPrimary: "#0F172A", // Very dark slate
  textSecondary: "#64748B", // Medium slate
  textLight: "#94A3B8", // Light slate
  textOnPrimary: "#FFFFFF",

  // Status colors
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",

  // Borders and dividers
  border: "#E2E8F0",
  borderLight: "#F1F5F9",

  // Gradients
  gradientStart: "#6366F1",
  gradientEnd: "#8B5CF6"
};

// Typography scale
export const typography = {
  // Font sizes
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 30,
  "4xl": 36,

  // Font weights
  light: "300" as const,
  normal: "400" as const,
  medium: "500" as const,
  semibold: "600" as const,
  bold: "700" as const,
  extrabold: "800" as const,

  // Line heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75
  }
};

// Spacing scale
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  "2xl": 48,
  "3xl": 64
};

// Border radius
export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  "2xl": 20,
  full: 9999
};

// Shadows
export const shadows = {
  sm: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1
  },
  md: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3
  },
  lg: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 6
  },
  xl: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.25,
    shadowRadius: 25,
    elevation: 10
  }
};

// Common component styles
export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },

  safeArea: {
    flex: 1,
    backgroundColor: colors.background
  },

  card: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    ...shadows.sm
  },

  cardLarge: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    ...shadows.md
  },

  button: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    alignItems: "center",
    justifyContent: "center",
    ...shadows.sm
  },

  buttonSecondary: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.sm
  },

  buttonText: {
    color: colors.textOnPrimary,
    fontSize: typography.base,
    fontWeight: typography.semibold
  },

  buttonTextSecondary: {
    color: colors.textPrimary,
    fontSize: typography.base,
    fontWeight: typography.semibold
  },

  input: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    fontSize: typography.base,
    color: colors.textPrimary,
    borderWidth: 1,
    borderColor: colors.border
  },

  inputFocused: {
    borderColor: colors.primary,
    ...shadows.sm
  },

  heading1: {
    fontSize: typography["4xl"],
    fontWeight: typography.bold,
    color: colors.textPrimary,
    lineHeight: typography.lineHeight.tight * typography["4xl"]
  },

  heading2: {
    fontSize: typography["3xl"],
    fontWeight: typography.bold,
    color: colors.textPrimary,
    lineHeight: typography.lineHeight.tight * typography["3xl"]
  },

  heading3: {
    fontSize: typography["2xl"],
    fontWeight: typography.semibold,
    color: colors.textPrimary,
    lineHeight: typography.lineHeight.tight * typography["2xl"]
  },

  bodyLarge: {
    fontSize: typography.lg,
    fontWeight: typography.normal,
    color: colors.textPrimary,
    lineHeight: typography.lineHeight.normal * typography.lg
  },

  body: {
    fontSize: typography.base,
    fontWeight: typography.normal,
    color: colors.textPrimary,
    lineHeight: typography.lineHeight.normal * typography.base
  },

  bodySecondary: {
    fontSize: typography.base,
    fontWeight: typography.normal,
    color: colors.textSecondary,
    lineHeight: typography.lineHeight.normal * typography.base
  },

  bodySmall: {
    fontSize: typography.sm,
    fontWeight: typography.normal,
    color: colors.textSecondary,
    lineHeight: typography.lineHeight.normal * typography.sm
  },

  centerContent: {
    alignItems: "center",
    justifyContent: "center"
  },

  row: {
    flexDirection: "row",
    alignItems: "center"
  },

  spaceBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.md
  }
});
