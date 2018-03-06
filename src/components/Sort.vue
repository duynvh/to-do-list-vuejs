<template>
   <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div class="dropdown">
          <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="true">
            Sort by
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li>
              <a v-on:click="handleSort('name', 'asc')" role="button">Name ASC</a>
            </li>
            <li>
              <a v-on:click="handleSort('name', 'desc')" role="button">Name DESC</a>
            </li>
            <li role="separator" class="divider"></li>
            <li>
              <a v-on:click="handleSort('level', 'asc')" role="button">Level ASC</a>
            </li>
            <li>
              <a v-on:click="handleSort('level', 'desc')" role="button">Level DESC</a>
            </li>
          </ul>
          <span class="label label-success label-medium">{{ strSort }}</span>
        </div>
      </div>
</template>

<script>
export default {
  name: 'sort',
  computed: {
    strSort() {
      return this.$store.state.orderBy + " - " + this.$store.state.orderDir;
    }
  },
  methods: {
    handleSort(orderBy, orderDir) {
      let order = {orderBy, orderDir};
      return this.$store.dispatch('CHANGE_SORT', order);
    }
  }
}
</script>