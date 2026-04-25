import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
// Verifique se o caminho abaixo aponta para o arquivo que você criou no passo 2
import EstilosComponente from './styleSheet/estilos'; 

const App = () => {
  const campos = [
    { id: '1', tipo: 'nome', placeholder: 'Your name' },
    { id: '2', tipo: 'idade', placeholder: 'How old are you?' },
    { id: '3', tipo: 'cpf', placeholder: 'You CPF : 999.999.999-00', valor: '999.999.999-00' },
    { id: '4', tipo: 'email', placeholder: 'Write your e-mail' },
    { id: '5', tipo: 'celular', placeholder: 'Write' },
    { id: '6', tipo: 'obs', placeholder: 'Observações:' },
    { id: '7', tipo: 'senha', placeholder: 'Digite sua senha' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Aula 06 - Desafio 02</Text>
        <Text style={styles.subtitulo}>Componente InputText</Text>
      </View>

      <Text style={styles.instrucao}>Verifique o Formulário abaixo:</Text>

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
  container: { padding: 20, backgroundColor: '#fff' },
  header: { backgroundColor: '#ddd', padding: 20, borderRadius: 10, alignItems: 'center', marginBottom: 20 },
  titulo: { fontSize: 22, fontWeight: 'bold' },
  subtitulo: { fontSize: 18 },
  instrucao: { fontSize: 16, marginBottom: 10 },
});

export default App;