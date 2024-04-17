import { View, Text, FlatList } from "react-native";
import { styles } from "./src/styles/Styles";

import Txt from "./src/components/TxtComponent";
import Imagens from "./src/components/Image";
import Pressavel from "./src/components/Pressable";

export default function App() {
  const data = [
    {
      id: "1",
      component: <Txt conteudo="Oii" />,
    },
    {
      id: "2",
      component: <Imagens style={styles.Imagens} source={require("./src/assets/aki.jpg")} />,
    },
    {
      id: "3",
      component: <Pressavel style={styles.botao} txt="Eu sou um botão"/>,
    },
  ];

  // Renderiza os Componentes Views(box) com seu respectivo Texto.
  // Recebe nosso array de objeto, nomeado como data!
  // const renderItem = ({ item }) => (
  //   <View>
  //     <View style={[styles.box, { backgroundColor: item.backgroundColor }]}>
  //       <Text style={styles.txt}>{item.versiculo}</Text>
  //     </View>
  //     <View style={[styles.box, { backgroundColor: item.backgroundColor }]}>
  //       <Text style={styles.txt}>{item.versiculo}</Text>
  //     </View>
  //     <View style={[styles.box, { backgroundColor: item.backgroundColor }]}>
  //       <Text style={styles.txt}>{item.versiculo}</Text>
  //     </View>
  //   </View>
  // );

  const mensagem = () => {
    alert("")
  }
  const renderTxt = ({ item }) => {
    return item.component;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>

      <FlatList
        data={data} // Ele está recebendo todos os objetos do nosso array data
        renderItem={renderTxt} // Chama a função para renderizar as Views box
        keyExtractor={(data) => data.id} // Extrair o id do objeto
        style={styles.Flatlist}
      />

      <View style={styles.footer}></View>
    </View>
  );
}
