import React from "react"
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

export const WelcomeScreen = () => {

  const navigator = useNavigation()

  return (
    <SafeAreaView
      style={{
        paddingTop: 50
      }}
    >
      <View
        style={{
          // justifyContent: "center",
          alignItems: "center",
          height: "100%",
          backgroundColor: "white"
        }}
      >
        <View
          style={{
            borderBottomColor: "red",
            borderBottomWidth: 1,
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold"
            }}
          >What we gonna eat today?</Text>
        </View>


        {/* Box with lasts receips */}
        <View
          style={{
            borderColor: "black",
            borderWidth: 1,
            width: "95%",
            // height: "auto",
            // flex: 1
          }}
        >
          
        <View
          style={{
            alignItems: "flex-start",
          }}
        >
          <Text>
            Lasts Receips:
          </Text>
        </View>

        <View
          style={{
            alignItems: "center"
          }}
        >
        <TouchableOpacity
          style={{
            width: 100,
            backgroundColor: "#FF9666",
            padding: 15,
            borderRadius: 5
          }}
          onPress={() => navigator.navigate("Login")}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        </View>

        </View>
      </View>
    </SafeAreaView>
  )
}
