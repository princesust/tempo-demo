import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
  FlatList,
  Alert,
  Dimensions,
  ScrollView,
} from "react-native";
import { SearchBar } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";

import * as KeyConstants from "../commons/KeyConstants";

const screenWidth = Dimensions.get("window").width;
const addButtonSize = screenWidth * (18.0 / 375);
const addButtonIconSize = screenWidth * (10.0 / 375);
const liveButtonWidth = screenWidth * (45.0 / 375);

export default class Screen1 extends Component {
  constructor(properties) {
    super(properties);

    this.state = {
      searchText: "",
      stories: [],
      selectedEventType: "Upcoming",
      eventTypes: [],
      upcomingEvents: [],
      allEvents: [],
    };
  }

  componentDidMount() {
    this.initializeDummyData();
  }

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <ScrollView style={{ width: "100%", height: "100%" }}>
          <View style={styles.navigationBar}>
            <TouchableOpacity onPress={() => this.props.navigation.pop()}>
              <View style={styles.backIconContainer}>
                <Image
                  source={require("../../assets/images/back_icon.png")}
                  resizeMode={"cover"}
                  style={styles.backIcon}
                />
              </View>
            </TouchableOpacity>
            <SearchBar
              containerStyle={styles.searchBarStyle}
              inputContainerStyle={{ backgroundColor: "transparent" }}
              placeholder="Search Events"
              platform={"ios"}
              value={this.state.searchText}
              onChangeText={this.onSearchTextChanged}
            />
            <View style={styles.notificationButton}>
              <View style={styles.notificationIcon}>
                <Image
                  style={styles.notificationIcon}
                  resizeMode="cover"
                  source={require("../../assets/images/bell_icon.png")}
                />
                <View style={styles.notificationBadge} />
              </View>
            </View>
          </View>
          <View style={styles.storiesContainer}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={this.state.stories}
              keyExtractor={(item, index) => {
                return "story_" + index;
              }}
              renderItem={({ item, index }) => this.renderStoryItem(item, index)}
            />
          </View>
          <View style={styles.separator} />
          <View
            style={{
              width: "100%",
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "center",
              backgroundColor: "#F8F8FA",
            }}
          >
            <View style={styles.eventTypesContainer}>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={this.state.eventTypes}
                keyExtractor={(item, index) => {
                  return "event_type_" + index;
                }}
                renderItem={({ item, index }) => this.renderEventTypeItem(item, index)}
              />
            </View>
            <View style={{ width: "100%", height: 300 }}>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={this.state.upcomingEvents}
                keyExtractor={(item, index) => {
                  return "upcoming_event_" + index;
                }}
                renderItem={({ item, index }) => this.renderUpcomingEventItem(item, index)}
              />
            </View>
            <View style={{ width: "100%", paddingHorizontal: 15 }}>
              <Text style={styles.headerText}>All Events</Text>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={this.state.allEvents}
                keyExtractor={(item, index) => {
                  return "event_" + index;
                }}
                renderItem={({ item, index }) => this.renderEventItem(item, index)}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  initializeDummyData = () => {
    let stories = this.getDummyStories();
    let eventTypes = this.getDummyEventTypes();
    let upcomingEvents = this.getDummyUpcomingEvents();
    let allEvents = this.getDummyAllEvents();

    this.setState({
      stories: stories,
      eventTypes: eventTypes,
      upcomingEvents: upcomingEvents,
      allEvents: allEvents,
    });
  };

  getDummyStories = () => {
    let stories = [];
    let story = {};
    story[KeyConstants.KEY_TITLE] = "My Story";
    story[KeyConstants.KEY_IMAGE_URL] = require("../../assets/images/lemon.jpg");
    stories.push(story);

    story = {};
    story[KeyConstants.KEY_TITLE] = "Apple";
    story[KeyConstants.KEY_IMAGE_URL] = require("../../assets/images/apple.jpg");
    stories.push(story);

    story = {};
    story[KeyConstants.KEY_TITLE] = "Mango";
    story[KeyConstants.KEY_IMAGE_URL] = require("../../assets/images/mango.jpg");
    stories.push(story);

    story = {};
    story[KeyConstants.KEY_TITLE] = "Orange";
    story[KeyConstants.KEY_IMAGE_URL] = require("../../assets/images/orange.jpg");
    stories.push(story);

    story = {};
    story[KeyConstants.KEY_TITLE] = "Pineapple";
    story[KeyConstants.KEY_IMAGE_URL] = require("../../assets/images/pineapple.jpg");
    stories.push(story);

    story = {};
    story[KeyConstants.KEY_TITLE] = "Lemon";
    story[KeyConstants.KEY_IMAGE_URL] = require("../../assets/images/lemon.jpg");
    stories.push(story);

    return stories;
  };

  getDummyEventTypes = () => {
    let eventTypes = [];
    let eventType = {};
    eventType[KeyConstants.KEY_TITLE] = "Upcoming";
    eventTypes.push(eventType);

    eventType = {};
    eventType[KeyConstants.KEY_TITLE] = "Featured";
    eventTypes.push(eventType);

    eventType = {};
    eventType[KeyConstants.KEY_TITLE] = "Popular";
    eventTypes.push(eventType);

    eventType = {};
    eventType[KeyConstants.KEY_TITLE] = "Nearby";
    eventTypes.push(eventType);

    return eventTypes;
  };

  getDummyUpcomingEvents = () => {
    let events = [];
    let event;

    event = {};
    event[KeyConstants.KEY_DATE] = "20 June, 2020";
    event[KeyConstants.KEY_TITLE] = "Saturday Night Special Party";
    event[KeyConstants.KEY_IMAGE_URL] = require("../../assets/images/event_1.png");
    event[KeyConstants.KEY_LOCATION] = "Radison Blu Hotel";
    event[KeyConstants.KEY_TIME] = "10:30 PM";
    event[KeyConstants.KEY_GOING] = "23";
    event[KeyConstants.KEY_GOING_USER_PROFILE_IMAGES] = [
      require("../../assets/images/going_profile_1.png"),
      require("../../assets/images/going_profile_2.png"),
      require("../../assets/images/going_profile_3.png"),
    ];
    events.push(event);

    event = {};
    event[KeyConstants.KEY_DATE] = "27 June, 2020";
    event[KeyConstants.KEY_TITLE] = "Gala Music Night in New York";
    event[KeyConstants.KEY_IMAGE_URL] = require("../../assets/images/event_2.png");
    event[KeyConstants.KEY_LOCATION] = "New York City";
    event[KeyConstants.KEY_TIME] = "09:30 PM";
    event[KeyConstants.KEY_GOING] = "12";
    event[KeyConstants.KEY_GOING_USER_PROFILE_IMAGES] = [
      require("../../assets/images/going_profile_4.png"),
      require("../../assets/images/going_profile_5.png"),
      require("../../assets/images/going_profile_6.png"),
    ];
    events.push(event);

    return events;
  };

  getDummyAllEvents = () => {
    let events = [];
    let event;

    event = {};
    event[KeyConstants.KEY_DATE] = "22 June, 2020";
    event[KeyConstants.KEY_TITLE] = "Gala Music Night by DJ Adams";
    event[KeyConstants.KEY_IMAGE_URL] = require("../../assets/images/event_3.png");
    event[KeyConstants.KEY_LOCATION] = "Westeen Cafe";
    events.push(event);

    event = {};
    event[KeyConstants.KEY_DATE] = "24 June, 2020";
    event[KeyConstants.KEY_TITLE] = "Music Neon Party";
    event[KeyConstants.KEY_IMAGE_URL] = require("../../assets/images/event_4.png");
    event[KeyConstants.KEY_LOCATION] = "Music House Club";
    events.push(event);

    return events;
  };

  onSearchTextChanged = (text) => {
    this.setState({
      searchText: text,
    });
  };

  goToHome = () => {
    this.props.navigation.navigate("Home");
  };

  renderStoryItem = (item, index) => {
    let imagesource = item[KeyConstants.KEY_IMAGE_URL];
    console.log("Image Source::", imagesource);
    const marginRight = index === this.state.stories.length - 1 ? 15 : 0;
    return (
      <TouchableOpacity onPress={() => Alert.alert("", "This feature will be added later.")}>
        <View style={[styles.storyContainer, { marginRight: marginRight }]}>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImage}>
              <Image source={imagesource} style={{ width: 54, height: 54 }} resizeMode={"cover"} />
            </View>
          </View>
          <Text numberOfLines={1} style={styles.storyTitleText}>
            {item[KeyConstants.KEY_TITLE]}
          </Text>
          {index == 0 ? (
            <LinearGradient colors={["#FF9966", "#FF5E62"]} style={styles.addButton}>
              <Image
                source={require("../../assets/images/add_icon.png")}
                style={styles.addButtonIcon}
                resizeMode={"cover"}
              />
            </LinearGradient>
          ) : null}
          {index == 1 ? (
            <View
              style={[styles.liveButton, { position: "absolute", left: 45 / 2 - 11, top: 54 - 15 }]}
            >
              <Image
                style={styles.liveButton}
                source={require("../../assets/images/live_button.png")}
                resizeMode={"cover"}
              />
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  };

  renderEventTypeItem = (item, index) => {
    let gradientColors = ["#FFECEE", "#FFECEE"];
    let borderWidth = 1;
    let textColor = "rgba(251, 82, 84, 1)";
    let marginRight = 0;
    if (this.state.selectedEventType === item[KeyConstants.KEY_TITLE]) {
      borderWidth = 0;
      textColor = "#FFFFFF";
      gradientColors = ["#FF9966", "#FF5E62"];
    }
    if (index === this.state.eventTypes.length - 1) {
      marginRight = 15;
    }

    return (
      <TouchableOpacity
        style={{ marginRight: marginRight }}
        onPress={() => this.setState({ selectedEventType: item[KeyConstants.KEY_TITLE] })}
      >
        <LinearGradient
          colors={gradientColors}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={[styles.eventTypeContainer, { borderWidth: borderWidth }]}
        >
          <Text style={[styles.eventTypeTitleText, { color: textColor }]}>
            {item[KeyConstants.KEY_TITLE]}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  renderUpcomingEventItem = (item, index) => {
    let marginRight = 0;
    if (index === this.state.upcomingEvents.length - 1) {
      marginRight = 15;
    }
    return (
      <TouchableOpacity
        onPress={() => {
          Alert.alert("", "This feature will be added later.");
        }}
      >
        <View style={[styles.upcomingEventContainer, { marginRight: marginRight }]}>
          <Image
            source={item[KeyConstants.KEY_IMAGE_URL]}
            style={styles.upcomingEventImage}
            resizeMode={"cover"}
          />
          <View style={styles.eventInfoContainer}>
            <Text style={styles.eventDateText}>{item[KeyConstants.KEY_DATE]}</Text>
            <Text style={styles.eventTitleText} numberOfLines={2}>
              {item[KeyConstants.KEY_TITLE]}
            </Text>
            <View style={styles.locationInfoContainer}>
              <Image
                source={require("../../assets/images/location_icon.png")}
                style={styles.locationIcon}
                resizeMode={"cover"}
              />
              <Text style={styles.locationText} numberOfLines={1}>
                {item[KeyConstants.KEY_LOCATION]}
              </Text>
            </View>
            <View style={styles.eventTimeInfoContainer}>
              <Image
                source={require("../../assets/images/time_icon.png")}
                style={styles.eventTimeIcon}
                resizeMode={"cover"}
              />
              <Text style={styles.eventTimeText} numberOfLines={1}>
                {item[KeyConstants.KEY_TIME]}
              </Text>
            </View>
            <View style={styles.goingInfoContainer}>
              <View style={styles.goingProfilesContainer}>
                <Image
                  source={item[KeyConstants.KEY_GOING_USER_PROFILE_IMAGES][0]}
                  resizeMode={"cover"}
                  style={[styles.goingProfileImage, { left: 0 }]}
                />
                <Image
                  source={item[KeyConstants.KEY_GOING_USER_PROFILE_IMAGES][1]}
                  resizeMode={"cover"}
                  style={[styles.goingProfileImage, { left: 19 }]}
                />
                <Image
                  source={item[KeyConstants.KEY_GOING_USER_PROFILE_IMAGES][2]}
                  resizeMode={"cover"}
                  style={[styles.goingProfileImage, { left: 41 }]}
                />
              </View>
              <Text style={styles.numberOfGoingText}>{item[KeyConstants.KEY_GOING] + "+ "}</Text>
              <Text style={styles.goingText}>going</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  renderEventItem = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          Alert.alert("", "This feature will be added later.");
        }}
      >
        <View style={styles.eventShortInfoContainer}>
          <Image
            source={item[KeyConstants.KEY_IMAGE_URL]}
            style={styles.eventShortInfoImage}
            resizeMode={"cover"}
          />
          <View style={styles.eventInfoContainer}>
            <Text style={styles.eventDateText}>{item[KeyConstants.KEY_DATE]}</Text>
            <Text style={styles.eventTitleText} numberOfLines={2}>
              {item[KeyConstants.KEY_TITLE]}
            </Text>
            <View style={styles.locationInfoContainer}>
              <Image
                source={require("../../assets/images/location_icon.png")}
                style={styles.locationIcon}
                resizeMode={"cover"}
              />
              <Text style={styles.locationText} numberOfLines={1}>
                {item[KeyConstants.KEY_LOCATION]}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
}

const styles = StyleSheet.create({
  navigationBar: {
    width: "100%",
    height: 56,
    marginTop: 20,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  backIconContainer: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  backIcon: {
    width: 8,
    height: 14,
  },
  searchBarStyle: {
    borderRadius: 8,
    backgroundColor: "#F8F8FA",
    marginHorizontal: 9,
    flex: 1,
    height: "100%",
  },
  notificationButton: {
    width: 61,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#F8F8FA",
  },
  notificationIcon: {
    width: 21,
    height: 25,
  },
  notificationBadge: {
    width: 10,
    aspectRatio: 1,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#FFFFFF",
    position: "absolute",
    top: 3,
    right: 0,
    backgroundColor: "#FF9966",
  },
  storiesContainer: {
    marginVertical: 20,
    backgroundColor: "#FFFFFF",
    width: "100%",
  },
  storyContainer: {
    width: 66,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
  },
  profileImageContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: "#FF9966",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  profileImage: {
    width: 54,
    aspectRatio: 1,
    borderRadius: 27,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  storyTitleText: {
    color: "grey",
    fontSize: 16,
    marginTop: 5,
    width: "100%",
    textAlign: "center",
  },
  addButton: {
    width: addButtonSize,
    height: addButtonSize,
    borderRadius: addButtonSize / 2,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 4,
    top: 56 - addButtonSize + 2,
  },
  addButtonIcon: {
    width: addButtonIconSize,
    height: addButtonIconSize,
  },
  liveButton: {
    width: 45,
    height: 18,
    borderRadius: 9,
  },
  separator: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#979797",
  },
  eventTypesContainer: {
    width: "100%",
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  eventTypeContainer: {
    width: 100,
    height: 40,
    borderColor: "#FFCBCB",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginLeft: 15,
  },
  eventTypeTitleText: {
    fontSize: 16,
    width: "100%",
    textAlign: "center",
  },
  upcomingEventContainer: {
    width: 233,
    height: 290,
    borderRadius: 11,
    backgroundColor: "#FFFFFF",
    marginLeft: 15,
    overflow: "hidden",
  },
  upcomingEventImage: {
    width: "100%",
    height: 129,
  },
  eventInfoContainer: {
    width: "100%",
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  eventDateText: {
    color: "#FF6B66",
    fontSize: 13,
  },
  eventTitleText: {
    color: "#000000",
    fontSize: 17,
    width: "100%",
    textAlign: "left",
    marginTop: 5,
  },
  locationInfoContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 5,
  },
  locationIcon: {
    width: 10,
    height: 12,
  },
  locationText: {
    marginLeft: 5,
    flexGrow: 1,
    color: "#808080",
    fontSize: 14,
    textAlign: "left",
  },
  eventTimeInfoContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 5,
  },
  eventTimeIcon: {
    width: 10,
    height: 10,
  },
  eventTimeText: {
    marginLeft: 5,
    flexGrow: 1,
    color: "#808080",
    fontSize: 14,
    textAlign: "left",
  },
  goingInfoContainer: {
    width: "100%",
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  numberOfGoingText: {
    color: "#000000",
    fontSize: 14,
  },
  goingText: {
    color: "#808080",
    fontSize: 14,
  },
  goingProfilesContainer: {
    width: 80,
    height: 30,
    marginRight: 0,
  },
  goingProfileImage: {
    width: 30,
    height: 30,
    borderRadius: 11,
    position: "absolute",
    top: 0,
  },
  headerText: {
    color: "#000000",
    fontSize: 20,
    width: "100%",
    textAlign: "left",
    marginBottom: 15,
  },
  eventShortInfoContainer: {
    width: "100%",
    height: 128,
    borderRadius: 11,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 8,
  },
  eventShortInfoImage: {
    width: 75,
    height: 112,
    marginRight: 16,
  },
});
