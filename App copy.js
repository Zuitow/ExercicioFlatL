import { View, Text, FlatList } from "react-native";
import { styles } from "./src/styles/Styles";

import Txt from "./src/components/TxtComponent";
export default function App() {
  const data = [
    {
      id: "1",
      backgroundColor: "#f5f5dc",
      versiculo:
        "Se a tua lei não fora toda a minha recreação, há muito que pereceria na minha aflição.",
    },
    {
      id: "2",
      backgroundColor: "brown",
      versiculo:
        "E por que reparas tu no argueiro que está no olho do teu irmão, e não vês a trave que está no teu olho?",
    },
    {
      id: "3",
      backgroundColor: "#f5f5dc",
      versiculo:
        "Ou como dirás a teu irmão: Deixa-me tirar o argueiro do teu olho, estando uma trave no teu?",
    },
    {
      id: "4",
      backgroundColor: "brown",
      versiculo:
        "Hipócrita, tira primeiro a trave do teu olho, e então cuidarás em tirar o argueiro do olho do teu irmão",
    },
    {
      id: "5",
      backgroundColor: "#f5f5dc",
      versiculo:
        "Pedi, e dar-se-vos-á; buscai, e encontrareis; batei, e abrir-se-vos-á",
    },
    {
      id: "6",
      backgroundColor: "#f5f5dc",
      versiculo:
        "Se a tua lei não fora toda a minha recreação, há muito que pereceria na minha aflição.",
    },
    {
      id: "7",
      backgroundColor: "brown",
      versiculo:
        "E por que reparas tu no argueiro que está no olho do teu irmão, e não vês a trave que está no teu olho?",
    },
    {
      id: "8",
      backgroundColor: "#f5f5dc",
      versiculo:
        "Ou como dirás a teu irmão: Deixa-me tirar o argueiro do teu olho, estando uma trave no teu?",
    },
    {
      id: "9",
      backgroundColor: "brown",
      versiculo:
        "Hipócrita, tira primeiro a trave do teu olho, e então cuidarás em tirar o argueiro do olho do teu irmão",
    },
    {
      id: "10",
      backgroundColor: "#f5f5dc",
      versiculo:
        "Pedi, e dar-se-vos-á; buscai, e encontrareis; batei, e abrir-se-vos-á",
    },
  ];




  // Renderiza os Componentes Views(box) com seu respectivo Texto.
  // Recebe nosso array de objeto, nomeado como data!
  const renderItem = ({ item }) => (
    <View>
      <View style={[styles.box, { backgroundColor: item.backgroundColor }]}>
        <Text style={styles.txt}>{item.versiculo}</Text>
      </View>
      <View style={[styles.box, { backgroundColor: item.backgroundColor }]}>
        <Text style={styles.txt}>{item.versiculo}</Text>
      </View>
      <View style={[styles.box, { backgroundColor: item.backgroundColor }]}>
        <Text style={styles.txt}>{item.versiculo}</Text>
      </View>
    </View>
  );

  const renderTxt = ({ item }) => {
    return item.component;
  }

  const txtxt = [{ id: '1', component: <Txt conteudo="OIIii"/> }]

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <FlatList
        horizontal={true}
        data={txtxt} // Ele está recebendo todos os objetos do nosso array data
        renderItem={renderTxt} // Chama a função para renderizar as Views box
        keyExtractor={(txtxt) => txtxt.id} // Extrair o id do objeto
        style={styles.Flatlist}
      />
      <FlatList
        horizontal={false}
        data={data} // Ele está recebendo todos os objetos do nosso array data
        renderItem={renderItem} // Chama a função para renderizar as Views box
        keyExtractor={(data) => data.id} // Extrair o id do objeto
      />
      <View style={styles.footer}></View>
    </View>
  );
}
