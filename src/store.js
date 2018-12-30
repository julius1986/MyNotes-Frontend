import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    notes: [],
    isDisable: false,
    isConfirm: false
  },
  getters: {
    notes: (state) => {
      return state.notes
    },
    isConfirm: (state) => {
      return state.isConfirm
    },
    isDisable: (state)=>{
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
    changeState: (state, ctx)=>{
      state[ctx.type] = ctx.value;
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
    }
  }
})

export default store;
