<template>
  <div id="container-show-window">
    <div class="note-box">
      <div class="text-container">
        <div class="text-input">{{noteText}}</div>
      </div>
      <div class="button-group">
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
  //do something after creating vue instance
  this.noteText = this.$store.state.showNoteText
},
  data(){
    return{
    noteText:""
    }
  },
  methods: {
    cancelUpdating() {
      this.$store.commit('changeState',{type:'isDisable', value: false});
      this.$store.commit('changeState',{type:'isShowNote', value: false});
    }
  }
}
</script>

<style scoped>
#container-show-window {
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

.note-box {
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
  overflow: auto;
  border:0px;
  resize: none;
  font-size: 18px;
  height: 100%;
}



</style>
