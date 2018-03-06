<template>
   <div class="panel panel-success">
      <div class="panel-heading">List Task</div>
      <table class="table table-hover ">
        <thead>
          <tr>
            <th style="width: 10%" class="text-center">#</th>
            <th>Task</th>
            <th style="width: 20%" class="text-center">Level</th>
            <th style="width: 20%">Action</th>
          </tr>
        </thead>
        <tbody>
            <Item v-for="(item, index) in getItem" v-bind:item="item" v-bind:index="index"></Item>
        </tbody>

      </table>
    </div>
</template>

<script>
import Item from './Item';
import { filter, includes, orderBy as funcOrderBy } from 'lodash';
export default {
    components : {
        Item
    },
    name: 'List',
    data() {
        return {
            task: this.$store.state.task
        }
    },
    computed: {
        getItem() {
            let task = this.$store.state.task;
            let strSearch = this.$store.state.search;
            let itemsOrigin = (task !== null) ? [...task] : [];
            // Search
            let items = filter(itemsOrigin, (item) => {
                return includes(item.name, strSearch);
            });

            // Sort
            let orderBy = this.$store.state.orderBy;
            let orderDir = this.$store.state.orderDir;
            items = funcOrderBy(items, [orderBy], [orderDir]);
            return items;
        }
    }
}
</script>