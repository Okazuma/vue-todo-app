<template>
    <div>
            <input type="text" v-model="newTodo" placeholder="入力する">
            <button @click="handleAddTodo">ボタン</button>
    </div>
</template>



<script setup>
import { ref , defineEmits } from "vue"

const newTodo = ref('')

// 親コンポーネントにタスクを追加するメソッドを渡す（emitを使う）
const emit = defineEmits(['addTodo'])

// addTodoメソッド
function handleAddTodo() {
    if (newTodo.value !== '') {
        emit('addTodo', newTodo.value)
        newTodo.value=''
    }
}
</script>



<style scoped>

@media (min-width: 600px) {
}

@media (min-width: 768px) {
}
</style>