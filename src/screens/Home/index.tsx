import Icon from '@react-native-vector-icons/lucide'
import { Image, ScrollView, Text, View } from 'react-native'
import { createStyleSheet, useStyles } from 'react-native-unistyles'

import { SubscriptionForm } from './components/SubscriptionForm'

export default function Home() {
  const {
    styles,
    theme: { colors },
  } = useStyles(stylesheet)

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Image resizeMode="cover" source={require('@assets/logo.png')} />

        <Text style={styles.title}>
          <Text style={{ color: colors.blue }}>CodeCraft{'\n'}</Text>
          Summit 2025
        </Text>
      </View>

      <View style={styles.card}>
        <View style={styles.wrapper}>
          <Text style={styles.subTitle}>Sobre o evento</Text>

          <View style={styles.wrapper}>
            <Icon name="radio" style={styles.icon} />
            <Text style={styles.text}>AO VIVO</Text>
          </View>
        </View>

        <Text style={styles.description}>
          Um evento feito por e para pessoas desenvolvedoras apaixonadas por
          criar soluções inovadoras e compartilhar conhecimento. Vamos mergulhar
          nas tendências mais recentes em desenvolvimento de software,
          arquitetura de sistemas e tecnologias emergentes, com palestras,
          workshops e hackathons.
          {'\n'}
          {'\n'}
          Dias 15 a 17 de março | Das 18h às 21h
        </Text>
      </View>

      <SubscriptionForm />
    </ScrollView>
  )
}

const stylesheet = createStyleSheet(({ colors, fonts }) => ({
  card: {
    alignItems: 'flex-start',
    backgroundColor: colors.gray700,
    borderColor: colors.gray600,
    borderRadius: 16,

    borderWidth: 1,
    gap: 20,
    padding: 24,
    width: '100%',
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: '10%',
    gap: 16,

    width: '100%',
  },
  description: {
    color: colors.gray300,
    fontFamily: fonts.montserratRegular,
    fontSize: 14,
    lineHeight: 22.4,
  },
  header: {
    alignItems: 'center',
    gap: 24,
    marginBottom: 24,
    width: '100%',
  },
  icon: {
    color: colors.purple,
    fontSize: 20,
  },
  subTitle: {
    color: colors.gray200,
    fontSize: 20,
    fontFamily: fonts.oxaniumSemiBold,
    lineHeight: 20,
  },
  text: {
    color: colors.purple,
    fontSize: 12,
    fontFamily: fonts.montserratSemiBold,
  },
  title: {
    color: colors.gray100,
    fontFamily: fonts.oxaniumSemiBold,
    fontSize: 36,
    textAlign: 'center',
  },
  wrapper: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    gap: 8,

    justifyContent: 'flex-end',
  },
}))
