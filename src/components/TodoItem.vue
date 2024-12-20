<template>
        <li class="todo__list">
            <span class="todo__title">{{ todo.text }}</span>
            <button class="action__button" @click="handleRemove">削除</button>
            <button class="action__button" @click="editingTodo">編集</button>
        </li>
</template>



<script setup>
// 親から渡されたtodoを受け取る
const props = defineProps({
    todo: Object
})

// 親に削除イベントを通知する
const emit = defineEmits(['remove','edit'])

function handleRemove() {
    if (confirm('削除しますか？')) {
        // 親コンポーネントに 'remove'イベントを発火と削除対象のidを渡す
        emit('remove',props.todo.id)
    }
}

function editingTodo() {
    emit('edit',props.todo.id);
}
</script>



<style scoped>
.todo__list{
    width:100%;
    border-bottom: 1px solid black;
    display: flex;
    justify-content:space-between;
    align-items:center;
    padding:24px 0px;
}

.todo__title{
    font-size:16px;
    width: 72%;
    padding:0px 10px;
}

.action__button{
    display:block;
    width:88px;
}

/* タブレットサイズ */
@media (min-width: 600px) {
}
/* PCサイズ */
@media (min-width: 768px) {
}
</style>