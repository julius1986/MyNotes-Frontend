<template>
<div id="add-window">
  <div class="dialog-box width-80 height-80">
    <div class="text-container">
      <textarea class="text-input p-10" v-model="newNote.text"></textarea>
    </div>
    <div class="button-group">
      <div class="btn btn-success" @click="addNote()">
        <div class="btn-text">
          ADD
        </div>
      </div>
      <div class="btn btn-cancel" @click="cancelAdding()">
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
  data: () => ({
    newNote: {}
  }),
  methods: {
    addNote() {
      if (this.newNote.text) {
        if (this.newNote.text.length > 0) {
          this.$emit('add-new-note', this.newNote);
        } else {
          this.cancelAdding();
        }
      } else {
        this.cancelAdding();
      }

    },
    cancelAdding() {
      this.$store.commit('changeState', {
        type: 'isDisable',
        value: false
      });
      this.$store.commit('changeState', {
        type: 'isAdd',
        value: false
      });
    }
  }
}
</script>

<style scoped>
#add-window {
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
  height: 60vh;
  width: 60vw;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
}

.button-group {
  flex: 2;
  display: flex;
  border-top: 1px solid black;
  max-height:50px;
}

.button-group .btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 1px;
}

.text-container {
  flex: 8;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text-input {
  flex: 1;
  overflow: auto;
  border: 0px;
  resize: none;
  font-size: 18px;
}

.text-input:active,
:hover,
:focus {
  outline: 0;
  outline-offset: 0;

}
</style>
