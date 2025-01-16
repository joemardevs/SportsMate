import { useBoolean } from "@/hooks/useBoolean";
import useColorPalette from "@/hooks/useColorPalette";
import { createContext, useContext, useEffect, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Slider from "@react-native-community/slider";
import { RangeSlider } from "@react-native-assets/slider";
import {
  FontAwesome5,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

type ExploreFilterContextType = {
  isFilterOpen: boolean;
  openFilter: () => void;
  closeFilter: () => void;
};

const SPORTS = [
  {
    label: "Football",
    icon: <Ionicons name="football" size={36} color="#2b2d34" />,
  },
  {
    label: "Tennis",
    icon: <Ionicons name="tennisball" size={36} color="#2b2d34" />,
  },
  {
    label: "Ruby",
    icon: <Ionicons name="american-football-sharp" size={36} color="#2b2d34" />,
  },
  {
    label: "Baseball",
    icon: <Ionicons name="baseball" size={36} color="#2b2d34" />,
  },
  {
    label: "Martial Arts",
    icon: (
      <MaterialIcons name="sports-martial-arts" size={36} color="#2b2d34" />
    ),
  },
  {
    label: "Running",
    icon: <FontAwesome5 name="running" size={36} color="#2b2d34" />,
  },
  {
    label: "Cycling",
    icon: <Ionicons name="bicycle" size={36} color="#2b2d34" />,
  },
  {
    label: "Weight Lifting",
    icon: (
      <MaterialCommunityIcons name="weight-lifter" size={36} color="#2b2d34" />
    ),
  },
  {
    label: "Climbing",
    icon: <FontAwesome6 name="mountain-sun" size={36} color="#2b2d34" />,
  },
  {
    label: "Basketball",
    icon: <Ionicons name="basketball" size={36} color="#2b2d34" />,
  },
  {
    label: "Golf",
    icon: <Ionicons name="golf" size={36} color="#2b2d34" />,
  },
  {
    label: "Hiking",
    icon: <FontAwesome5 name="hiking" size={36} color="#2b2d34" />,
  },
  {
    label: "Ping pong",
    icon: (
      <FontAwesome6 name="table-tennis-paddle-ball" size={36} color="#2b2d34" />
    ),
  },
  {
    label: "Scuba Diving",
    icon: <MaterialIcons name="scuba-diving" size={36} color="#2b2d34" />,
  },
  {
    label: "Skiing",
    icon: <FontAwesome6 name="person-skiing" size={36} color="#2b2d34" />,
  },
  {
    label: "Surfing",
    icon: <MaterialIcons name="surfing" size={36} color="#2b2d34" />,
  },
  {
    label: "Swimming",
    icon: <FontAwesome6 name="person-swimming" size={36} color="#2b2d34" />,
  },
  {
    label: "Volleyball",
    icon: <FontAwesome6 name="volleyball" size={36} color="#2b2d34" />,
  },
];

export const ExploreFilterContext = createContext<
  ExploreFilterContextType | undefined
>(undefined);

export const ExploreFilterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const colorPalette = useColorPalette();
  const [isFilterOpen, openFilter, closeFilter] = useBoolean();
  const [filter, setFilter] = useState({
    radius: 3,
    ageRange: [18, 30],
    isMatchMySports: false,
    isMatchMyTeam: false,
  });

  const modalPosition = useSharedValue(1000);
  const backdropOpacity = useSharedValue(0);

  const modalStyle = useAnimatedStyle(() => ({
    height: "95%",
    transform: [{ translateY: modalPosition.value }],
  }));

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: backdropOpacity.value,
  }));

  useEffect(() => {
    console.log("isFilterOpen", isFilterOpen);

    if (isFilterOpen) {
      modalPosition.value = withTiming(0, { duration: 200 }); // Slide up
      backdropOpacity.value = withTiming(1, { duration: 200 }); // Fade in
    } else {
      modalPosition.value = withTiming(1000, { duration: 200 }); // Slide down
      backdropOpacity.value = withTiming(0, { duration: 200 }); // Fade out
    }
  }, [isFilterOpen]);

  return (
    <ExploreFilterContext.Provider
      value={{
        isFilterOpen,
        openFilter,
        closeFilter,
      }}>
      {children}

      {isFilterOpen && (
        <SafeAreaView className="flex-1 absolute top-0 left-0 right-0 bottom-0 z-20">
          <Animated.View
            style={[
              backdropStyle,
              {
                backgroundColor: "rgba(0,0,0,0.75)",
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              },
            ]}>
            <Pressable className="flex-1" onPress={closeFilter} />
          </Animated.View>
          <Animated.View
            style={modalStyle}
            className="flex-1 border border-gray bg-white absolute bottom-0 left-0 right-0 p-container rounded-t-3xl">
            <ScrollView
              className="flex-1 w-full"
              contentContainerStyle={{
                paddingBottom: 230,
              }}
              overScrollMode="never"
              showsVerticalScrollIndicator={false}>
              <View
                className="py-2 border-b border-gray-300"
                style={{
                  shadowColor: colorPalette.black[100],
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}>
                <Text className="text-lg font-sfregular text-center">
                  Filter
                </Text>
              </View>

              <View className="mt-4">
                <View className="mb-4 px-4">
                  <Text className="text-lg font-sfbold text-black">
                    Raduis{" "}
                    <Text className="text-lg font-sfregular text-black">
                      ({filter.radius} miles)
                    </Text>
                  </Text>
                  <Slider
                    minimumValue={1}
                    maximumValue={500}
                    minimumTrackTintColor={colorPalette.primary.DEFAULT}
                    maximumTrackTintColor={colorPalette.gray[200]}
                    thumbTintColor={colorPalette.primary.DEFAULT}
                    step={1}
                    value={filter.radius}
                    onValueChange={value =>
                      setFilter(prev => ({ ...prev, radius: value }))
                    }
                  />
                </View>

                <View className="border-b border-gray-300 mb-4" />

                <View className="mb-4 px-6">
                  <Text className="text-lg font-sfbold text-black">
                    Age range{" "}
                    <Text className="text-lg font-sfregular text-black">
                      ({filter.ageRange[0]} - {filter.ageRange[1]})
                    </Text>
                  </Text>
                  <RangeSlider
                    range={filter.ageRange as [number, number]}
                    step={1}
                    minimumRange={1}
                    minimumValue={18}
                    maximumValue={100}
                    crossingAllowed={false}
                    outboundColor={colorPalette.gray[200]}
                    inboundColor={colorPalette.primary.DEFAULT}
                    thumbTintColor={colorPalette.primary.DEFAULT}
                    thumbStyle={{
                      width: 25,
                      height: 25,
                      borderRadius: 15,
                    }}
                    enabled
                    trackHeight={4}
                    thumbSize={15}
                    slideOnTap
                    onValueChange={range =>
                      setFilter(prev => ({ ...prev, ageRange: range }))
                    }
                  />
                </View>

                <View className="border-b border-gray-300 mb-4" />

                <View className="mb-4 px-4">
                  <Text className="text-lg font-sfbold text-black">Sports</Text>

                  <View className="flex flex-row items-center justify-between flex-wrap gap-4 mt-2">
                    <Text className="text-base text-secondary font-sfmedium text-center">
                      Match my preferred sports
                    </Text>
                    <Switch
                      trackColor={{ false: "#767577", true: "#adeba7" }}
                      thumbColor={
                        filter.isMatchMySports ? "#35ce24" : "#f4f3f4"
                      }
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={value =>
                        setFilter(prev => ({
                          ...prev,
                          isMatchMySports: value,
                        }))
                      }
                      value={filter.isMatchMySports}
                    />
                  </View>

                  <View className="flex flex-row items-center justify-between flex-wrap gap-4 mt-2">
                    <Text className="text-base text-secondary font-sfmedium text-center">
                      Match my preferred team
                    </Text>
                    <Switch
                      trackColor={{ false: "#767577", true: "#adeba7" }}
                      thumbColor={filter.isMatchMyTeam ? "#35ce24" : "#f4f3f4"}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={value =>
                        setFilter(prev => ({
                          ...prev,
                          isMatchMyTeam: value,
                        }))
                      }
                      value={filter.isMatchMyTeam}
                    />
                  </View>

                  <View className="flex flex-row justify-between flex-wrap gap-4 mt-4">
                    {SPORTS.map(sport => (
                      <View
                        key={sport.label}
                        className="bg-gray rounded-xl w-[28%] h-[15%] flex flex-col justify-center items-center">
                        {sport.icon}
                        <Text className="text-base text-secondary font-sfmedium text-center mt-2">
                          {sport.label}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            </ScrollView>
          </Animated.View>
        </SafeAreaView>
      )}
    </ExploreFilterContext.Provider>
  );
};

const useExploreFilter = () => {
  const context = useContext(ExploreFilterContext);
  if (context === undefined) {
    throw new Error(
      "useExploreFilter must be used within a ExploreFilterProvider"
    );
  }
  return context;
};

export default useExploreFilter;
