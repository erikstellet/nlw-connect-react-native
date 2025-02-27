import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import Icon from '@react-native-vector-icons/lucide'

import { SubscriptionForm } from './subscription-form'

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image resizeMode="cover" source={require('@assets/logo.png')} />
        <Text style={styles.title}>
          <Text style={{ color: '#6F9DE2' }}>CodeCraft{'\n'}</Text>
          Summit 2025
        </Text>
      </View>

      <View style={styles.main}>
        <View style={styles.card}>
          <View style={styles.wrapper}>
            <Text style={styles.text}>Sobre o evento</Text>

            <View style={styles.wrapperText}>
              <Icon name="radio" style={styles.icon} />
              <Text style={styles.textTag}>AO VIVO</Text>
            </View>
          </View>

          <Text style={styles.description}>
            Um evento feito por e para pessoas desenvolvedoras apaixonadas por
            criar soluções inovadoras e compartilhar conhecimento. Vamos
            mergulhar nas tendências mais recentes em desenvolvimento de
            software, arquitetura de sistemas e tecnologias emergentes, com
            palestras, workshops e hackathons.
            {'\n'}
            {'\n'}
            Dias 15 a 17 de março | Das 18h às 21h
          </Text>
        </View>

        <SubscriptionForm />
      </View>
    </ScrollView>
  )
}

export const styles = StyleSheet.create({
  card: {
    alignItems: 'flex-start',
    backgroundColor: '#191D24',
    borderColor: '#21252C',
    borderRadius: 16,

    borderWidth: 1,
    gap: 20,
    padding: 24,
    width: '100%',
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: '8%',
    flex: 1,
    width: '100%',
  },
  description: {
    color: '#95A1B1',
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 22.4,
  },
  header: {
    alignItems: 'center',
    gap: 24,
    marginBottom: 40,
    width: '100%',
  },
  iconButton: {
    color: '#6F9DE2',
    fontSize: 24,
  },
  icon: {
    color: '#9871F3',
    fontSize: 20,
  },
  text: {
    color: '#C8D0DA',
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'center',
  },
  textTag: {
    color: '#9871F3',
    fontSize: 12,
    fontWeight: 700,
  },
  title: {
    color: '#DAE4F2',
    fontSize: 36,
    fontWeight: 500,
    textAlign: 'center',
  },
  main: {
    alignItems: 'center',
    flex: 1,
    gap: 16,
    justifyContent: 'space-between',
  },
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',

    width: '100%',
  },
  wrapperInputs: {
    alignItems: 'flex-start',
    flex: 1,
    gap: 8,
    justifyContent: 'space-between',
    width: '100%',
  },
  wrapperText: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'space-between',
  },
})
