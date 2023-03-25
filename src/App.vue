<script>
import Header from './components/Header.vue'
import Menu from './components/Menu.vue';

import { useMainStore } from './stores/mainStore'
import { storeToRefs } from 'pinia';

export default{
  components: { Header , Menu },
  setup(){
    const mainStore = useMainStore()
    const { trucks , products, cities } = storeToRefs(mainStore)

    return {
      trucks,
      products,
      cities,
    }
  },
  mounted(){
    fetch('../DNIT-Distancias.csv')
    .then(res => res.text())
    .then(content => {

      let linhas = content.split("\n");
      let cabecalho = linhas[0].split(";");

      let controle = 1 //auxiliar de controle de linhas, começa em 1 para pular o cabeçalho
      let ids = 0 //auxiliar de controle de loop , para varrer todas as cidades (24)

      // Fazer isto, enquanto CONTROLE <= total de cidades
      do{

        // Criar um objeto de cidade
        let cidade = {}
        cidade.id = ids
        cidade.name = cabecalho[ids]

        // Cada cidade possui todas as outras cidades como atributo, e o valor desses atributos indica a distância, EX:
        // {
        //  name: Belem
        //  ARACAJU: 2079 === quer dizer q a distância da cidade de belem até Aracaju é de 2079 KM
        // } 
        for(let indice in cabecalho){
          let values = linhas[controle].split(";")
          cidade[cabecalho[indice]] = values[indice]
        }

        // Valores de KM estavam como Strings, apenas transformando todos eles em valores inteiros
        for(let key in cidade){
          if(isNaN(cidade[key]) === false){
            let aux = parseInt(cidade[key])
            cidade[key] = aux
          }
        }

        // Adicionando a cidade criada no vetor & atualizando as variáveis para o loop
        this.cities.push(cidade)
        ids ++
        controle ++
      }while(controle <= cabecalho.length)
    })
  }
}
</script>

<template>
 <main>
  <Header></Header>
  <Menu></Menu>
 </main>
</template>

<style scoped>
main{
  width: 100vw;
  max-width: 100%;
  height: 100vh;
}
</style>
