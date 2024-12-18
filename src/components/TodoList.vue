<template>
        <ul>
            <TodoItem v-for="todo in todoList"
            :key="todo.id"
            :todo="todo"
            @remove="handleRemoveTodo(todo.id)"/>
        </ul>
</template>



<script setup>
import TodoItem from "./TodoItem.vue"
import { defineProps } from "vue"

// 親から渡されたtodoListを受け取る
const props = defineProps({
    todoList: {
        type: Array,
        required: true
    }
})
// 親に todoList を更新してもらう
const emit = defineEmits(['updateTodoList']);
function handleRemoveTodo(todoId) {
  // 親に新しいtodoListを渡す
    const newTodoList = props.todoList.filter(todo => todo.id !== todoId);
    emit('updateTodoList', newTodoList);
}
</script>



<style scoped>

/* タブレットサイズ */
@media (min-width: 600px) {
}
/* PCサイズ */
@media (min-width: 768px) {
}
</style>