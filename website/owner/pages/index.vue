<template lang="pug">
  div
    h1 Hello world.
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { useTypedStore } from '@/hooks';

export default defineComponent({
  head: {},
  setup() {
    const store = useTypedStore();

    return {
      store,
    };
  },
});
</script>

<style lang="scss" scoped>
@use 'resources';
</style>
