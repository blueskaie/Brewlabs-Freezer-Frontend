<template>
  <v-container style="max-width: 600px;">
    
    <v-slide-y-transition appear>
    <div :class="['mb-16', {'': $vuetify.breakpoint.xs}, {'v-card br-20 foreground': !$vuetify.breakpoint.xs}]">
      
      <div class="py-6 title text-center textFaint--text">
        Select an exchange
      </div>

      <div class="d-flex align-center c-list pa-4 border-b" @click="selectExchange('Pancakeswap V2')">
        <img 
        :src="getExchangeIcon('Pancakeswap V2')" 
        height="40px"
        width="40px"
        class="mr-3 br-20">
        <div>
          <div class="title">
            Pancakeswap V2
          </div>
          <div class="caption textFaint--text">
            Binance Smart Chain
          </div>
        </div>
      </div>      
    </div>
    </v-slide-y-transition>
    
  </v-container>
</template>

<script>
import SETTINGS from '@/store/settings'

export default {

  data: () => ({
  }),

  computed: {
  },

  methods: {
    getExchangeIcon (exchange) {
      return SETTINGS.AMMS[exchange].icon
    },
    selectExchange (exchange) {
      this.$store.commit('switchExchange', exchange)
      this.$root.ammLink(`/pairs`)
    }
  },

  created () {
  }
}
</script>