import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1, // Preencha todo o espaço que esta vazio/sobrando
    
  },

  header: {
    height: 80, // Define a altura do HEADER
    backgroundColor: "black", // Define a cor de fundo
  },

  box: {
    height: 100, // Define a altura dos componentes box
    width: 500, // Define a largura dos componentes
    margin: 20,
    padding: 10, // Espaçamento interno
    alignItems: "center", // Centraliza o que estiver dentro da BOX
    justifyContent: "center", // Centraliza o que estiver dentro da BOX
  },

  txt: {
    fontSize: 15, // Define o tamanho da fonte
  },

  footer: {
    height: 100, // Define a altura do componente Footer
    backgroundColor: "black", // Define a cor de fundo
  },
  Flatlist: {
    height: 1500,
  },
  Imagens: {
    width: 300,
    height: 300
  },
  botao: {
    width: 300,
    height: 80,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});