import { Pressable, type PressableProps, Text } from 'react-native'

import Icon from '@react-native-vector-icons/lucide'

import { styles } from './styles'

interface Props extends PressableProps {
  title: string
}

export function ButtonComponent({ title, ...props }: Props) {
  return (
    <Pressable style={styles.container} {...props}>
      <Text style={styles.title}>{title}</Text>
      <Icon name="arrow-right" style={styles.icon} />
    </Pressable>
  )
}
