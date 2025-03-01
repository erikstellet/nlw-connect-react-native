import {
  ActivityIndicator,
  Pressable,
  type PressableProps,
  Text,
} from 'react-native'

import Icon from '@react-native-vector-icons/lucide'
import { createStyleSheet, useStyles } from 'react-native-unistyles'

interface Props extends PressableProps {
  loading: boolean
  title: string
}

export function ButtonComponent({ loading, title, ...props }: Props) {
  const {
    styles,
    theme: { colors },
  } = useStyles(stylesheet)

  return (
    <Pressable
      android_ripple={{ color: colors.ripple, foreground: true }}
      disabled={props.disabled || loading}
      style={[
        styles.container,
        (props.disabled || loading) && { opacity: 0.75 },
      ]}
      {...props}
    >
      <Text style={styles.title}>{title}</Text>

      {loading ? (
        <ActivityIndicator color={colors.white} size="small" />
      ) : (
        <Icon name="arrow-right" style={styles.icon} />
      )}
    </Pressable>
  )
}

const stylesheet = createStyleSheet(({ colors, fonts }) => ({
  container: {
    alignItems: 'center',
    backgroundColor: colors.gray500,
    borderRadius: 10,
    flexDirection: 'row',

    height: 48,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    overflow: 'hidden',

    width: '100%',
  },
  title: {
    color: colors.blue,
    fontFamily: fonts.montserratSemiBold,
    fontSize: 16,
    lineHeight: 25.6,
  },
  icon: {
    color: colors.blue,
    fontSize: 24,
  },
}))
