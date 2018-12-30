<template>
<div id="dialog-window">
  <div class="dialog-box">
    sadsad
  </div>
</div>
</template>
<script>
export default {
  name: "",
  data: () => ({

  })
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
  width: 300px;
  height: 300px;
  border: 1px solid black;
  background-color: black;
}


</style>
