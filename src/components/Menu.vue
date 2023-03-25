<script>
// Importando o pinia e definido a store 
import { useMainStore } from '../stores/mainStore'
import { storeToRefs } from 'pinia';

export default{
  setup(){
    const mainStore = useMainStore()
    const { trucks , products, cities, currentOption } = storeToRefs(mainStore)

    return {
      trucks,
      products,
      cities,
      currentOption
    }
  },
  // Todas as variáveis REATIVAS deste e somente deste componente são declaradas dentro do objeto Data()
  data(){
    return {
      // Inicio as variáveis sem nenhum valor para posteriormente usá-las
      OP1: false,
      cidade1_OP1: '',
      cidade2_OP1: '',
      truck_OP1: '',
      distancia_OP1: '',
      valor_OP1: '',

      OP2: false,


      OP3: false,
    }
  },
  // Todos os métodos(funções) deste componente estão presentes dentro de methods:
  methods: {
    // identifica qual opção do menu principal foi clicada(1,2,3 ou 4), e chama a respectiva função
    callOption(option){
      switch(option){
        case 1: this.menuOption1(); break;
        case 2: this.menuOption2(); break;
        case 3: this.menuOption3(); break;
        case 4: this.menuOption4(); break;
      }
    },

    // Funções de cada opção do menu principal, elas apenas
    // chamam a função de reset, que zera todas as variáveis do componente para
    // assim criar e alternar entre um novo fluxo sem conflitos
    menuOption1(){
      this.resetALL(1)
    },
    menuOption2(){
      console.log('OPÇÃO 2')
      this.resetALL(2)
    },
    menuOption3(){
      console.log('OPÇÃO 3')
      this.resetALL(3)
    },
    menuOption4(){ //Função da opão 4, que cria um alerta no browser e fecha a janela
      window.alert('Programa finalizado')
      window.close()
    },
    
    // Funções de ação, que são chamadas dentro do menu da sua respectiva opção
    actionOption1(){

      // No formulário da opção 1, eu envio o objeto das duas cidades para variáveis dentro de data()
      // Posteriomente eu procuro dentro do objeto de cidade1_OP1 o atributo que corresponde ao nome da
      // cidade2_OP1, assim consigo o valor total da distância, que posteriormente será multiplicado 
      // pelo atributo 'pricePerKM' dentro do objeto truck que também é 'settado' dentro do data() pelo formulário do menu da opção 1
      this.distancia_OP1 = this.cidade1_OP1[this.cidade2_OP1.name]
      this.valor_OP1 = this.cidade1_OP1[this.cidade2_OP1.name] * this.truck_OP1.pricePerKM
    },
    actionOption2(){

    },
    actionOption3(){

    },

    // Função de reset, que zera todos os fluxos do componente e todas suas variáveis
    resetALL(OP){
      this.cidade1_OP1 = ''
      this.cidade2_OP1 = ''
      this.truck_OP1 = ''
      this.distancia_OP1 = ''
      this.valor_OP1 = ''

      switch (OP){
        case 1:
          this.OP1 = true
          this.OP2 = false
          this.OP3 = false
        break;
        case 2:
          this.OP1 = false
          this.OP2 = true
          this.OP3 = false
        break;
        case 3:
          this.OP1 = false
          this.OP2 = false
          this.OP3 = true
        break;
      }
    },

    // Função de controle do formulário de inputs da opção 1
    // é ela que bloqueia o botão caso as cidades selecionadas pelo usuário sejam iguais ou,
    // falta preencher algum input
    controleFormularioOP1(){
      if(this.cidade1_OP1 === this.cidade2_OP1){
        return true
      }
      else if(!this.cidade1_OP1 || !this.cidade2_OP1 || !this.truck_OP1){
        return true
      }
      else{
        return false
      }
    },

  }
}
</script>

<!-- Código HTML -->
<template>
  <div>
    <!-- 
      Menu principal da aplicação, é ele que contêm as 4 principais
      funcionalidades do exercício técnico que são ativadas ao evento de click()
     -->
    <p>Menu</p>
    <p>Clique na opção que desejar</p>
    <ol>
      <li @click="callOption(1)">[Consultar trechos x modalidade]</li>
      <li @click="callOption(2)">[Cadastrar transporte]</li>
      <li @click="callOption(3)">[Dados estatísticos]</li>
      <li @click="callOption(4)">[Finalizar o programa]</li>
    </ol>

    <!-- Menu da opção 1 -->
    <!-- 
      Há três inputs de seleção de valores, dois para selecionar as cidades e
      um para selecionar os caminhões, todas as opções deles, são preenchidas
      fazendo iterações sobre seus respectivos vetores: cities & trucks (ambos localizados na store)
      O botão para mostrar o resultado, só poderá ser chamado se as cidades nos inputs forem diferentes e
      todos os inputs tiverem sido preenchidos
    -->
    <div class="menu1" v-if="OP1">
      <p>Opção 1</p>
      <div class="container_inputs">
        <div>
          <label>Selecione a cidade inicial:</label>
          <select v-model="cidade1_OP1" @change="teste">
            <option v-for="city in cities" :key="city.id" :value="city">{{ city.name }}</option>
          </select>
        </div>
        <div>
          <label>Selecione a cidade de destino:</label>
          <select v-model="cidade2_OP1" @change="teste">
            <option v-for="city in cities" :key="city.id" :value="city">{{ city.name }}</option>
          </select>
        </div>
        <div>
          <label>Selecione a categoria do transporte</label>
          <select v-model="truck_OP1" @change="teste">
            <option v-for="truck in trucks" :key="truck.id" :value="truck">{{ truck.name }}</option>
          </select>
        </div>
        <div class="btn_container">
          <p v-if="controleFormularioOP1()">As cidades precisam ser diferentes</p>
          <button :class="{disable : controleFormularioOP1()}" @click="actionOption1()">Verificar</button>
        </div>
        <div class="resultado">
          <p>A distância de <span>{{ cidade1_OP1.name }}</span> até <span>{{ cidade2_OP1.name }}</span> é de {{ distancia_OP1 }} Km.</p>
          <p>Que quando percorridos utilizando um caminhão de <span>{{ truck_OP1.name }}</span> geram um valor total de R${{ valor_OP1 }}</p>
        </div>
      </div>
    </div>

    
  </div>
</template>

<!-- Código CSS -->
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

.container_inputs{
  display: flex;
  flex-direction: column;
}

.container_inputs div{
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.container_inputs div.btn_container{
  display: flex;
  flex-direction: column;
}

.container_inputs div.resultado{
  display: flex;
  flex-direction: column;
}

.container_inputs div.resultado p span{
  color: #007dbc;
  font-weight: 500;
}

.container_inputs div.btn_container button{
  padding: 12px 40px;
  border-radius: 8px;
  border: none;
  outline-style: none;
  cursor: pointer;
  background-color: #007dbc;
  color: #fff;
}

.container_inputs div.btn_container .disable{
  opacity: .5;
  pointer-events: none;
}
</style>
