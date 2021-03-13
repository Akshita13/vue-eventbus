<template>

  <button @click="onFormSubmit"></button>

</template>

<script lang="ts">
import { defineComponent } from "vue";

import {emitter} from '../../../main'

export default defineComponent({
  name: "CarrierFormContainer",

    methods:{
    onFormSubmit(){
      emitter.emit("toggle-sidebar", {abc:'akshita'});
      setTimeout(()=>{
        this.$router.push('/carriers')
      },5000)
    }
  }
  },
});
</script>

<style lang="scss" scoped>
</style>