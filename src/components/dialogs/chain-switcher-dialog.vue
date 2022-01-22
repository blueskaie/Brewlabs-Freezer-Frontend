<template>
  <v-dialog v-model="dialog" scrollable persistent max-width="450" content-class="br-20">
    <v-card class="foreground br-20">
      <div class="d-flex align-center title px-4 py-3 border-b background" style="font-size: 1rem;">
        <div style="width: 24px;">

        </div>
        <v-spacer></v-spacer>
        Switch Network
        <v-spacer></v-spacer>
        <v-btn icon color="text" @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>

      <v-card-text class="pa-0">
        <div class="d-flex align-center c-list pa-4 border-b" @click="selectChain('BSC_MAINNET')">
          <svg width="50px" style="stroke:#F0B90B;" class="mr-3 draw-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332.5 332.3"><path d="M114.3 144.8l52-52 52 52 30.3-30.3-82.3-82.3L84 114.5l30.3 30.3m-81.9 21.3l30.3-30.3L93 166.1l-30.3 30.3-30.3-30.3zm81.9 21.4l52 52 52-52 30.3 30.2h0L166.3 300 84 217.8h0l30.3-30.3m125.4-21.3l30.3-30.3 30.3 30.3-30.3 30.3-30.3-30.3z"/><path d="M197 166.1h0l-30.7-30.7-22.7 22.7h0l-2.6 2.6-5.4 5.4h0 0l30.7 30.7 30.7-30.7"/></svg>
          <div>
            <div class="title">
              Binance Smart Chain
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),

  methods: {
    open () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    },
    selectChain (requiredChain) {
      this.$store.commit('switchChain', requiredChain)
      this.close()
    }
  }
}
</script>

<style scoped lang="scss">
.draw-icon {
  fill:transparent;
  stroke-width:5px;

  path{
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: dash 1.5s linear forwards;
    // animation: dash 5s cubic-bezier(.645,.045,.355,1);
  }
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
</style>