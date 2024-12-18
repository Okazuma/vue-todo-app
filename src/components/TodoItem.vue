<template>
    <li>
        <span >{{ todo.text }}</span>
        <button @click="handleRemove">削除</button>
    </li>
</template>



<script setup>
import { defineProps, defineEmits } from "vue"

// 親から渡されたtodoを受け取る
const props = defineProps({
    todo: Object
})

// 親に削除イベントを通知する
const emit = defineEmits(['remove'])
function handleRemove() {
    // 親コンポーネントに 'remove'イベントを発火と削除対象のidを渡す
    emit('remove',props.todo.id)
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