import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
  tela: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#dad7cd",
  },
  titulo: {
    color: "black",
    fontSize: 26,
  },
  content: {
    flex: 1,
    width: "100%",
    padding: 10,
  },
  historico: {
    flex: 0.6,
  },
  numeroAntes: {
    fontSize: 23,
    color: "black",
  },
  numero: {
    fontSize: 40,
    color: "black",
    textAlign: "right",
    borderWidth: 1,
    flex: 1,
  },
  total: {
    fontSize: 22,
    color: "gray",
    textAlign: "right",
    borderWidth: 1,
  },
  container: {
    height: "70%",
    width: "100%",
  },
  row: {
    flexDirection: "row",
    flex: 1,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    elevation: 4,
  },
  numeros: {
    fontSize: 27,
    color: "black",
    fontWeight: "bold",
  },
  zero: {
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    elevation: 4,
  },
});

export default Style;