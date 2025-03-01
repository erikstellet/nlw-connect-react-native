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
import Clipboard from '@react-native-clipboard/clipboard';

interface Props extends TextInputProps {
  control: Control<FieldValues>
  error?: string | undefined
  icon: string
  isCopy?: boolean;
  name: string
}

export function InputText({ control, error, icon, isCopy, name, ...props }: Props) {
  const { styles, theme: { colors } } = useStyles(stylesheet)
  
  const [isFocused, setIsFocused] = useState(false)
  
  const handleCopy = () => Clipboard.setString(props.defaultValue)

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Fragment>
          <View
            style={[
              styles.container,
              { borderColor: colors[isFocused || value ? 'gray100' : 'gray600'] },
            ]}
          >
            <Icon
              name={icon}
              style={[styles.icon, { color: colors[isFocused ? 'gray100' : 'gray400']}]}
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
                <Icon name='copy' style={styles.iconButton} />
              </Pressable>
            )}
          </View>

          {error && <Text style={styles.text}>{error}</Text>}
        </Fragment>
      )}
    />
  )
}

const stylesheet = createStyleSheet(({ colors }) => ({
  button: {
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: colors.gray500,
    display: 'flex',

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
    fontSize: 16,
    fontWeight: 400,
  },
  text: {
    color: colors.danger,
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 19.2,
  }
}))
