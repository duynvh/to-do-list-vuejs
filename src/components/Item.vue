<template>
   <tr>
            <td class="text-center">{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td class="text-center" v-html="getLevel"></td>
            <td>
              <button  v-on:click="handleEdit(item)" type="button" class="btn btn-warning">Edit</button>
              <button v-on:click="handleDelete(item.id)" type="button" class="btn btn-danger">Delete</button>
            </td>
          </tr>
</template>

<script>
export default {
  name: 'Item',
  props: ['item', 'index'],
  data() {
        return {
            
        }
    },
    computed: {
        getLevel : function(){
                if(this.item.level == 0) {
                    return `<span class="label label-default">Small</span>`;
                }
                else if(this.item.level == 1) {
                    return `<span class="label label-info">Medium</span>`;
                }
            return `<span class="label label-danger">High</span>`;
        }
    },
    methods: {
        handleDelete(id) {
            return this.$store.dispatch('DELETE_ITEM', id);
        },
        handleEdit(item) {
            this.$store.dispatch('OPEN_FORM');
            this.$store.dispatch('SELECTED_ITEM', item);
        }
    }
}
</script>