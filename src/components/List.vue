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
            <template v-for="(item, index) in task">
                <Item v-bind:number="index" v-bind:taskName="item.name" v-bind:level="item.level"></Item>
            </template>
        </tbody>

      </table>
    </div>
</template>

<script>
import Item from './Item';
export default {
    components : {
        Item
    },
    name: 'List',
    props: ['task']
}
</script>