import { Text } from "react-native";
import { Image, ScrollView, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { Stats } from "./components/Stats";
import { Ranking } from "./components/Ranking";

export default function Invite() {
  const { styles } = useStyles(stylesheet)

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Image resizeMode="cover" source={require('@assets/logo.png')} />  

      <View style={styles.wrapper(28)}>
        <View style={styles.wrapper(8)}>
          <Text style={styles.title}>Inscrição confirmada!</Text>
          <Text style={styles.description}>
            Para entrar no evento, acesse o link enviado para seu e-mail.
          </Text>
        </View>

        <View style={styles.wrapper(20)}>
          <View style={styles.wrapper(8)}>
            <Text style={styles.subTitle}>Indique e Ganhe</Text>
            <Text style={styles.description}>
              Convide mais pessoas para o evento e concorra a prêmios{' '}
              exclusivos! É só compartilhar o link abaixo e acompanhar as inscrições:
            </Text>
          </View>

          <View style={{ backgroundColor: 'red', height: 40, width: '100%'}} />
        </View>

        <Stats />

        <Ranking />
      </View>
    </ScrollView>
  )
}

const stylesheet = createStyleSheet(({ colors, fonts }) => ({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: '10%',

    gap: 40,
    width: '100%',
  },
  description: {
    color: colors.gray300,
    fontFamily: fonts.montserratRegular,
    fontSize: 14,
    lineHeight: 22.4,
  },
  subTitle: {
    color: colors.gray200,
    fontSize: 20,
    fontFamily: fonts.oxaniumSemiBold,
    lineHeight: 20,
  },
  title: {
    color: colors.gray100,
    fontFamily: fonts.oxaniumSemiBold,
    fontSize: 24,
    textAlign: 'center',
  },
  wrapper: (gap: number) => ({
    alignItems: 'flex-start',
    gap: gap,
    width: '100%'
  }),
}))