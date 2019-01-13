<template>
<div id="dialog-window">
  <div class="dialog-box width-80 height-80">
    <div class="text-container">
      <div class="text">
        Are you sure? You want to delete this note?
      </div>
    </div>
    <div class="button-group">
      <div class="btn" @click="deleteNote()">
        <div class="btn-text">
          YES
        </div>
      </div>
      <div class="btn" @click="cancelDeleting()">
        <div class="btn-text">
          NO
        </div>
      </div>
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
      this.$emit('delete-note', this.note);
    },
    cancelDeleting() {
      this.$store.commit('changeState', {
        type: 'isDisable',
        value: false
      });
      this.$store.commit('changeState', {
        type: 'isConfirm',
        value: false
      });
    }
  }
}
</script>
<style scoped>
#dialog-window {
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

.button-group {
  flex: 2;
  display: flex;
  border-top: 1px solid black;
}

.button-group .btn {
  flex: 1;

  self-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: coral;
  margin: 1px;
}

.button-group .btn:hover {
  background-color: red;

}

.text-container {
  flex: 8;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
