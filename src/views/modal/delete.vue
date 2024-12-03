<script setup>
import instanceAxios from "@/ultis/configAxios";
const props = defineProps({
     isShowModal: Boolean,
    handleCloseModal: Function,
    selectedBook: Object
})
const emit = defineEmits(['confirmEmit']);

console.log(props);
const onClickDelete = async() => {
  const response = await instanceAxios.delete(`books/${props.selectedBook.id}`)
  if (response) {
    emit('closeModal');
    emit('getNewList');
  }
}

</script>
<template>
    <div class="modal" style="display: block;" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Xác nhận xóa</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Bạn có muốn xóa thông tin {{ props.selectedBook.title }} không ?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="onClickDelete">Có</button>
          <button type="button" class="btn btn-secondary" @click="handleCloseModal" data-dismiss="modal">
            Không
          </button>
        </div>
      </div>
    </div>
  </div>
</template>