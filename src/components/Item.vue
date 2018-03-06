<template>
   <tr>
            <td class="text-center">{{ index + 1}}</td>
            <td>{{ name }}</td>
            <td class="text-center" v-html="getLevel"></td>
            <td>
              <button type="button" class="btn btn-warning">Edit</button>
              <button type="button" class="btn btn-danger">Delete</button>
            </td>
          </tr>
</template>

<script>
export default {
  name: 'Item',
  props: ['taskName', 'level', 'number'],
  data() {
        return {
            name : this.taskName,
            index : this.number,
        }
    },
    computed: {
        getLevel : function(){
                if(this.level == 0) {
                    return `<span class="label label-default">Small</span>`;
                }
                else if(this.level == 1) {
                    return `<span class="label label-info">Medium</span>`;
                }
            return `<span class="label label-danger">High</span>`;
        }
	}
}
</script>