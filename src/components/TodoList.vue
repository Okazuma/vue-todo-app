<template>
        <ul class="todo__ul">
            <TodoItem v-for="todo in todoList"
            :key="todo.id"
            :todo="todo"
            @remove="handleRemoveTodo(todo.id)"
            @edit="editTodo(todo.id)"/>
        </ul>
</template>



<script setup>
import TodoItem from "./TodoItem.vue"

// 親から渡されたtodoListを受け取る
const props = defineProps({
    todoList: {
        type: Array,
        required: true
    }
})
// 親に todoList を更新してもらう
const emit = defineEmits(['updateTodoList', 'edit']);

function handleRemoveTodo(todoId) {
  // 親に新しいtodoListを渡す
    const newTodoList = props.todoList.filter(todo => todo.id !== todoId);
    emit('updateTodoList', newTodoList);
}

function editTodo(todoId) {
    emit('edit', todoId);
}
</script>



<style scoped>
.todo__ul{
    width:90%;
    margin: 0 auto;
    padding: 0;
}

/* タブレットサイズ */
@media (min-width: 600px) {
}
/* PCサイズ */
@media (min-width: 768px) {
}
</style>