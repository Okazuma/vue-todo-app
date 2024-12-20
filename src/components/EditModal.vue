<template>
    <!-- <div class="modal"> -->
        <div class="modal__inner">
            <h3 class="modal__title">編集</h3>

            <form class="modal__form" @submit.prevent="submit">
                <input class="modal__input" type="text" v-model="editedTodo.text">
                <div class="modal__item">
                    <button type="submit" class="action__button">保存</button>
                    <button type="button" class="action__button" @click="handleClose">Close</button>
                </div>
            </form>
        </div>
    <!-- </div> -->

</template>

<script setup>

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
.modal__inner{
    position: fixed;
    top: 25%;
    left: 9.5%;
    width: 80%;
    height: 40%;
    background: rgba(0, 0, 0, 0.5);
    background: rgb(153, 190, 225);
    border: 4px solid rgb(40, 110, 180);
    border-radius: 4px;
}

.modal__form{
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}

.modal__title{
    text-align: center;
    margin: 24px auto;
    font-size: 24px;
    width: 90%;
}

.modal__input{
    display:block;
    margin: 24px auto;
    width: 240px;
}

.modal__item{
    display: flex;
    justify-content: space-between;
    width: 64%;
    margin: 24px auto;
}

.action__button{
    width:88px;
}
</style>