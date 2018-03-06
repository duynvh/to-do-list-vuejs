<template>
   <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div class="input-group">
          <input type="text" class="form-control" ref="search" placeholder="Search for..." />
          <span class="input-group-btn">
            <button class="btn btn-info" type="button">Go!</button>
          </span>
        </div>
      </div>
</template>

<script>
export default {
  name: 'search'
}
</script>