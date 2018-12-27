<template>
<div id="note">
  <div class="text">{{note.text}}</div>
  <div class="deleteBtn" @click="deleteNote()">Delete</div>
</div>
</template>
<script>
export default {
  name: "",
  props: ['note'],
  data: () => ({

  }),
  methods: {
    deleteNote() {
    this.$emit('delete-note', this.note);
    }
  }
}
</script>
<style scoped>
#note {
  display: inline-block;
  padding: 10px;
  width: 300px;
  height: 300px;
  background: yellow;
  border: 1px solid black;
  overflow: auto;
}
.text{
  height: 80%;
}
deleteBtn{
  height: 20%;
}
</style>
