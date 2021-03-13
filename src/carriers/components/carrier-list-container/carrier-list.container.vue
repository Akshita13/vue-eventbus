<template>
 <p>Akshita</p>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from "vue";


import {emitter} from '../../../main'
export default defineComponent({
  name: "CarrierListContainer",

  // created() {
  //   CarrierService.getProposals()
  //     .then((response) => {
  //       console.log(response);
  //     })
  // },
    mounted() { 
    emitter.on("toggle-sidebar", obj => {
      alert(obj)
    });
  }
 
});
</script>

<style lang="scss" scoped>
</style>