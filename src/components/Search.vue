<template>
   <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div class="input-group">
          <input v-model="message" type="text" class="form-control" ref="search" placeholder="Search for..." />
          <span class="input-group-btn">
            <button v-on:click="handleSearch()" class="btn btn-info" type="button">Go!</button>
            <button v-on:click="handleClear()" class="btn btn-warning" type="button">Clear!</button>
          </span>
        </div>
      </div>
</template>

<script>
export default {
  name: 'search',
  data() {
    return {
      // strSearch: this.$store.state.search
    }
  },
  computed: {
     message: {
      get () {
        return this.$store.state.search
      },
      set (value) {
        this.$store.commit('CHANGE_SEARCH', value)
      }
    }
  },
  methods: {
    handleSearch() {
      return this.$store.dispatch('CHANGE_SEARCH', this.message);
    },
    
    handleClear() {
      return this.$store.dispatch('CHANGE_SEARCH', '');
    }
  }
}
</script>