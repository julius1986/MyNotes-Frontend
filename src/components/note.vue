<template>
<div id="note">
  <div class="text" @click="showFullNote()">{{note.text}}</div>
  <div class="btn-group">
    <div class="btn edit" @click="openEdit()">
      <div class="btnText">Edit</div>
    </div>
    <div class="btn delete" @click="deleteNote()">
      <div class="btnText">Delete</div>
    </div>

  </div>

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
      //this.$emit('delete-note', this.note);
      this.$store.commit('changeState',{type:'isDisable', value: true})
      this.$store.commit('changeState', {type:'isConfirm', value: true})
    },
    openEdit(){
      this.$store.commit('changeState',{type:'isDisable', value: true})
    },
    showFullNote(){
      this.$store.commit('changeState',{type:'isDisable', value: true})
    }
  },
}
</script>
<style scoped>
#note {
  flex: 0;
  min-width: 300px;
  min-height: 300px;
  background: white;
  border: 1px solid black;
  margin: 6px 10px;
  display: flex;
  flex-direction: column;

}

.text {
  flex: 8;
  overflow: hidden;
}

.btn-group {
  flex: 2;
  border-top: 1px solid black;
  display: flex;
  background-color: skyblue;
}

.btn-group .btn {
  flex: 1;
  margin: 1px;
  background-color: coral;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.btn-group .btn:hover {
  background-color: yellow;
}

.btn-group .btn:active {
  background-color: red;
}

.btn-group .btn .btnText {
  flex: 0;
  cursor: default;
}
</style>
