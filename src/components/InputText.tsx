import Icon from '@react-native-vector-icons/lucide'
import { useState } from 'react'
import { type Control, Controller, type FieldValues } from 'react-hook-form'
import {
  StyleSheet,
  Text,
  TextInput,
  type TextInputProps,
  View,
} from 'react-native'

interface Props extends TextInputProps {
  control: Control<FieldValues>
  error: string | undefined
  icon: string
  name: string
}

export function InputText({ control, error, icon, name, ...props }: Props) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <View style={styles.container}>
          <View
            style={[
              styles.wrapper,
              { borderColor: isFocused || value ? '#DAE4F2' : '#21252C' },
            ]}
          >
            <Icon
              name={icon}
              style={[
                styles.icon, { color: isFocused ? '#DAE4F2' : '#6F7D90' },
              ]}
            />

            <TextInput
              onChangeText={onChange}
              onBlur={() => setIsFocused(value !== undefined && value !== '')}
              onFocus={() => setIsFocused(true)}
              placeholderTextColor={'#6F7D90'}
              style={styles.input}
              value={value}
              {...props}
            />
          </View>

          {error && <Text>{error}</Text>}
        </View>
      )}
    />
  )
}

export const styles = StyleSheet.create({
  container: {
    gap: 4,
    width: '100%',
  },
  input: {
    flex: 1,
    color: '#DAE4F2',
    fontSize: 16,
    fontWeight: 400,
  },
  wrapper: {
    alignItems: 'center',
    backgroundColor: '#13161B',
    borderColor: '#21252C',
    borderRadius: 10,

    borderWidth: 1,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'flex-start',

    paddingHorizontal: 16,
    width: '100%',
  },
  text: {
    color: '#C8D0DA',
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'center',
  },
  icon: {
    color: '#6F7D90',
    fontSize: 20,
  },
})
