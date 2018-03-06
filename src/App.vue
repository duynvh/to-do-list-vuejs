<template>
  <div id="app">
    <div class="container">
      <title-app></title-app>
    <!-- CONTROL (SEARCH + SORT + ADD) : START -->
      <control></control>
    <!-- CONTROL (SEARCH + SORT + ADD) : END -->

    <!-- FORM : START -->
    <Form></Form>
    <!-- FORM : END -->

    <!-- LIST : START -->
    <List></List>
    <!-- LIST : END -->
    </div>
    <!-- TITLE : START -->
    <router-view/>
  </div>
</template>

<script>
import TitleApp from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
export default {
  components: {
      TitleApp,
      Control,
      Form,
      List
  },
  name: 'App'
}
</script>
