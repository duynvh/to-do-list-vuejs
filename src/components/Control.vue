<template>
   <div class="row">
      <!-- SEARCH : START -->
      <search></search>
      <!-- SEARCH : END -->

      <!-- SORT : START -->
      <sort></sort>
      <!-- SORT : END -->

      <!-- ADD : START -->
      <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        <button type="button" class="btn btn-info btn-block">Add Task</button>
      </div>
      <!-- ADD : END -->

    </div>
</template>

<script>
import Search from './Search';
import Sort from './Sort';
export default {
    components: {
      Search,
      Sort
    },
    name: 'control'
}
</script>