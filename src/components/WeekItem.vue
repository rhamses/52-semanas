<template>
  <q-timeline-entry 
    :icon="(action.icon) ? action.icon : 'help_outline' "
    :color="(action.color) ? action.color : 'primary' "
    >
    <q-slide-item 
      class="full-width rounded-borders"
      :class="actionStyle.bg"
      @left="onLeft" 
      @right="onRight"
      left-color="red" 
      right-color="green"
      >
      <template v-slot:left>
        <div class="row items-center">
          <q-icon left name="dangerous" />
          Depósito Não realizado
        </div>
      </template>
      <template v-slot:right>
        <div class="row items-center">
          Depósito feito
          <q-icon right name="savings" />
        </div>
      </template> 
      <q-item :active="active" v-ripple>
        <q-item-section>
          <section class="row full-width q-py-md" :class="active ? 'is-active' : 'is-not-active' ">
            <div class="col flex flex-center content-center">
              <q-item-label :class="actionStyle.text">{{ week.number + 1 }}</q-item-label>
            </div>
            <div class="col col-4  flex flex-center">
              <q-item-label :class="actionStyle.text">{{ weekFormatted }}</q-item-label>
            </div>
            <div class="col col-6 flex flex-center">
              <q-item-label class="font-lg" :class="actionStyle.text">R$ <span class="text-h5">{{ installment }}</span></q-item-label>
            </div>
          </section>
        </q-item-section>
      </q-item>
    </q-slide-item>
  </q-timeline-entry>
</template>

<style scoped>
  .rounded-borders {
    border-radius:  10px;
  }

  .is-not-active {
    opacity: .5;
  }
</style>

<script>
  export default {
    name: "WeekItem",
    props: ['week', 'goal'],
    data(){
      return {
        active: true,
        action: {
          icon: null,
          color: null
        }
      }
    },
    mounted(){
      if (this.week.status == 'paid') {
        this.action.color = 'green'
      } else if (this.week.status == 'unpaid') {
        this.action.color = 'red'
      }
    },
    computed: {
      installment(){
        return Number(this.goal.stallment).toFixed(2);
      },
      weekFormatted(){
        let month = new Date(this.week.date).getMonth() + 1;
        let day = new Date(this.week.date).getDate();
        let year = new Date(this.week.date).getFullYear();

        if (month < 10) {
          month = '0' + month
        }

        if (day < 10) {
          day = '0' + day
        }

        return day + '/' + month + '/' + year
      },
      actionStyle(){
        return {
          bg: {
            'bg-grey-4': this.action.color === null,
            'bg-green-3': this.action.color === 'green',
            'bg-red-3': this.action.color === 'red'
          },
          text: {
            'text-blue-10': this.action.color === null,
            'text-green-10': this.action.color === 'green',
            'text-red-14': this.action.color === 'red'            
          }
        }
      }
    },
    methods: {
      onLeft({ reset }){
        this.action.icon = 'remove_done';
        this.action.color = 'red';
        this.active = false;
        this.$emit('swipeLeft', this.week.number);
        reset();
      },
      onRight({ reset }){
        this.$emit('swipeRight', this.week.number);
        this.active = true;
        this.action.icon = 'done';
        this.action.color = 'green';
        reset();
      }
    }
  }
</script>