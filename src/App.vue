<script setup>
import { ref } from "vue"
import TheHeader from '/src/Components/TheHeader.vue'
import AddTodo from '/src/Components/AddTodo.vue'
import TodoList from '/src/Components/TodoList.vue'
import EditModal from '/src/Components/EditModal.vue'


const todoList = ref([])
const isModalOpen = ref(false)
const selectedTodo = ref(null)

let id = 1

// 新しいタスクを追加するメソッド（イベントハンドラー）
function handleAddNewTodo(newTodo) {
  todoList.value.push({ id: id++, text: newTodo })
}
// todoが削除されて新しい配列をtodoListから受けてtodoListを更新するメソッド（イベントハンドラー）
function handleUpdateTodoList(newTodoList) {
  todoList.value = newTodoList;
}

// モーダルを開く
function openModal(todoId) {
  const todo = todoList.value.find(todo => todo.id === todoId);
  selectedTodo.value = { ...todo }; // 編集する Todo をセット
  console.log("選択されたTodo:", todo); // ここでidやtextが正しいか確認

  isModalOpen.value = true;
}

// モーダルを閉じる
function closeModal() {
  isModalOpen.value = false;
  selectedTodo.value = null;
}

// 編集された Todo を保存
function saveTodo(updatedTodo) {
  // todoList から更新した Todo を検索
  const index = todoList.value.findIndex(todo => todo.id === updatedTodo.id);
  if (index !== -1) {
    // Todo を更新
    todoList.value[index] = updatedTodo;
  }
  console.log('保存されたTodo:', updatedTodo);
      isModalOpen.value = false;
}
</script>



<template>
  <div>
    <TheHeader />
    <AddTodo @addTodo="handleAddNewTodo"/>

    <TodoList
    :todoList="todoList" @updateTodoList="handleUpdateTodoList"
    @edit="openModal"
    @close="closeModal"
    @save="saveTodo"/>

    <EditModal
    v-if="isModalOpen"
    :key="selectedTodo?.id"
    :todo="selectedTodo"
    @close="closeModal"
    @save="saveTodo" />
  </div>
</template>



<style scoped>

</style>