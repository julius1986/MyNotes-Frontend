<template>
<div id="ListNotes">
  <note v-for="note in notes" :key="note.id" :note="note" @delete-note="deleteNote($event)"></note>
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
    deleteNote(value) {
      this.$emit('delete-note', value);
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
  margin-top: 10%;
  display: flex;
  justify-content: flex-start;
  z-index: 1;
  flex-wrap: wrap;
}
</style>
