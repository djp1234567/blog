<template>
    <Layout>
        <template #doc-after>
            <div>
                <button @click="back">返回</button>
            </div>
            <Comments />
        </template>
        <!-- Home slot-->
        <template #home-hero-before><HomePage /></template>
        <template #home-features-after><PostList /></template>
        <!-- footer -->
        <template #layout-bottom><CopyWright /></template>
    </Layout>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import HomePage from './HomePage.vue';
import PostList from './PostList.vue'
import CopyWright from './CopyWright.vue'
import { useData } from 'vitepress'
const { Layout } = DefaultTheme;

const { page } = useData()
const filePath = page.value.filePath
const back = () => {
  history.back()
}
</script>

<style scoped lang="scss">

</style>
