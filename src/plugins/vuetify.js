import 'vuetify/lib/styles/main.sass'
import { createVuetify } from 'vuetify'
import themes from '@/plugins/themes.js'

export default createVuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: themes.theme2.light
    }
  }
})