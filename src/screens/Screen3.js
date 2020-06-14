import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert,
  Platform,
} from "react-native";

const screenWidth = Dimensions.get("window").width;

import LinearGradient from "react-native-linear-gradient";
import * as Colors from "../commons/Colors";

export default class Screen3 extends Component {
  constructor(properties) {
    super(properties);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <ScrollView style={{ width: "100%", height: "100%" }}>
          <Image style={styles.eventImage} source={require("../../assets/images/dj_event.png")} />
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
            <Text style={styles.navigationTitleText}></Text>
            <TouchableOpacity onPress={() => Alert.alert("", "This feature will be added later.")}>
              <View style={styles.moreIconContainer}>
                <Image
                  source={require("../../assets/images/more_icon.png")}
                  resizeMode={"cover"}
                  style={styles.moreIcon}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "100%",
              backgroundColor: "#ffffff",
              paddingHorizontal: 24,
              paddingVertical: 16,
            }}
          >
            <Text style={styles.eventCategoryText}>Music</Text>
            {this.renderFirstContainer()}
            {this.renderSecondContainer()}
            {this.renderThirdContainer()}
            <TouchableOpacity
              style={{ marginVertical: 24 }}
              onPress={() => Alert.alert("", "This feature will be added later.")}
            >
              <LinearGradient
                colors={["#FF9966", "#FF5E62"]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.buyTicketButtonBackground}
              >
                <Text style={styles.buyTicketButtonText}>Buy Ticket</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.viewStoryButtonContainer}>
            <View style={styles.storyProfileImageBackground}>
              <View style={styles.storyProfileImageContainer}>
                <Image
                  source={require("../../assets/images/elephant_profile.png")}
                  resizeMode={"cover"}
                  style={styles.storyProfileImage}
                />
              </View>
            </View>
            <Text style={styles.viewStoryText}>View Story</Text>
          </View>
        </ScrollView>
      </View>
    );
  }

  renderFirstContainer = () => {
    return (
      <View style={styles.firstContainer}>
        <Text style={styles.eventTitleText}>Gala Music Night by DJ Adams</Text>
        <View style={styles.infoRow}>
          <View style={styles.infoRowIconContainer}>
            <Image
              source={require("../../assets/images/calendar_icon.png")}
              resizeMode={"cover"}
              style={styles.calendarIcon}
            />
          </View>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoRowTitleText}>Mon, 21 May 2020</Text>
            <Text style={styles.infoRowSubtitleText}>8.30 PM - 10.30 PM</Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.infoRowIconContainer}>
            <Image
              source={require("../../assets/images/location_pin_icon.png")}
              resizeMode={"cover"}
              style={styles.locationPinIcon}
            />
          </View>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoRowTitleText}>Music Night Club</Text>
            <Text style={styles.infoRowSubtitleText}>
              23/A Parkstreet Ave, California, New York
            </Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.infoRowIconContainer}>
            <Image
              source={require("../../assets/images/ticket_icon.png")}
              resizeMode={"cover"}
              style={styles.ticketIcon}
            />
          </View>
          <Text style={[styles.infoRowTitleText, { marginLeft: 16 }]}>$35</Text>
          <View style={styles.infoRowOval} />
          <Text style={styles.infoRowTitleText}>$50</Text>
          <View style={styles.infoRowOval} />
          <Text style={styles.infoRowTitleText}>$70</Text>
        </View>
        <View style={styles.goingInfoContainer}>
          <View style={styles.goingProfilesContainer}>
            <Image
              source={require("../../assets/images/going_profile_1.png")}
              resizeMode={"cover"}
              style={[styles.goingProfileImage, { left: 0 }]}
            />
            <Image
              source={require("../../assets/images/going_profile_2.png")}
              resizeMode={"cover"}
              style={[styles.goingProfileImage, { left: 25 }]}
            />
            <Image
              source={require("../../assets/images/going_profile_3.png")}
              resizeMode={"cover"}
              style={[styles.goingProfileImage, { left: 50 }]}
            />
          </View>
          <Text style={styles.numberOfGoingText}>{"23+ "}</Text>
          <Text style={styles.goingText}>going</Text>
        </View>
      </View>
    );
  };

  renderSecondContainer = () => {
    return (
      <View style={styles.secondInfoContainer}>
        <Text style={styles.aboutEventTitleText}>About Event</Text>
        <Text style={styles.infoRowSubtitleText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </Text>
        <View style={styles.eventOrganizerInfoRow}>
          <Image
            source={require("../../assets/images/event_creator.png")}
            resizeMode={"cover"}
            style={styles.eventOrganizerProfileImage}
          />
          <View style={styles.eventOrganizerTextContainer}>
            <Text style={styles.eventOrganizerTitleText}>Carl Nnaji</Text>
            <Text style={styles.eventOrganizerSubtitleText}>Event Orgnazier</Text>
          </View>
        </View>
        <View style={styles.separator} />
      </View>
    );
  };

  renderThirdContainer = () => {
    return (
      <View style={styles.secondInfoContainer}>
        <Text style={styles.aboutEventTitleText}>Event Venue</Text>
        <Image
          source={require("../../assets/images/event_location_map.png")}
          resizeMode={"cover"}
          style={styles.eventLocationMap}
        />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  navigationBar: {
    width: "100%",
    height: 40,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 1,
    top: 40,
    left: 0,
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
    tintColor: "#FFFFFF",
  },
  navigationTitleText: {
    flex: 1,
    color: "#000000",
    fontSize: 18,
    textAlign: "center",
    textAlignVertical: "center",
  },
  moreIconContainer: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  moreIcon: {
    width: 4,
    height: 16,
    tintColor: "#ffffff",
  },
  firstContainer: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  blankView: {
    width: "100%",
    height: 138,
    backgroundColor: "transparent",
  },
  eventImage: {
    width: screenWidth,
    height: 199,
  },
  eventInfoContainer: {
    width: "100%",
    height: 182,
    paddingHorizontal: 16,
    paddingTop: 40,
    backgroundColor: "#FFFFFF",
  },
  eventCreatorProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    position: "absolute",
    left: 44,
    top: 114,
  },
  eventDateText: {
    color: "#FF6B66",
    fontSize: 13,
  },
  eventTitleText: {
    color: "#000000",
    fontSize: 20,
    width: "100%",
    textAlign: "left",
    marginTop: 6,
    fontFamily: "Gilroy",
  },
  locationInfoContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 13,
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
    marginTop: 13,
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
  secondInfoContainer: {
    width: "100%",
    marginTop: 24,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  aboutEventTitleText: {
    fontSize: 18,
    color: "#000000",
    fontFamily: "Gilroy",
  },
  aboutEventSubtitleText: {
    width: "100%",
    fontSize: 13,
    textAlign: "left",
    fontFamily: "Gilroy-Medium",
  },
  greyTitleText: {
    color: Colors.GREY_TEXT_COLOR,
    fontSize: 14,
  },
  blackInfoText: {
    color: "#000000",
    fontSize: 16,
    marginTop: 5,
  },
  blackInfoHeaderText: {
    color: "#000000",
    fontSize: 12,
    marginBottom: 22,
    textTransform: "uppercase",
  },
  separator: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#979797",
    marginVertical: 16,
    opacity: 0.2,
  },
  buyTicketButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    textTransform: "uppercase",
    fontFamily: "Gilroy",
  },
  buyTicketButtonBackground: {
    width: "100%",
    height: 52,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  infoRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 24,
  },
  infoTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 16,
  },
  infoRowTitleText: {
    textAlign: "left",
    color: "#000000",
    fontSize: 16,
    fontFamily: "Gilroy",
  },
  infoRowOval: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 15,
    backgroundColor: Colors.GREY_TEXT_COLOR,
  },
  infoRowSubtitleText: {
    width: "100%",
    textAlign: "left",
    color: Colors.GREY_TEXT_COLOR,
    fontSize: 13,
    marginTop: 5,
    fontFamily: "Gilroy-Medium",
  },
  infoRowIconContainer: {
    width: 34,
    height: 34,
    borderRadius: 11,
    backgroundColor: "rgba(255, 107, 102, 0.15)",
    justifyContent: "center",
    alignItems: "center",
  },
  calendarIcon: {
    width: 20,
    height: 20,
    tintColor: Colors.ORANGISH_TEXT_COLOR,
  },
  locationPinIcon: {
    width: 16,
    height: 20,
    tintColor: Colors.ORANGISH_TEXT_COLOR,
  },
  ticketIcon: {
    width: 21,
    height: 16,
    tintColor: Colors.ORANGISH_TEXT_COLOR,
  },
  nextIcon: {
    width: 7,
    height: 12,
  },
  eventCategoryText: {
    fontSize: 13,
    color: Colors.ORANGISH_TEXT_COLOR,
    fontFamily: "Gilroy",
  },
  goingInfoContainer: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  numberOfGoingText: {
    color: "#000000",
    fontSize: 14,
    fontFamily: "Gilroy",
  },
  goingText: {
    color: "#808080",
    fontSize: 14,
    fontFamily: "Gilroy",
  },
  goingProfilesContainer: {
    width: 92,
    height: 34,
    marginRight: 0,
  },
  goingProfileImage: {
    width: 34,
    height: 34,
    borderRadius: 17,
    position: "absolute",
    top: 0,
  },
  eventOrganizerInfoRow: {
    marginTop: 16,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  eventOrganizerProfileImage: {
    width: 38,
    height: 38,
    borderRadius: 19,
  },
  eventOrganizerTextContainer: {
    marginLeft: 12,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  eventOrganizerTitleText: {
    color: "#000000",
    fontSize: 14,
    width: "100%",
    textAlign: "left",
    fontFamily: "Gilroy",
  },
  eventOrganizerSubtitleText: {
    color: Colors.GREY_TEXT_COLOR,
    fontSize: 12,
    width: "100%",
    textAlign: "left",
    marginTop: 2,
    fontFamily: "Gilroy-Medium",
  },
  eventLocationMap: {
    width: "100%",
    height: 147,
    marginTop: 16,
  },
  viewStoryButtonContainer: {
    width: 60,
    height: 73,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 35,
    top: 160,
  },
  storyProfileImageBackground: {
    width: 58,
    height: 58,
    borderRadius: 29,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.ORANGISH_TEXT_COLOR,
  },
  storyProfileImageContainer: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  storyProfileImage: {
    width: 54,
    height: 54,
    borderRadius: 27,
  },
  viewStoryText: {
    fontSize: 12,
    color: Colors.GREY_TEXT_COLOR,
    fontFamily: "Gilroy",
  },
});
