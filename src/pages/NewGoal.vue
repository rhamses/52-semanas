<template>
  <section class="container">
    <q-page class="flex column align-center items-center" style="padding-top: 50px">
      <header class="q-mb-md">
        <h2 class="text-h4">What's your next goal?</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        </p>
      </header>
      <q-form @submit="save" :class="{'q-mb-xl': buttonText == 'Adicionar meta' }" class="full-width q-px-md text-center form-goal" style="flex: 1" ref="form">
        <q-input :rules="[ val => val.length > 3 || 'Please use minimum 3 characters' ]" class="q-mb-xl" v-model="name" label="The name of your goal is..." stack-label>
          <template v-slot:prepend>
            <q-icon name="event" />
          </template>
        </q-input>
        <q-input :rules="[ val => val > 0 || 'Please use only positive values' ]" :hint="hint" class="q-mb-xl" v-model="stallment" type="number" stack-label label="The amount you want to save is...">
          <template v-slot:prepend>
            R$
          </template>
        </q-input>
        <q-input class="q-mb-lg" v-model="startAt" type="date" stack-label label="The amount you want to save is...">
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
       const startDate = new Date(this.startAt.split('-')[0], this.startAt.split('-')[1], this.startAt.split('-')[2]);
       const endDate = new Date(Number(this.startAt.split('-')[0]) + 1, this.startAt.split('-')[1], this.startAt.split('-')[2]);
       let weeks = eachWeekOfInterval({
          start: startDate,
          end: endDate
        })
       return weeks = weeks.map(item => {
        return {
          "date": item, 
          "status": false
        }
       })
      }
    },
    watch: {
      stallment(value){
        if (value > 0) {
          this.hint = `The total value will be of ${value * 52}`          
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