<template>
    <div class="todo__form">
            <input class="todo__input" type="text" v-model="newTodo" placeholder="入力する">
            <button class="add__button" @click="handleAddTodo">追加
            </button>
    </div>
</template>



<script setup>
import { ref } from "vue"

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
.todo__form{
    width: 90%;
    margin: 36px auto;
    display: flex;
    justify-content:space-between;
}

.todo__input{
    width: 72%;
    display: block;
    height:48px;
    margin: 0;
    padding:0 10px;
    box-sizing:border-box;
    border: 1px solid grey;
    border-radius: 4px;
}

.add__button{
    width:88px;
    height:48px;
    border: 1px solid grey;
    border-radius: 4px;
    text-decoration:none;
    cursor: pointer;
}


@media (min-width: 600px) {
}

@media (min-width: 768px) {
    .add__button:hover{
        background-color:lightgrey;
    }
}
</style>