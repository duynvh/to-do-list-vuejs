<template>
   <div v-if="isShowForm" class="row">
      <div class="col-md-offset-7 col-md-5">
        <form class="form-inline">
          <div class="form-group">
            <label class="sr-only" for="">label</label>
            <input :value="name" type="text" class="form-control" placeholder="Task Name" ref="task_name" />
          </div>
          <div class="form-group">
            <label class="sr-only" for="">label</label>
            <select :value="level" id="inputDs" class="form-control" required="required" ref="task_level">
              <option value="0">Small</option>
                <option value="1">Medium</option>
                <option value="2">High</option>
            </select>
          </div>

          <button v-on:click="submitForm" type="submit" class="btn btn-primary">Submit</button>
          <button v-on:click="handleCancel()" type="button" class="btn btn-default">Cancel</button>
        </form>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
    }
  },
  computed: {
      isShowForm() {
          return this.$store.state.isShowForm
      },
      id() {
        return this.$store.state.itemSelected.id
      },
      name() {
        return this.$store.state.itemSelected.name
      },
      level() {
        return this.$store.state.itemSelected.level
      }
  },
  methods: {
      handleCancel() {
        return this.$store.dispatch('CLOSE_FORM');
      },
      submitForm(event) {
        let item = {
            id: this.id,
            name: this.$refs.task_name.value,
            level: this.$refs.task_level.value
        };
        this.$store.dispatch('SUBMIT_FORM', item);
        this.$store.dispatch('CLOSE_FORM');
        event.preventDefault();
      }
  }
}
</script>