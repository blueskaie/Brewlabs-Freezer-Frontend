<template>
  <v-container style="max-width: 600px;">
    
    <v-slide-y-transition appear>
    <div :class="['mb-16', {'foreground v-card br-20': $vuetify.breakpoint.xs}, {'v-card br-20 foreground': !$vuetify.breakpoint.xs}]">
      
      <div class="py-6 title text-center textFaint--text">
        Our services
      </div>

      <router-link 
      to="/services/lock-liquidity"
      v-slot="{ navigate }">
        <div class="d-flex align-center c-list pa-4 border-b" @click="navigate">
          <img 
          src="@/assets/img/icons/padlock.png" 
          height="60px"
          width="60px"
          class="mr-3">

          <div>
            <div class="">
              Liquidity Locker
            </div>
            <div class="caption textFaint--text">
              Lock Liquidity tokens
            </div>
          </div>
        </div>
      </router-link>
    </div>
    </v-slide-y-transition>
    
  </v-container>
</template>

<script>
export default {

  data: () => ({
  }),

  computed: {
  },

  methods: {
  },

  created () {
  }
}
</script>