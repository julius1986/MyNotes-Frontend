<template>
  <div id="edit-window">
    <div class="dialog-box width-80 height-80">
      <div class="text-container">
        <textarea class="text-input" v-model="newNote.text"></textarea>
      </div>
      <div class="button-group">
        <div class="btn" @click="updateNote()">
          <div class="btn-text">
          UPDATE
          </div>
        </div>
        <div class="btn" @click="cancelUpdating()">
          <div class="btn-text">
          CANCEL
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  created() {
    this.newNote.id = this.note.id;
    this.newNote.text = this.note.text;
  },
  props: ['note'],
  data: () => ({
    newNote:{}
  }),
  methods: {
    updateNote() {
      this.$emit('update-note', this.newNote);
    },
    cancelUpdating() {
      this.$store.commit('changeState',{type:'isDisable', value: false});
      this.$store.commit('changeState',{type:'isEdit', value: false});
    }
  }
}
</script>

<style scoped>
#edit-window {
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-box {
  background-color: white;
  width: 300px;
  height: 300px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
}

.button-group{
  flex:2;
  display: flex;
  border-top: 1px solid black;
}

.button-group .btn{
  flex:1;

  self-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: coral;
  margin: 1px;
}

.button-group .btn:hover{
  background-color: red;

}

.text-container{
  flex:8;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text-input{
  flex: 1;
  overflow: hidden;
  border:0px;
  resize: none;
  font-size: 18px;
}

.text-input:active, :hover, :focus {
    outline: 0;
    outline-offset: 0;

}

</style>
