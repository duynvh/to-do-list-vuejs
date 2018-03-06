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
              <a role="button">Name ASC</a>
            </li>
            <li>
              <a role="button">Name DESC</a>
            </li>
            <li role="separator" class="divider"></li>
            <li>
              <a role="button">Level ASC</a>
            </li>
            <li>
              <a role="button">Level DESC</a>
            </li>
          </ul>
          <span class="label label-success label-medium">NAME - DESC</span>
        </div>
      </div>
</template>

<script>
export default {
  name: 'sort'
}
</script>