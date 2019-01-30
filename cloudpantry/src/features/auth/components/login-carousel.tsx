import Carousel from "react-native-snap-carousel";
import * as React from "react";
import { View } from "react-native";
import CarouselSlider from "./carousel-slider";

interface carouselItems {
  item: {
    image: string;
    text: string;
    title: string;
  };
  index: Number;
}

const carouselItems = [
  {
    image: require("../../../../assets/images/recipeIcon.png"),
    text:
      "Millions of recipes at your finger tips, using ingredients you already have.",
    title: "Search Recipes"
  },
  {
    image: require("../../../../assets/images/trackingIcon.png"),
    text:
      "Keep track of all the items in your pantry, from the checkout to the kitchen.",
    title: "Track Food"
  },
  {
    image: require("../../../../assets/images/optimizeIcon.png"),
    text: "Create optimized meal plans that eliminate food waste.",
    title: "Create Meal Plans"
  },
  {
    image: require("../../../../assets/images/registerIcon.jpeg"),
    text: "Add items to your pantry upon checkout.",
    title: "Update Your Pantry"
  }
];

function renderItem({ item, index }: carouselItems) {
  return <CarouselSlider item={item} index={index} />;
}

const LoginCarousel = () => {
  return (
    <View>
      <Carousel
        data={carouselItems}
        renderItem={renderItem}
        layout={"default"}
        layoutCardOffset={18}
        sliderWidth={400}
        sliderHeight={400}
        itemHeight={400}
        itemWidth={300}
      />
    </View>
  );
};

export default LoginCarousel;
