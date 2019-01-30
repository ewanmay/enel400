import * as React from "react";
import { View, Image, Text, ImageSourcePropType } from "react-native";
import { carouselStyles as styles } from "../styles";

interface CarouselSliderProps {
  item: {
    image: string;
    text: string;
    title: string;
  };
  index: Number;
}
const CarouselSlider = (props: CarouselSliderProps) => {
  const { image, title, text } = props.item;

  const uppercaseTitle = title ? (
    <Text style={styles.title as any} numberOfLines={2}>
      {title.toUpperCase()}
    </Text>
  ) : (
    false
  );

  return (
    <View style={styles.carouselContainer}>
      <View style={styles.shadow as any} />
      <View style={styles.imageContainer as any}>
        <Image
          style={{ width: 300, height: 350 }}
          source={image as ImageSourcePropType}
        />
        <View style={styles.radiusMask as any} />
      </View>
      <View style={styles.textContainer as any}>
        {uppercaseTitle}
        <Text style={styles.subtitle as any} numberOfLines={2}>
          {text}
        </Text>
      </View>
    </View>
  );
};

export default CarouselSlider;
