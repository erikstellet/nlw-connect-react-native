import { StyleSheet, Text, View } from 'react-native'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

import { ButtonComponent } from '@components/ButtonComponent'
import { InputText } from '@components/InputText'
import { useState } from 'react'

const subscriptionSchema = z.object({
  name: z.string().min(2, 'Digite seu nome completo'),
  email: z.string().email('Digite uma e-mail válido'),
})

type SubscriptionSchema = z.infer<typeof subscriptionSchema>

export function SubscriptionForm() {
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

export const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: '#191D24',
    borderColor: '#21252C',
    borderRadius: 16,

    borderWidth: 1,
    gap: 24,
    padding: 24,
    width: '100%',
  },
  title: {
    color: '#C8D0DA',
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'center',
  },
  wrapper: {
    alignItems: 'flex-start',
    flex: 1,
    gap: 12,
    justifyContent: 'space-between',

    width: '100%',
  },
})
