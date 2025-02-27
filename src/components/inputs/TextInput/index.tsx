import Icon from '@react-native-vector-icons/lucide'
import {
  TextInput as Input,
  Text,
  type TextInputProps,
  View,
} from 'react-native'

import { useState } from 'react'
import { styles } from './styles'

interface Props extends TextInputProps {
  error: boolean
  icon: string
}

export function TextInput({ error, icon, ...props }: Props) {
  const [value, setValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  return (
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
            styles.icon,
            { color: isFocused || value ? '#DAE4F2' : '#6F7D90' },
          ]}
        />

        <Input
          onBlur={() => setIsFocused(false)}
          onChangeText={setValue}
          onFocus={() => setIsFocused(true)}
          placeholderTextColor={'#6F7D90'}
          style={styles.input}
          value={value}
          {...props}
        />
      </View>

      {error && <Text>*Error no Input</Text>}
    </View>
  )
}
