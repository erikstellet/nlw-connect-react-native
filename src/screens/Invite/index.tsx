import { Text } from "react-native";
import { Image, ScrollView, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Stats } from "./components/Stats";
import { Ranking } from "./components/Ranking";
import { InputText } from "@components/InputText";

const subscriptionSchema = z.object({
  link: z.string(),
})

type SubscriptionSchema = z.infer<typeof subscriptionSchema>

export default function Invite() {
  const { styles } = useStyles(stylesheet)
  
  const { control } = useForm({
    resolver: zodResolver<SubscriptionSchema>(subscriptionSchema),
  })

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

          <InputText
            control={control}
            defaultValue="devstage.com/codecraft-summit-2025/1289"
            icon="link"
            isCopy
            name="name"
            placeholder="Nome completo"
          />
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