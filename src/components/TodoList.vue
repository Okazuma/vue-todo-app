<template>
    <div>
        <ul>
            <li v-for="(todo,index) in props.todoList" :key="index">{{ todo }}</li>
        </ul>
    </div>
</template>



<script setup>
import { defineProps } from "vue"

const props = defineProps({
    todoList: {
        type: Array,
        required: true
    }
})
</script>



<style scoped>

/* タブレットサイズ */
@media (min-width: 600px) {
}
/* PCサイズ */
@media (min-width: 768px) {
}
</style>