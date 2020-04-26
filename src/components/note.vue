<template>
<div id="note" class="width-100">
  <div class="text" @click="showFullNote()">{{note.text}}</div>
  <div class="btn-group">
    <div class="btn btn-info" @click="openEdit()">
      <div class="btnText">Edit</div>
    </div>
    <div class="btn btn-info" @click="setDeleteNote()">
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
    setDeleteNote() {
      this.$emit('set-delete-note', this.note);
      this.$store.commit('changeState',{type:'isDisable', value: true})
      this.$store.commit('changeState', {type:'isConfirm', value: true})

    },
    openEdit(){
      this.$store.commit('changeState',{type:'isDisable', value: true})
      this.$store.commit('changeState',{type:'isEdit', value: true})
      this.$emit('set-update-note', this.note);
    },
    showFullNote(){
      this.$store.commit('changeState',{type:'isDisable', value: true})
      this.$store.commit('changeState',{type:'isShowNote', value: true})
      this.$store.commit('changeState', {type:'showNoteText', value: this.note.text})
    }
  },
}
</script>
<style scoped>
#note {
  flex: 0;
  min-width: 300px;
  height: 300px;
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
  max-height:50px;
}

.btn-group .btn {
  flex: 1;
  margin: 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.btn-group .btn .btnText {
  flex: 0;
  cursor: default;
}

@media only screen and (max-device-width: 768px) {
  #note{
    margin:10px 0px!important;
  }
}

</style>
