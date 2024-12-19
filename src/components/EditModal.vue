<template>
    <div class="modal">
        <h3 class="modal__title">編集</h3>
        <form @submit.prevent="submit">
            <input  type="text" v-model="editedTodo.text">
            <button type="submit">保存</button>
        </form>
        <button @click="handleClose">Close</button>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue"

const props = defineProps({
    todo: {
        type: Object,
        required: true

    }
});
const emit = defineEmits(['save', 'close'])

const editedTodo = { ...props.todo };

function submit() {
    emit('save', editedTodo);
}
function handleClose() {
    emit('close');
}
</script>




<style>
.modal{
    /* モーダルのデザイン */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal__title{
    font-size: 24px;
}


</style>