// Importação do módulo do Pinia e definição da store para futura exportação
import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore" , {
  // Tudo que está dentro do state, são variáveis que podem ser acessadas e manipuladas entre os componentes
  state: () => {
    return {
      // Vetor com todos os tipos de caminhões

      // PESO TOTAL 7380
      // DISTÂNCIA TOTAL = 2500
      trucks: [
        {
          name: 'pequeno porte',
          id: 1,
          capacityKG: 1000,
          pricePerKM: 4.87
        },
        {
          name: 'medio porte',
          id: 2,
          capacityKG: 4000,
          pricePerKM: 11.92
        },
        {
          name: 'grande porte',
          id: 3,
          capacityKG: 10000,
          pricePerKM: 27.44
        }
      ],
      // Vetor com todos os tipos de produtos
      products: [
        {
          id: 1,
          name: 'Celular',
          pesoKG: 0.5,
          qtd: 0,
        },
        {
          id: 2,
          name: 'Geladeira',
          pesoKG: 60.0,
          qtd: 0,
        },
        {
          id: 3,
          name: 'Freezer',
          pesoKG: 100.0,
          qtd: 0,
        },
        {
          id: 4,
          name: 'Cadeira',
          pesoKG: 5.0,
          qtd: 0,
        },
        {
          id: 5,
          name: 'Luminaria',
          pesoKG: 0.8,
          qtd: 0,
        },
        {
          id: 6,
          name: 'Lavadora de roupa',
          pesoKG: 120.0,
          qtd: 0,
        },
      ],

      // Vetor com todas as cidades (preenchido com os dados do CSV na mounted() do App.vue)
      cities: [],

      // Vetor com todos os transportes cadastrados
      transportes: []
    }
  },
  actions: {

  }
})