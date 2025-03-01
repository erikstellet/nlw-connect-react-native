import Clipboard from '@react-native-clipboard/clipboard'
import Icon from '@react-native-vector-icons/lucide'
import { Fragment, useState } from 'react'
import { type Control, Controller, type FieldValues } from 'react-hook-form'
import {
  Pressable,
  Text,
  TextInput,
  type TextInputProps,
  View,
} from 'react-native'
import { createStyleSheet, useStyles } from 'react-native-unistyles'

interface Props extends TextInputProps {
  control: Control<FieldValues>
  error?: string | undefined
  icon: string
  isCopy?: boolean
  name: string
}

export function InputText({
  control,
  error,
  icon,
  isCopy,
  name,
  ...props
}: Props) {
  const {
    styles,
    theme: { colors },
  } = useStyles(stylesheet)

  const [isFocused, setIsFocused] = useState(false)

  const handleCopy = () =>
    props.defaultValue && Clipboard.setString(props.defaultValue)

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Fragment>
          <View
            style={[
              styles.container,
              {
                borderColor: colors[isFocused || value ? 'gray100' : 'gray600'],
              },
            ]}
          >
            <Icon
              name={icon}
              style={[
                styles.icon,
                {
                  color:
                    colors[
                      isFocused || props.defaultValue
                        ? 'gray100'
                        : error
                          ? 'danger'
                          : 'gray400'
                    ],
                },
              ]}
            />

            <TextInput
              cursorColor={colors.gray400}
              onChangeText={onChange}
              onBlur={() => setIsFocused(value !== undefined && value !== '')}
              onFocus={() => setIsFocused(true)}
              placeholderTextColor={colors.gray400}
              style={styles.input}
              value={value}
              {...props}
            />

            {isCopy && (
              <Pressable
                android_ripple={{ color: colors.ripple, foreground: true }}
                onPress={handleCopy}
                style={styles.button}
              >
                <Icon name="copy" style={styles.iconButton} />
              </Pressable>
            )}
          </View>

          {error && <Text style={styles.text}>{error}</Text>}
        </Fragment>
      )}
    />
  )
}

const stylesheet = createStyleSheet(({ colors, fonts }) => ({
  button: {
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: colors.gray500,
    display: 'flex',

    marginRight: -8,
    overflow: 'hidden',
    padding: 6,
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.gray800,
    borderColor: colors.gray600,
    borderRadius: 10,

    borderWidth: 1,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'flex-start',

    paddingHorizontal: 16,
    width: '100%',
  },
  icon: {
    color: colors.gray100,
    fontSize: 20,
  },
  iconButton: {
    color: colors.blue,
    fontSize: 20,
  },
  input: {
    flex: 1,
    color: colors.gray100,
    fontFamily: fonts.montserratRegular,
    fontSize: 16,
  },
  text: {
    color: colors.danger,
    fontFamily: fonts.montserratSemiBold,
    fontSize: 12,
    lineHeight: 19.2,
  },
}))
