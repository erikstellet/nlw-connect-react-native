import { Image, Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export function Ranking() {
  const { styles, theme: { fonts } } = useStyles(stylesheet)

  const items = [
    {
      medal: require('@assets/medal-gold.png'),
      name: 'André Souza',
      points: String(1.128),
    },
    {
      medal: require('@assets/medal-silver.png'),
      name: 'Melissa Loures',
      points: String(928),
    },
    {
     medal: require('@assets/medal-cooper.png'),
     name: 'Rodrigo Gonçalves',
      points: String(875),
    }
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ranking de indicações</Text>

      <View style={styles.wrapper}>
        {items.map(({ points, medal, name }, index) => (
          <View key={name} style={styles.card}>
            <View style={styles.wrapper}>
              <Text style={styles.information}>
                <Text style={{ fontFamily: fonts.montserratSemiBold }}>
                  {index + 1}°
                </Text>
                {' '}| {name}
                </Text>
              <Text style={styles.points}>{points}</Text>
            </View>

            <Image resizeMode="cover" source={medal} style={styles.medal}/>
          </View>
        ))}
      </View>
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
    alignItems: 'flex-start',
    flexGrow: 1,
    gap: 20,
    width: '100%',
  },
  information: {
    color: colors.gray300,
    fontFamily: fonts.montserratRegular,
    fontSize: 16,
    lineHeight: 24,
  },
  medal: {
    position: 'absolute',
    right: 8,
    top: 0,

    width: 56,
  },
  points: {
    color: colors.gray200,
    fontFamily: fonts.oxaniumSemiBold,
    fontSize: 24,
    lineHeight: 24,
  },
  title: {
    color: colors.gray200,
    fontFamily: fonts.oxaniumSemiBold,
    fontSize: 20,
    lineHeight: 20,
  },
  wrapper: {
    alignItems: 'flex-start',
    gap: 8,
    width: '100%'
  },
}))