import Icon from "@react-native-vector-icons/lucide";
import { Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export function Stats() {
  const { styles } = useStyles(stylesheet)

  const items = [
    {
      icon: 'mouse-pointer-click',
      label: 'Acessos ao link',
      value: String(942),
    },
    {
      icon: 'badge-check',
      label: 'Inscrições feitas',
      value: String(875),
    },
    {
      icon: 'medal',
      label: 'Posição no ranking',
      value: '3°',
    }
  ]

  return (
    <View style={styles.container}>
      {items.map(({ icon, label, value }) => (
        <View key={label} style={styles.card}>
          <Icon name={icon} style={styles.icon} />

          <View style={styles.wrapper}>
            <Text style={styles.value}>{value}</Text>
            <Text style={styles.label}>{label}</Text>
          </View>
        </View>
      ))}
    </View>
  )
}

const stylesheet = createStyleSheet(({ colors, fonts }) => ({
  card: {
    alignItems: 'center',
    backgroundColor: colors.gray700,
    borderColor: colors.gray600,
    borderRadius: 10,

    borderWidth: 1,
    padding: 24,
    width: '100%'
  },
  container: {
    alignItems: 'center',
    flexGrow: 1,
    gap: 8,
    width: '100%',
  },
  icon: {
    color: colors.purple,
    fontSize: 20,
    left: 12,
    position: 'absolute',

    top: 12,
  },
  label: {
    color: colors.gray300,
    fontFamily: fonts.montserratRegular,
    fontSize: 14,
    lineHeight: 22.4,
  },
  value: {
    color: colors.gray200,
    fontFamily: fonts.oxaniumSemiBold,
    fontSize: 24,
    lineHeight: 24,
  },
  wrapper: {
    alignItems: 'center',
    gap: 4,
  },
}))