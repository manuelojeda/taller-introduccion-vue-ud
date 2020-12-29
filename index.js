const frameworks = [
  {
    name: 'Vue',
    value: 1,
  },
  {
    name: 'Angular',
    value: 2,
  },
  {
    name: 'React',
    value: 3,
  },
  {
    name: 'Svelte',
    value: 4,
  },
]

const app = Vue.createApp({
  name: 'App',
  data() {
    return {
      hola: 'mundo',
      frameworks,
      frameworkElegido: null,
      personajeElegido: null,
      personajes: []
    }
  },
  computed: {
    miFrameworkFavorito() {
      const frameworkElegido = frameworks.find((framework) => framework.value === this.frameworkElegido)
      // console.log(frameworkElegido)
      return frameworkElegido
        ? `Mi framework favorito es ${frameworkElegido.name}`
        : 'No he elegido mi framework'
    }
  },
  created() {
    // Aprendimos como ejecutar código con el ciclo de vida de created
    // this.obtenerPersonajes()
  },
  methods: {
    obtenerPersonajes() {
      fetch('https://rickandmortyapi.com/api/character/')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          // console.log(data)
          this.personajes = data.results
        })
    },
    muestrameElPrimerPersonaje() {
      return this.personajes[this.personajeElegido]
    }
  }
})
app.mount('#app')

console.log(app)
