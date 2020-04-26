<template>
<div id="ListNotes">
  <note v-for="note in notes" :key="note.id" :note="note" @set-delete-note="setDeleteNote($event)" @set-update-note="setUpdateNote($event)"></note>
</div>
</template>
<script>
import note from '@/components/note';

export default {
  name: "",
  props: ['notes'],
  data: () => ({

  }),
  components: {
    note
  },
  methods: {
    setUpdateNote(value) {
      this.$emit('set-update-note', value);
    },
    setDeleteNote(value) {
      this.$emit('set-delete-note', value);
    },
  }
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active до версии 2.1.8 */
  {
  opacity: 0;
}

#ListNotes {
  position: relative;
  top: 0;
  display: flex;
  justify-content: flex-start;
  z-index: 1;
  flex-wrap: wrap;
  margin-top: 60px;
}

@media only screen and (max-device-width: 768px) {
  #ListNotes{
    margin-top: 40px;
  }
}

</style>
