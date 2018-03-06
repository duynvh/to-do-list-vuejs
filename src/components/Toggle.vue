<template>
    <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        <button v-if="!isShowForm" v-on:click="handleToggle()" type="button" class="btn btn-info btn-block">Open Form</button>
        <button v-if="isShowForm" v-on:click="handleToggle()" type="button" class="btn btn-success btn-block">Close Form</button>
      </div>
</template>

<script>
export default {
  name: 'Toggle',
  computed: {
      isShowForm() {
          return this.$store.state.isShowForm
      }
  },
  methods: {
      handleToggle () {
            this.$store.dispatch('TOGGLE_FORM');
            this.$store.dispatch('UNSELECT_ITEM');
      }
  }
}
</script>