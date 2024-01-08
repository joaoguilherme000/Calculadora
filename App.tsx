import React, { useState,useEffect } from 'react';
import { View, Text,TouchableOpacity } from "react-native";
import Style from './Style';

import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  const [numero, setNumero] = useState<string>("0");
  const [numero2, setNumero2] = useState<string>("");
  const [operacao, setOperacao] = useState<string>("");
  const [total, setTotal] = useState<string>("");
  const [numeroAntes, setNumeroAntes] = useState<number>(0);
  const [isTotalVisible, setIsTotalVisible] = useState<boolean>(false);
  const [isOperacaoSet, setIsOperacaoSet] = useState<boolean>(false);

  const adicionarNumero = (digito: string) => {
    setNumero((prevNumero) => (prevNumero + digito).substring(0, 15));
  };

  const adicionarNumero2 = (digito2: string) => {
    setNumero2((prevNumero2) => (prevNumero2 + digito2).substring(0, 15));
  };

  const operacaoSetada = (oper: string) => {
    setIsTotalVisible(true);
    setOperacao(oper);
    setIsOperacaoSet(true);
  };

  const calcularTotal = () => {
    try {
      setIsTotalVisible(true);
    } catch (error) {
      console.error("Erro ao calcular total:", error);
      setIsTotalVisible(false);
      // Lide com o erro como desejado
    }
  };

  const excluir = () => {
    setIsTotalVisible(false);
    setNumero("0"),
    setOperacao(""),
    setNumero2("")
  };

  const formatar = (input: string) => {
    const semFormatacao = input.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
    const formatado = semFormatacao.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Adiciona ponto a cada três dígitos
    return formatado;
  };

  return (
    <View style={Style.tela}>
      <Text style={Style.titulo}>
        A melhor Calculadora do mundo
      </Text>
      <View style={Style.content}>
        <View style={Style.historico}>
          <Text style={Style.numeroAntes}>{numeroAntes}</Text>
        </View>
        <Text style={Style.numero}>{numero.length > 15 ? `${formatar(numero.substring(0, 15))}...` : formatar(numero)}</Text>
        <Text style={Style.numero}>{operacao}</Text>
        <Text style={Style.numero}>{numero2.length > 15 ? `${formatar(numero2.substring(0, 15))}...` : formatar(numero2)}</Text>
        {isTotalVisible && (<Text style={Style.total}>{numero !== "" ? formatar(numero) :"= "+ total}</Text>)}
      </View>
      <LinearGradient
        useAngle={true}
        angle={180}
        angleCenter={{ x: 1, y: 0.6 }}
        colors={['#dad7cd', '#a3b18a', '#588157', '#3a5a40', '#344e41']}
        style={Style.container}
      >
        <View style={[Style.first, Style.row]}>
          <TouchableOpacity style={[Style.bigBang, Style.button]} onPress={excluir}><Text style={Style.numeros}>
            C
          </Text></TouchableOpacity>
          <TouchableOpacity style={[Style.porcemtagem, Style.button]}><Text style={Style.numeros}>
            tira
          </Text></TouchableOpacity>
          <TouchableOpacity style={[Style.porcemtagem, Style.button]}><Text style={Style.numeros}>
            %
          </Text></TouchableOpacity>
          <TouchableOpacity style={[Style.divisao, Style.button]}><Text style={Style.numeros}>
            /
          </Text></TouchableOpacity>
        </View>
        <View style={[Style.second, Style.row]}>
          <TouchableOpacity style={[Style.nove, Style.button]} onPress={() => adicionarNumero2("9")}><Text style={Style.numeros}>
            9
          </Text></TouchableOpacity>
          <TouchableOpacity style={[Style.oito, Style.button]}><Text style={Style.numeros}>
            8
          </Text></TouchableOpacity>
          <TouchableOpacity style={[Style.sete, Style.button]}><Text style={Style.numeros}>
            7
          </Text></TouchableOpacity>
          <TouchableOpacity style={[Style.multiplicar, Style.button]} onPress={() => operacaoSetada("*")}><Text style={Style.numeros}>
            *
          </Text></TouchableOpacity>
        </View>
        <View style={[Style.third, Style.row]}>
          <TouchableOpacity style={[Style.seis, Style.button]}><Text style={Style.numeros}>
            6
          </Text></TouchableOpacity>
          <TouchableOpacity style={[Style.cinco, Style.button]}><Text style={Style.numeros}>
            5
          </Text></TouchableOpacity>
          <TouchableOpacity style={[Style.quatro, Style.button]}><Text style={Style.numeros}>
            4
          </Text></TouchableOpacity>
          <TouchableOpacity style={[Style.menos, Style.button]}><Text style={Style.numeros}>
            -
          </Text></TouchableOpacity>
        </View>
        <View style={[Style.fourth, Style.row]}>
          <TouchableOpacity style={[Style.tres, Style.button]}><Text style={Style.numeros}>
            3
          </Text></TouchableOpacity>
          <TouchableOpacity style={[Style.dois, Style.button]}><Text style={Style.numeros}>
            2
          </Text></TouchableOpacity>
          <TouchableOpacity style={[Style.um, Style.button]}><Text style={Style.numeros}>
            1
          </Text></TouchableOpacity>
          <TouchableOpacity style={[Style.mais, Style.button]}><Text style={Style.numeros}>
            +
          </Text></TouchableOpacity>
        </View>
        <View style={[Style.fifth, Style.row]}>
          <TouchableOpacity style={Style.zero}><Text style={Style.numeros}>
            0
          </Text></TouchableOpacity>
          <TouchableOpacity style={[Style.ponto, Style.button]}><Text style={Style.numeros}>
            .
          </Text></TouchableOpacity>
          <TouchableOpacity style={[Style.igual, Style.button]} onPress={calcularTotal}><Text style={Style.numeros}>
            =
          </Text></TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  )
}
