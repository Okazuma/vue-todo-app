<script setup>
import { ref } from "vue"
import TheHeader from '/src/Components/TheHeader.vue'
import AddTodo from '/src/Components/AddTodo.vue'
import TodoList from '/src/Components/TodoList.vue'

const todoList = ref([])
let id = 1

// 新しいタスクを追加するメソッド（イベントハンドラー）
function handleAddNewTodo(newTodo) {
  todoList.value.push({ id: id++, text: newTodo })
}
// todoが削除されて新しい配列をtodoListから受けてtodoListを更新するメソッド（イベントハンドラー）
function handleUpdateTodoList(newTodoList) {
  todoList.value = newTodoList;
}
</script>



<template>
  <div>
    <TheHeader />
    <AddTodo @addTodo="handleAddNewTodo"/>
    <TodoList :todoList="todoList" @updateTodoList="handleUpdateTodoList"/>
  </div>
</template>



<style scoped>

</style>