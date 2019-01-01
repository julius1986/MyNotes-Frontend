<template>
<div id="menu">
  <div class="logout">
    logout
  </div>
  <div class="user">
    User1
  </div>
    <div class="add-btn" @click="addNewNote()">
      Add tandom note
    </div>

</div>
</template>
<script>
export default {
  name: "",
  data: () => ({

  }),
  methods: {
    addNewNote() {
      this.$store.commit('changeState',{type:'isDisable', value: true});
      this.$store.commit('changeState',{type:'isAdd', value: true});
    }
  }
}
</script>
<style scoped>
#menu {
  top: 0;
  height: 10%;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: orange;
  z-index: 2;
}
#menu div {
  display: inline-block;
}
#menu .logout, .add-btn {
  flex:1 ;
}

#menu .user {
  flex: 4;
}

#menu ul li{

  margin:10px;
  padding: 4px;
  border-left: black 1px solid;
  border-right: black 1px solid;
}
</style>
