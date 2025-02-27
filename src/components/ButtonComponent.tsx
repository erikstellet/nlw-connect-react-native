import { Pressable, type PressableProps, StyleSheet, Text } from 'react-native'

import Icon from '@react-native-vector-icons/lucide'

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

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#2A313C',
    borderRadius: 10,
    flexDirection: 'row',

    height: 48,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
  },
  title: {
    color: '#6F9DE2',
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 25.6,
  },
  icon: {
    color: '#6F9DE2',
    fontSize: 24,
  },
})
