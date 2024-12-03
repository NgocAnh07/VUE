<script setup>
import {ref, reactive , onMounted } from "vue";
import instanceAxios from "@/ultis/configAxios"
import {useRouter} from "vue-router";

const students=ref([]);

const getList = async()=>{
  const response = await instanceAxios.get(`/students`);
  // console.log(response.data);
  students.value = response.data;

}
onMounted(()=>{
  getList();
})
</script>
<template>
  <h1>danh sach students</h1>
  <table class="table ">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        <th>img</th>
        <th>edit</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="student in students" :key="student.id">
        <td>{{student.id}}</td>
        <td>{{student.name}}</td>
        <td>{{student.age}}</td>
        <td><img :src="student.img" width="200px" alt=""></td>
        <td>
          <!-- <RouterLink :to="`/detail/${student.id}`" class="btn btn-info">Xem chi tiet</RouterLink> -->
          <RouterLink :to="{name:'detail',params:{id:student.id} }" class="btn btn-info">Xem chi tiet</RouterLink>
        </td>
      </tr>
    </tbody>
  </table>
</template>
