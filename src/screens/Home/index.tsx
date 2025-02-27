import { Image, ScrollView, Text, View } from 'react-native'

import Icon from '@react-native-vector-icons/lucide'

import { TextInput } from '@components/inputs/TextInput'
import { ButtonComponent } from '@components/buttons/ButtonComponent'

import { styles } from './styles'

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image resizeMode="cover" source={require('../../assets/logo.png')} />
        <Text style={styles.title}>
          <Text style={{ color: '#6F9DE2' }}>CodeCraft{'\n'}</Text>
          Summit 2025
        </Text>
      </View>

      <View style={styles.main}>
        <View style={styles.card}>
          <View style={styles.wrapper}>
            <Text style={styles.text}>Sobre o evento</Text>

            <View style={styles.wrapperText}>
              <Icon name="radio" style={styles.icon} />
              <Text style={styles.textTag}>AO VIVO</Text>
            </View>
          </View>

          <Text style={styles.description}>
            Um evento feito por e para pessoas desenvolvedoras apaixonadas por
            criar soluções inovadoras e compartilhar conhecimento. Vamos
            mergulhar nas tendências mais recentes em desenvolvimento de
            software, arquitetura de sistemas e tecnologias emergentes, com
            palestras, workshops e hackathons.
            {'\n'}
            {'\n'}
            Dias 15 a 17 de março | Das 18h às 21h
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.text}>Inscrição</Text>

          <View style={styles.wrapperInputs}>
            <TextInput error={false} placeholder="Nome completo" icon="user" />
            <TextInput error={false} placeholder="E-mail" icon="mail" />
          </View>

          <ButtonComponent title="Confirmar" onPress={() => {}} />
        </View>
      </View>
    </ScrollView>
  )
}
