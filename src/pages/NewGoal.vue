<template>
  <section class="container">
    <q-page class="flex column align-center items-center" style="padding-top: 50px">
      <header class="q-mb-md">
        <h2 class="text-h4 text-center">Qual é a sua meta?</h2>
        <p class="q-px-md">
          <b>Lembre-se:</b> Crie uma meta que seja atingível ao final do período de 1 ano (52 semanas)
        </p>
      </header>
      <q-form @submit="save" :class="{'q-mb-xl': buttonText == 'Adicionar meta' }" class="full-width q-px-md text-center form-goal" style="flex: 1" ref="form">
        <q-input :rules="[ val => val.length > 3 || 'Informe pelo menos 3 caracteres' ]" class="q-mb-xl" v-model="name" label="Ex.: Presente para o amigo secreto" placeholder="Minha meta é" stack-label>
          <template v-slot:prepend>
            <q-icon name="event" />
          </template>
        </q-input>
        <q-input :rules="[ val => val > 0 || 'Números apenas positivos' ]" :hint="hint" class="q-mb-xl" v-model="stallment" type="number" stack-label label="Por semana, posso guardar...">
          <template v-slot:prepend>
            R$
          </template>
        </q-input>
        <q-input class="q-mb-lg" v-model="startAt" type="date" stack-label label="Quero começar a poupar em...">
          <template v-slot:prepend>
            <q-icon name="event" />
          </template>
        </q-input>
        <q-btn v-if="buttons" type="submit" color="primary" :label="buttonText" :push="true" ripple size="md" icon-right="done" align="center" />
      </q-form>
    </q-page>
  </section>

</template>

<style scoped>
  .form-goal {
    display: flex;
    flex-direction:  column;
    justify-content: space-around;
  }
</style>

<script>
  import { mapMutations } from 'vuex'
  import eachWeekOfInterval from 'date-fns/eachWeekOfInterval'
  import add from 'date-fns/add'

  export default {
    name: "NewGoal",
    props: {
      buttons: {
        type: Boolean,
        required: true,
        default: true
      },
      buttonText: {
        type: String,
        default: 'Adicionar meta'
      }
    },
    data(){
      return {
        name: '',
        stallment: 0,
        startAt: null
      }
    },
    computed: {
      weeks(){
       const startDate = new Date(this.startAt);
       const endDate = add(startDate,{years: 1});

       let weeks = eachWeekOfInterval({
          start: startDate,
          end: endDate
        })
       
        weeks = weeks.map(item => {
          return {
            "date": item, 
            "status": false
          }
       })
       weeks.pop()
       return weeks;
      }
    },
    watch: {
      stallment(value){
        if (value > 0) {
          this.hint = `O valor total será de R$ ${value * 52},00 ao final das 52 semanas`          
        } else {
          this.hint = '';
        }
      }
    },
    methods: {
      ...mapMutations('goals', ['mutGoals']),
      save(){
        const payload = {
          name: this.name,
          stallment: this.stallment,
          total: this.stallment * 52,
          startAt: this.startAt,
          weeks: this.weeks
        }
        this.mutGoals(payload);
        this.$router.push('/list')
      }
    }
  }
</script>