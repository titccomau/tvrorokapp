import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { isLargeScreen, getContentMaxWidth } from "@/utils/tv-utils";

interface ResponsiveLayoutProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export function ResponsiveLayout({ children, style }: ResponsiveLayoutProps) {
  const isLarge = isLargeScreen();
  
  return (
    <View style={[
      styles.container,
      isLarge && styles.largeContainer,
      style
    ]}>
      <View style={[
        styles.content,
        isLarge && { maxWidth: getContentMaxWidth() }
      ]}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  largeContainer: {
    alignItems: "center",
  },
  content: {
    flex: 1,
    width: "100%",
  },
});

interface ResponsiveGridProps {
  children: React.ReactNode;
  style?: ViewStyle;
  itemStyle?: ViewStyle;
}

export function ResponsiveGrid({ children, style, itemStyle }: ResponsiveGridProps) {
  const isLarge = isLargeScreen();
  
  // Convert children to array
  const childrenArray = React.Children.toArray(children);
  
  return (
    <View style={[
      gridStyles.grid,
      isLarge && gridStyles.largeGrid,
      style
    ]}>
      {childrenArray.map((child, index) => (
        <View key={index} style={[gridStyles.gridItem, itemStyle]}>
          {child}
        </View>
      ))}
    </View>
  );
}

const gridStyles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  largeGrid: {
    justifyContent: "flex-start",
  },
  gridItem: {
    padding: 8,
  },
});