import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

// O nome da função deve ser 'estilos' como você pediu
const estilos = ({ tipo, placeholder, value }) => {
  let propsAdicionais = {
    style: estiloInterno.input,
    placeholder: placeholder,
    value: value,
    editable: true,
  };

  switch (tipo) {
    case 'nome':
      propsAdicionais.autoCapitalize = 'characters';
      propsAdicionais.maxLength = 30;
      break;
    case 'idade':
      propsAdicionais.keyboardType = 'numeric';
      propsAdicionais.maxLength = 2;
      break;
    case 'cpf':
      propsAdicionais.editable = false;
      break;
    case 'email':
      propsAdicionais.keyboardType = 'email-address';
      propsAdicionais.autoCapitalize = 'none';
      break;
    case 'celular':
      propsAdicionais.keyboardType = 'phone-pad';
      break;
    case 'obs':
      propsAdicionais.multiline = true;
      propsAdicionais.maxLength = 200;
      propsAdicionais.style = [estiloInterno.input, { height: 80 }];
      break;
    case 'senha':
      propsAdicionais.secureTextEntry = true;
      propsAdicionais.maxLength = 5;
      break;
  }

  return <TextInput {...propsAdicionais} />;
};

const estiloInterno = StyleSheet.create({
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#000',
    marginVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});

export default estilos; // Garanta que isso esteja no final