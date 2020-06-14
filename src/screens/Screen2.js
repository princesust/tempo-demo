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
} from "react-native";

const screenWidth = Dimensions.get("window").width;

import LinearGradient from "react-native-linear-gradient";
import * as Colors from "../commons/Colors";

export default class Screen2 extends Component {
  constructor(properties) {
    super(properties);
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
          <Text style={styles.navigationTitleText}>Saturday Night Special Party</Text>
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
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F8F8FA",
          }}
        >
          <ScrollView style={{ width: "100%", height: "100%" }}>
            <View style={{ width: "100%", paddingHorizontal: 16, alignItems: "center" }}>
              <Image
                style={styles.eventImage}
                source={require("../../assets/images/event_1.png")}
              />
              {this.renderFirstContainer()}
              {this.renderSecondContainer()}
              {this.renderThirdContainer()}
              {this.renderFourthContainer()}
              <TouchableOpacity
                style={{ marginVertical: 20 }}
                onPress={() => Alert.alert("", "This feature will be added later.")}
              >
                <LinearGradient
                  colors={["#FF9966", "#FF5E62"]}
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  style={styles.sendUpdateButtonBackground}
                >
                  <Text style={styles.sendUpdateButtonText}>Send Update</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }

  renderFirstContainer = () => {
    return (
      <View style={styles.firstContainer}>
        <View style={styles.blankView} />
        <View style={styles.eventInfoContainer}>
          <Text style={styles.eventDateText}>20 June, 2020</Text>
          <Text style={styles.eventTitleText} numberOfLines={2}>
            Saturday Night Special Party
          </Text>
          <View style={styles.locationInfoContainer}>
            <Image
              source={require("../../assets/images/location_icon.png")}
              style={styles.locationIcon}
              resizeMode={"cover"}
            />
            <Text style={styles.locationText} numberOfLines={1}>
              Radison Blu Hotel
            </Text>
          </View>
          <View style={styles.eventTimeInfoContainer}>
            <Image
              source={require("../../assets/images/time_icon.png")}
              style={styles.eventTimeIcon}
              resizeMode={"cover"}
            />
            <Text style={styles.eventTimeText} numberOfLines={1}>
              10:30 PM
            </Text>
          </View>
        </View>
        <Image
          source={require("../../assets/images/event_creator.png")}
          style={styles.eventCreatorProfileImage}
          resizeMode={"cover"}
        />
      </View>
    );
  };

  renderSecondContainer = () => {
    return (
      <View style={styles.secondInfoContainer}>
        <Text style={styles.greyTitleText}>Event Tickets</Text>
        <Text style={styles.blackInfoText}>$35, $50, $70</Text>
        <Text
          style={{
            color: Colors.ORANGISH_TEXT_COLOR,
            marginTop: 12,
            fontSize: 12,
            fontFamily: "Gilroy",
          }}
        >
          No Refund Ploicy set
        </Text>
        <View style={styles.separator} />
        <TouchableOpacity onPress={() => Alert.alert("", "This feature will be added later.")}>
          <View style={styles.infoRow}>
            <View style={styles.infoRowItem}>
              <Text style={styles.greyTitleText}>Tickets</Text>
              <Text style={styles.blackInfoText}>10</Text>
            </View>
            <View style={styles.infoRowItem}>
              <Text style={styles.greyTitleText}>Refund</Text>
              <Text style={styles.blackInfoText}>0</Text>
            </View>
            <View style={styles.infoRowItem}>
              <Text style={styles.greyTitleText}>Collected</Text>
              <Text style={styles.blackInfoText}>$650</Text>
            </View>
            <Image
              source={require("../../assets/images/red_next_icon.png")}
              resizeMode={"cover"}
              style={styles.nextIcon}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity onPress={() => Alert.alert("", "This feature will be added later.")}>
          <View style={styles.infoRow}>
            <View style={styles.infoRowItem}>
              <Text style={styles.greyTitleText}>Total Seats</Text>
              <Text style={styles.blackInfoText}>235</Text>
            </View>
            <View style={styles.infoRowItem}>
              <Text style={styles.greyTitleText}>Checks-in</Text>
              <Text style={styles.blackInfoText}>200</Text>
            </View>
            <View style={styles.infoRowItem}>
              <Text style={styles.greyTitleText}>Left</Text>
              <Text style={styles.blackInfoText}>35</Text>
            </View>
            <Image
              source={require("../../assets/images/red_next_icon.png")}
              resizeMode={"cover"}
              style={styles.nextIcon}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity onPress={() => Alert.alert("", "This feature will be added later.")}>
          <View style={styles.infoRow}>
            <View style={styles.infoRowItem}>
              <Text style={styles.greyTitleText}>Promocode</Text>
              <Text style={styles.blackInfoText}>5 types</Text>
            </View>
            <Image
              source={require("../../assets/images/red_next_icon.png")}
              resizeMode={"cover"}
              style={styles.nextIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  renderThirdContainer = () => {
    return (
      <View style={styles.secondInfoContainer}>
        <Text style={styles.blackInfoHeaderText}>Host, Guest, Stories</Text>
        <TouchableOpacity onPress={() => Alert.alert("", "This feature will be added later.")}>
          <View style={styles.infoRow}>
            <View style={styles.infoRowItem}>
              <Text style={styles.greyTitleText}>Host and Co-host</Text>
              <Text style={styles.blackInfoText}>1 host, 2 co-host</Text>
            </View>
            <Image
              source={require("../../assets/images/red_next_icon.png")}
              resizeMode={"cover"}
              style={styles.nextIcon}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity onPress={() => Alert.alert("", "This feature will be added later.")}>
          <View style={styles.infoRow}>
            <View style={styles.infoRowItem}>
              <Text style={styles.greyTitleText}>Guest List</Text>
              <Text style={styles.blackInfoText}>5 Invited, 2 attending</Text>
            </View>
            <Image
              source={require("../../assets/images/red_next_icon.png")}
              resizeMode={"cover"}
              style={styles.nextIcon}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity onPress={() => Alert.alert("", "This feature will be added later.")}>
          <View style={styles.infoRow}>
            <View style={styles.infoRowItem}>
              <Text style={styles.greyTitleText}>Stories</Text>
              <Text style={styles.blackInfoText}>2 photos, 1 video</Text>
            </View>
            <Image
              source={require("../../assets/images/red_next_icon.png")}
              resizeMode={"cover"}
              style={styles.nextIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  renderFourthContainer = () => {
    return (
      <View style={styles.secondInfoContainer}>
        <Text style={styles.blackInfoHeaderText}>Host Options</Text>
        <View style={styles.hostOptionsButtonsMainContainer}>
          <View style={styles.hostOptionsButtonsContainer}>
            <TouchableOpacity onPress={() => Alert.alert("", "This feature will be added later.")}>
              <View style={styles.hostOptionsButtonContainer}>
                <Image
                  style={styles.hostOptionsEditButtonIcon}
                  resizeMode={"cover"}
                  source={require("../../assets/images/edit_icon.png")}
                />
                <Text style={styles.hostOptionsButtonTitle}>Edit Event</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginTop: 30 }}
              onPress={() => Alert.alert("", "This feature will be added later.")}
            >
              <View style={styles.hostOptionsButtonContainer}>
                <Image
                  style={styles.hostOptionsViewButtonIcon}
                  resizeMode={"cover"}
                  source={require("../../assets/images/view_icon.png")}
                />
                <Text style={styles.hostOptionsButtonTitle}>See Guest View</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginTop: 30 }}
              onPress={() => Alert.alert("", "This feature will be added later.")}
            >
              <View style={styles.hostOptionsButtonContainer}>
                <Image
                  style={styles.hostOptionsCloneButtonIcon}
                  resizeMode={"cover"}
                  source={require("../../assets/images/clone_icon.png")}
                />
                <Text style={styles.hostOptionsButtonTitle}>Clone Event</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.hostOptionsButtonsContainer}>
            <TouchableOpacity onPress={() => Alert.alert("", "This feature will be added later.")}>
              <View style={styles.hostOptionsButtonContainer}>
                <Image
                  style={styles.hostOptionsSettingsButtonIcon}
                  resizeMode={"cover"}
                  source={require("../../assets/images/settings_icon.png")}
                />
                <Text style={styles.hostOptionsButtonTitle}>Event Settings</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginTop: 30 }}
              onPress={() => Alert.alert("", "This feature will be added later.")}
            >
              <View style={styles.hostOptionsButtonContainer}>
                <Image
                  style={styles.hostOptionsDownloadButtonIcon}
                  resizeMode={"cover"}
                  source={require("../../assets/images/download_icon.png")}
                />
                <Text style={styles.hostOptionsButtonTitle}>Download Guest List</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginTop: 30 }}
              onPress={() => Alert.alert("", "This feature will be added later.")}
            >
              <View style={styles.hostOptionsButtonContainer}>
                <Image
                  style={styles.hostOptionsDeleteButtonIcon}
                  resizeMode={"cover"}
                  source={require("../../assets/images/delete_icon.png")}
                />
                <Text
                  style={[styles.hostOptionsButtonTitle, { color: Colors.ORANGISH_TEXT_COLOR }]}
                >
                  Delete Event
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  navigationBar: {
    width: "100%",
    height: 40,
    marginTop: 10,
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
  navigationTitleText: {
    flex: 1,
    color: "#000000",
    fontSize: 18,
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: "Gilroy",
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
  },
  firstContainer: {
    width: "100%",
    height: 320,
    justifyContent: "center",
    alignItems: "center",
  },
  blankView: {
    width: "100%",
    height: 138,
    backgroundColor: "transparent",
  },
  eventImage: {
    width: screenWidth,
    height: 192,
    position: "absolute",
    zIndex: -1,
    top: 0,
    left: 0,
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
    fontFamily: "Gilroy",
  },
  eventTitleText: {
    color: "#000000",
    fontSize: 17,
    width: "100%",
    textAlign: "left",
    marginTop: 5,
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
    fontFamily: "Gilroy",
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
    fontFamily: "Gilroy",
  },
  secondInfoContainer: {
    width: "100%",
    backgroundColor: "white",
    marginTop: 8,
    padding: 16,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  greyTitleText: {
    color: Colors.GREY_TEXT_COLOR,
    fontSize: 14,
    fontFamily: "Gilroy",
  },
  blackInfoText: {
    color: "#000000",
    fontSize: 16,
    marginTop: 5,
    fontFamily: "Gilroy",
  },
  blackInfoHeaderText: {
    color: "#000000",
    fontSize: 12,
    marginBottom: 22,
    textTransform: "uppercase",
    fontFamily: "Gilroy-Bold",
  },
  separator: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#979797",
    marginVertical: 16,
    opacity: 0.2,
  },
  sendUpdateButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    textTransform: "uppercase",
    fontFamily: "Gilroy",
  },
  sendUpdateButtonBackground: {
    width: 327,
    height: 52,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  infoRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  infoRowItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  nextIcon: {
    width: 7,
    height: 12,
  },
  hostOptionsButtonsMainContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hostOptionsButtonsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  hostOptionsButtonContainer: {
    height: 42,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  hostOptionsButtonTitle: {
    marginTop: 8,
    color: "#000000",
    fontSize: 14,
    fontFamily: "Gilroy-Medium",
  },
  hostOptionsEditButtonIcon: {
    width: 25,
    height: 20,
  },
  hostOptionsViewButtonIcon: {
    width: 27,
    height: 17,
  },
  hostOptionsCloneButtonIcon: {
    width: 20,
    height: 20,
  },
  hostOptionsSettingsButtonIcon: {
    width: 21,
    height: 22,
  },
  hostOptionsDownloadButtonIcon: {
    width: 22,
    height: 22,
  },
  hostOptionsDeleteButtonIcon: {
    width: 20,
    height: 22,
  },
});
