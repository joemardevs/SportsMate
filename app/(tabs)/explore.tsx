import {
  View,
  Text,
  Platform,
  StatusBar,
  Pressable,
  ImageSourcePropType,
  Image,
} from "react-native";
import React, { useCallback, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Swiper, type SwiperCardRefType } from "rn-swiper-list";

const ExploreScreen = () => {
  const swiperRef = useRef<SwiperCardRefType>(null);

  const IMAGES: ImageSourcePropType[] = [
    require("@/assets/images/mock/image1.jpg"),
    require("@/assets/images/mock/image1.jpg"),
    require("@/assets/images/mock/image1.jpg"),
    require("@/assets/images/mock/image1.jpg"),
    require("@/assets/images/mock/image1.jpg"),
  ];

  const OverlayLabelRight = useCallback(() => {
    return <View className="w-full h-full rounded-2xl bg-primary opacity-50" />;
  }, []);
  const OverlayLabelLeft = useCallback(() => {
    return (
      <View className="w-full h-full rounded-2xl bg-gray-300 opacity-50" />
    );
  }, []);

  const renderCard = useCallback((image: ImageSourcePropType) => {
    return (
      <View
        style={{
          flex: 1,
          borderRadius: 16,
          height: "100%",
          width: "100%",
        }}>
        <Image
          source={image}
          style={{
            height: "100%",
            width: "100%",
            borderRadius: 16,
          }}
          resizeMode="cover"
        />
        <View
          style={{
            position: "absolute",
            bottom: 20,
            left: 20,
          }}>
          <Text className="text-white text-2xl font-sfbold">John Doe, 25</Text>
          <Text className="text-white text-base font-sfmedium">Hiking</Text>
        </View>
      </View>
    );
  }, []);

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}>
      <LinearGradient
        colors={["#ef556c", "#dcb1b8"]}
        style={{
          flex: 1,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 60,
        }}>
        <View className="px-4">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-white text-xl">People Nearby</Text>

            <Pressable
              onPress={() => {}}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                padding: 10,
                borderRadius: 100,
              }}>
              <SimpleLineIcons name="equalizer" size={24} color="white" />
            </Pressable>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 16,
            paddingHorizontal: 16,
          }}>
          <Swiper
            ref={swiperRef}
            data={IMAGES}
            renderCard={renderCard}
            cardStyle={{
              width: "100%",
              height: "100%",
              borderRadius: 16,
            }}
            OverlayLabelRight={OverlayLabelRight}
            OverlayLabelLeft={OverlayLabelLeft}
            onIndexChange={index => {
              console.log("Current Active index", index);
            }}
            onSwipeRight={cardIndex => {
              console.log("onSwipeRight", cardIndex);
            }}
            onSwipeLeft={cardIndex => {
              console.log("onSwipeLeft", cardIndex);
            }}
            disableBottomSwipe
            disableTopSwipe
          />
        </View>
        <View
          style={{
            padding: 20,
            flexDirection: "row",
            justifyContent: "center",
            gap: 16,
            marginBottom: 75,
          }}>
          <Pressable
            onPress={() => swiperRef.current?.swipeLeft()}
            style={{
              backgroundColor: "#FFF",
              padding: 10,
              borderRadius: 100,
            }}>
            <Feather name="x" size={32} color="#ef556c" />
          </Pressable>

          <Pressable
            onPress={() => swiperRef.current?.swipeRight()}
            style={{
              backgroundColor: "#ef556c",
              padding: 10,
              borderRadius: 100,
            }}>
            <Ionicons name="heart" size={32} color="white" />
          </Pressable>
        </View>
      </LinearGradient>
    </GestureHandlerRootView>
  );
};

export default ExploreScreen;
