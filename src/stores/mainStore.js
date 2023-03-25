import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore" , {
  state: () => {
    return {
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

      products: [
        {
          id: 1,
          name: 'Celular',
          presoKG: 0.5
        },
        {
          id: 2,
          name: 'Geladeira',
          presoKG: 60.0
        },
        {
          id: 3,
          name: 'Freezer',
          presoKG: 100.0
        },
        {
          id: 4,
          name: 'Cadeira',
          presoKG: 5.0
        },
        {
          id: 5,
          name: 'Luminaria',
          presoKG: 0.8
        },
        {
          id: 6,
          name: 'Lavadora de roupa',
          presoKG: 120.0
        },
      ],

      cities: []
    }
  },
  actions: {

  }
})