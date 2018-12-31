import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    notes: [],
    isDisable: false,
    isEdit: false,
    isShowNote: false,
    isConfirm: false,

    showNoteText:""
  },
  getters: {
    notes: (state) => {
      return state.notes
    },
    isConfirm: (state) => {
      return state.isConfirm
    },
    isEdit: (state) => {
      return state.isEdit
    },
    isShowNote: (state) => {
      return state.isShowNote
    },
    isDisable: (state) => {
      return state.isDisable
    }
  },
  mutations: {
    setNotes: (state, newNotes) => {
      state.notes = newNotes;
    },
    addNewNote: (state, note) => {
      state.notes.push(note);
    },
    deleteNote: (state, note) => {
      state.notes.splice(state.notes.indexOf(note), 1);
    },
    changeState: (state, ctx) => {
      state[ctx.type] = ctx.value;
    },
    updateNote: (state, note) => {
      for (var i = 0; i < state.notes.length; i++) {
        if (state.notes[i].id === note.id) {
          for (let key in state.notes[i]) {
            state.notes[i][key] = note[key]
          }
          return;
        }
      }
    }

  },
  actions: {
    getAllNotes: () => {
      return [{
          id: 1,
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur totam, id sit?"
        },
        {
          id: 2,
          text: `
          Lorem ipsum dolor sit amet, consectetur.
          Lorem ipsum dolor sit amet, consectetur.
          Lorem ipsum dolor sit amet, consectetur.
          Lorem ipsum dolor sit amet, consectetur.
          Lorem ipsum dolor sit amet, consectetur.
          Lorem ipsum dolor sit amet, consectetur.
          Lorem ipsum dolor sit amet, consectetur.
          Lorem ipsum dolor sit amet, consectetur.
          Lorem ipsum dolor sit amet, consectetur.
          Lorem ipsum dolor sit amet, consectetur.
          Lorem ipsum dolor sit amet, consectetur.
          Lorem ipsum dolor sit amet, consectetur.
          Lorem ipsum dolor sit amet, consectetur.
          Lorem ipsum dolor sit amet, consectetur.
          Lorem ipsum dolor sit amet, consectetur.
          Lorem ipsum dolor sit amet, consectetur.
          Lorem ipsum dolor sit amet, consectetur.
          `
        },
        {
          id: 3,
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae voluptatibus aspernatur odit maxime corporis temporibus quis nisi dolore placeat, id sunt quam unde necessitatibus tempora, obcaecati voluptatum excepturi, qui nobis!"
        },
      ]
    },
    addNewNote: (ctx) => {
      let someText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo laborum deserunt eaque, aperiam veniam nisi.";
      let id = ctx.state.notes.length + 1;

      ctx.commit('addNewNote', {
        id: id,
        text: someText
      });
    },
    deleteNote: (ctx, note) => {
      ctx.commit('deleteNote', note)
      ctx.commit('changeState', {
        type: 'isDisable',
        value: false
      });
      ctx.commit('changeState', {
        type: 'isConfirm',
        value: false
      });
      //тут нужно сделать удаление
    },
    updateNote: (ctx, note) => {
      ctx.commit('changeState', {
        type: 'isDisable',
        value: false
      });
      ctx.commit('changeState', {
        type: 'isEdit',
        value: false
      });
      ctx.commit('updateNote', note);
      //тут нужно сделать обновление
    }
  }
})

export default store;
