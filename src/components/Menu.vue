<script>
import { useMainStore } from '../stores/mainStore'
import { storeToRefs } from 'pinia';

export default{
  setup(){
    const mainStore = useMainStore()
    const { trucks , products, cities } = storeToRefs(mainStore)

    return {
      trucks,
      products,
      cities,
    }
  },
  methods: {
    callOption(option){
      switch(option){
        case 1: this.option1(); break;
        case 2: this.option2(); break;
        case 3: this.option3(); break;
        case 4: this.option4(); break;
      }
    },
    option1(){
      console.log('OPÇÃO 1')
    },
    option2(){
      console.log('OPÇÃO 2')
    },
    option3(){
      console.log('OPÇÃO 3')
    },
    option4(){
      window.alert('Programa finalizado')
      window.close()
    }
  }
}
</script>

<template>
  <div>
    <p>Menu</p>
    <p>Clique na opção que desejar</p>
    <ol>
      <li @click="callOption(1)">[Consultar trechos x modalidade]</li>
      <li @click="callOption(2)">[Cadastrar transporte]</li>
      <li @click="callOption(3)">[Dados estatísticos]</li>
      <li @click="callOption(4)">[Finalizar o programa]</li>
    </ol>
  </div>
</template>

<style scoped>
div{
  text-align: center;
  padding: 20px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

ol{
  width: max-content;
}

ol li{
  margin: 20px 0;
  cursor: pointer;
  transition: all .5s ease;
  text-align: justify;
  width: max-content;
  user-select: none;
}

ol li:hover{
  color: #007dbc;
}
</style>
