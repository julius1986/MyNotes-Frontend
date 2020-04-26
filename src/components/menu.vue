<template>
<div id="menu">
  <div class="users__panel">
  <div class="logout">
    Logout
  </div>
  <div class="user">
    User1
  </div>
  </div>
  <div class="btns__group">
    <div class="add-btn" @click="addNewNote()">Add</div>
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
  height: 50px;
  width: 100%;
  position: fixed;
  display: flex;
  background-color: orange;
  z-index: 2;
}

#menu .users__panel{
  display:flex;
  align-items: center;
  flex:2;
  justify-content: flex-start;
  padding:0 10px;
}

#menu .btns__group{
  display:flex;
  align-items: center;
  flex:1;
  justify-content: flex-end;
  padding:0 10px;
}

#menu .logout, .user {
  padding:0 10px;
}

#menu .add-btn{
  padding:0 10px;
}

@media only screen and (max-device-width: 768px) {
  #menu{
    height: 30px;
    font-size: 1.4rem;
  }
}

</style>
