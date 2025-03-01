import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Text, View } from 'react-native'
import { createStyleSheet, useStyles } from 'react-native-unistyles'
import z from 'zod'

import { ButtonComponent } from '@components/ButtonComponent'
import { InputText } from '@components/InputText'

const subscriptionSchema = z.object({
  name: z
    .string({ message: 'Preencha o campo' })
    .min(2, 'Digite seu nome completo'),
  email: z
    .string({ message: 'Preencha o campo' })
    .email('Digite uma e-mail válido'),
})

type SubscriptionSchema = z.infer<typeof subscriptionSchema>

export function SubscriptionForm() {
  const { styles } = useStyles(stylesheet)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver<SubscriptionSchema>(subscriptionSchema),
  })

  const [loading, setLoading] = useState(false)

  async function onSubscribe(data: SubscriptionSchema) {
    setLoading(true)

    setTimeout(() => {
      console.log(data)
      setLoading(false)
    }, 2000)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscrição</Text>

      <View style={styles.wrapper}>
        <InputText
          control={control}
          error={errors?.name?.message}
          icon="user"
          name="name"
          placeholder="Nome completo"
        />
        <InputText
          control={control}
          error={errors?.email?.message}
          icon="mail"
          name="email"
          placeholder="E-mail"
        />
      </View>

      <ButtonComponent
        onPress={handleSubmit(onSubscribe)}
        title="Confirmar"
        loading={loading}
      />
    </View>
  )
}

const stylesheet = createStyleSheet(({ colors, fonts }) => ({
  container: {
    alignItems: 'flex-start',
    backgroundColor: colors.gray700,
    borderColor: colors.gray600,
    borderRadius: 16,

    borderWidth: 1,
    gap: 24,
    padding: 24,
    width: '100%',
  },
  title: {
    color: colors.gray200,
    fontFamily: fonts.oxaniumSemiBold,
    fontSize: 20,
    textAlign: 'center',
  },
  wrapper: {
    alignItems: 'flex-start',
    flex: 1,
    gap: 12,
    justifyContent: 'space-between',

    width: '100%',
  },
}))
