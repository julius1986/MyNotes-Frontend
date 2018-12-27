<template>
<div id="menu">
  <ul>
    <li @click="addNewNote()">Add tandom note</li>
    <li>Show tandom note</li>
    <li>Delete tandom note</li>
  </ul>
</div>
</template>
<script>
export default {
  name: "",
  data: () => ({

  }),
  methods: {
    addNewNote() {
      this.$emit('add-new-note');
    }
  }
}
</script>
<style scoped>
#menu {
  height: 20%;
  width: 100%;
}
#menu ul {

  text-decoration: none;
}
#menu ul li{
  display: inline-block;
  margin:10px;
  padding: 4px;
  border-left: black 1px solid;
  border-right: black 1px solid;
}
</style>
