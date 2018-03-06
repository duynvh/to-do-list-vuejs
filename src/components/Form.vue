<template>
   <div class="row">
      <div class="col-md-offset-7 col-md-5">
        <form action="" method="POST" class="form-inline">
          <div class="form-group">
            <label class="sr-only" for="">label</label>
            <input type="text" class="form-control" placeholder="Task Name" ref="task_name" />
          </div>
          <div class="form-group">
            <label class="sr-only" for="">label</label>
            <select name="ds" id="inputDs" class="form-control" required="required" ref="task_level">
              <option value="0">Small</option>
                <option value="1">Medium</option>
                <option value="2">High</option>
            </select>
          </div>

          <button type="button" class="btn btn-primary">Submit</button>
          <button type="button" class="btn btn-default">Cancel</button>
        </form>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Form'
}
</script>