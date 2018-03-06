<template>
   <div class="row">
      <!-- SEARCH : START -->
      <search></search>
      <!-- SEARCH : END -->

      <!-- SORT : START -->
      <sort></sort>
      <!-- SORT : END -->

      <!-- ADD : START -->
      <Toggle></Toggle>
      <!-- ADD : END -->

    </div>
</template>

<script>
import Search from './Search';
import Sort from './Sort';
import Toggle from './Toggle';
export default {
    components: {
      Search,
      Sort,
      Toggle
    },
    name: 'control',
    data() {
      return {
      }
    }
}
</script>