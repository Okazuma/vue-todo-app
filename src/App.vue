<script setup>
import { ref } from "vue"
import TheHeader from '/src/Components/TheHeader.vue'
import AddTodo from '/src/Components/AddTodo.vue'
import TodoList from '/src/Components/TodoList.vue'

const todoList = ref([])

// 新しいタスクを追加するメソッド（イベントハンドラー）
function handleAddNewTodo(newTodo) {
  todoList.value.push(newTodo)
}
</script>



<template>
  <div>
    <TheHeader />
    <AddTodo @addTodo="handleAddNewTodo"/>
    <TodoList :todoList="todoList"/>
  </div>
</template>



<style scoped>

</style>