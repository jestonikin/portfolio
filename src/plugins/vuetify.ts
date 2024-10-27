// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'

// Custom theme properties
const brand = {
  colors: {
    background: "#333333",
    accent: "#3498DB",
  }
}

export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  components: {
    ...components,
  },
  theme: {
    defaultTheme: "brand",
    themes: {
      brand
    }
  }
})
