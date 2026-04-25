import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import EstilosComponente from './styleSheet/estilos'; 

const App = () => {
  const campos = [
    { id: '1', tipo: 'nome', placeholder: 'Your name' },
    { id: '2', tipo: 'idade', placeholder: 'How old are you?' },
    { id: '3', tipo: 'cpf', placeholder: 'Your CPF : 999.999.999-00', value:''},
    { id: '4', tipo: 'email-address', placeholder: 'Write your e-mail' },
    { id: '5', tipo: 'celular', placeholder: 'Write you number cell phone' },
    { id: '6', tipo: 'obs', placeholder: 'Obs:' },
    { id: '7', tipo: 'senha', placeholder: 'Write your password' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Aulinha Top Sextou</Text>
        <Text style={styles.subtitulo}>Vinicius Gabriel da Silva e Vinicius Silva de oliveira</Text>
      </View>

      <Text style={styles.instrucao}>Pegue Formulário abaixo:</Text>

      {campos.map((item) => (
        <EstilosComponente 
          key={item.id} 
          tipo={item.tipo} 
          placeholder={item.placeholder} 
          value={item.valor} 
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 40, backgroundColor: '#ffffff' },
  header: { backgroundColor: '#0d8577', padding: 40, borderRadius: 10, alignItems: 'center', marginBottom: 20 },
  titulo: { fontSize: 44, fontWeight: 'bold' },
  subtitulo: { fontSize: 25 },
  instrucao: { fontSize: 25, marginBottom: 10 },
});

export default App;
