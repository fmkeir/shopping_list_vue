import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () =>{
  new Vue({
    el: "#app",
    data: {
      toDos: [
        {name: "Get milk", priority: "low"},
        {name: "hoover", priority: "high"},
        {name: "Check car engine light", priority: "low"}
      ],
      newToDo: "",
      newPriority: "low"
    },
    methods: {
      saveNewToDo: function(){
        this.toDos.push({
          name: this.newToDo,
          priority: this.newPriority
        })
        this.newToDo = ""
        this.newPriority = "low"
      },
      complete: function(index){
        this.toDos.splice(index, 1)
      },
      completeAll: function(){
        this.toDos = []
      }
    }
  })
});
