import React from "react"
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from '@react-navigation/native';


export const RecipeScreen = () => {

  const navigator = useNavigation()

  const recipeData = [
    {
      title: "Tallarines al Alfredo",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quod. Minus sit sunt veniam itaque consequuntur harum voluptas labore ab architecto pariatur quidem iure provident eum impedit, accusantium quos. Voluptatum!",
      image:
        "https://larepublica.cronosmedia.glr.pe/migration/images/YUIWXM74BRAB7MZG5MDMI2UZN4.jpg",
      ingredients: [
        "250 gramos de pasta (fettuccini, tallarines, spaghetti…)",
        "100 gramos de jamón inglés cortado en cuadrados",
        "2 cucharadas de mantequilla",
        "2 cucharadas de harina sin preparar",
        "1 taza de leche evaporada",
        "1 cucharada + 1 cucharadita de sal",
        "½ cucharadita de pimienta",
        "½ cucharadita de nuez moscada rallada",
        "2 litros de agua",
        "1 cucharada de aceite vegetal",
        "Queso parmesano rallado al gusto",
      ],
      preparation: [
        "Cocer la pasta en 2 litros de agua hirviendo, con 1 cucharada de sal y 1 cucharada de aceite vegetal...",

        "En una sartén o una olla pequeña, derretir la mantequilla. Agregar la harina e integrar bien. Cocinar a fuego lento por un par de minutos sin dejar de revolver.",

        "Verter la leche evaporada poco a poco y mezclar constantemente con un batidor de globo hasta que la salsa espese. Sazonar con 1 cucharadita de sal, ½ cucharadita de pimienta y ½ cucharadita de nuez moscada. Al final, agregar el jamón inglés.",

        "Mezclar la pasta cocida con la salsa a lo Alfredo y servir con queso parmesano al gusto. Acompañar con pan al ajo especial. ..",
      ],
      author: {
        name: "Fernando Paredes Rios",
        image: "https://avatars.githubusercontent.com/u/33964328?v=4",
      },
    },
  ]

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {recipeData.map((item, index) => (
            <View
              key={index}
              style={{
                paddingHorizontal: 16,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  marginVertical: 5,
                  fontSize: 20,
                  fontWeight: "bold",
                  textDecorationLine: "underline",
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  textAlign: "auto",
                  marginVertical: 5,
                }}
              >
                {item.description}
              </Text>

              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginVertical: 5,
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: "90%",
                    height: 200,
                    resizeMode: "stretch",
                    borderRadius: 25,
                  }}
                />
              </View>
              <View
                style={{
                  marginVertical: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "bold",
                  }}
                >
                  Ingredientes:
                </Text>
                {item.ingredients.map((i, index) => (
                  <View
                    style={{
                      marginVertical: 5,
                    }}
                  >
                    <Text>- {i}</Text>
                  </View>
                ))}
              </View>
              <View
                style={{
                  marginVertical: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "bold",
                  }}
                >
                  Preparación:
                </Text>
                {item.preparation.map((i, index) => (
                  <View
                    style={{
                      marginVertical: 5,
                    }}
                  >
                    <Text>
                      {index + 1}. {i}
                    </Text>
                  </View>
                ))}
              </View>
              <View
                style={{
                  alignItems: "flex-end",
                }}
              >
                <TouchableOpacity onPress={() => navigator.navigate('Profile')}>
                  <Text
                    style={{
                      textAlign: "right",
                      fontWeight: "bold"
                    }}
                  >
                    {item.author.name}
                  </Text>
                </TouchableOpacity>
                <View>
                  <Image
                    source={{ uri: item.author.image }}
                    style={{
                      width: 50,
                      height: 50,
                      resizeMode: "stretch",
                      borderRadius: 100,
                    }}
                  />
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
