<template>
  <div>
    <h1>chi tiet</h1>
  </div>
    <p>id:{{student.id}}</p>
    <p>name:{{student.name}}</p>
    <p>age:{{student.age}}</p>
    <img :src="student.img" width="200px" alt="">
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import  instanceAxios  from "@/ultis/configAxios";


const {params } = useRouter();
const student = ref({

});
const getStudent =async ()=>{
  const response = await instanceAxios.get(`students/${params.id}`);
  console.log(response.data);
  student.value = response.data
}

onMounted(() =>{
  getStudent();  
})
</script>

<style lang="scss" scoped>

</style>