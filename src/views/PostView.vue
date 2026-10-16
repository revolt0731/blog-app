<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { usePosts } from '../composables/usePosts'
import { useFavoriteStore } from '@/stores/useFavoriteStore';

const route=useRoute()
const id=Number(route.params.id)
const{isLoading,error,getArticleById}=usePosts()
const article=computed(()=>getArticleById(id))
const favoriteStore=useFavoriteStore()
</script>

<template>
    <!-- <div class="post-view">
        <div v-if="isLoading">加载中</div>
        <div v-else-if="error">加载失败:{{ error }}</div>
        <div v-else-if="!article" >
            <h2>文章不存在</h2>
            <RouterLink to="/">返回首页</RouterLink>
        </div>
        <article v-else>
            <span class="category-tag">{{ article.category }}</span>
            <h1>{{ article.title }}</h1>
            <time>{{ article.date }}</time>
            <div class="content" v-html="article.content"></div>
            <RouterLink to="/" class="back-link">返回首页</RouterLink>
        </article>
    </div> -->
    <!-- composable -->
    <div>
        <p v-if="isLoading">加载中...</p>
        <p v-else-if="error">加载失败：{{ error }}</p>
        <div v-else-if="!article">文章不存在</div>
        <article v-else>
            <h1>{{ article.title }}</h1>
            <div v-html="article.content"></div>
            <button class="fav-btn" @click="favoriteStore.toggleFavorite(article.id)">
                {{ favoriteStore.isFavorite(article.id)? '&#x2665; 已收藏':'♡ 收藏' }}
            </button>
        </article>
    </div>
</template>

<style scoped>
/* .post-view{
    max-width:720;
    margin: 40px auto;
    padding:0 20px;
}
.category-tag{
    display:inline-block;
    padding:4px 12px;
    background:#e8f5e9;
    color: #42b883;
    border-radius: 12px;
    font-size: 13px;
    margin-bottom: 12px;
}
.h1{
    font-size: 32px;
    margin-bottom:12px;
    line-height:1.4;
}
.time{
    display: block;
    color:#999;
    font-size:14px;
    margin-bottom:30px;
}
.content{
    line-height: 1.8;
    font-size:16px;
    color: #333;
}
.content :deep(h2){
    margin:24px 0 12px;
    font-size:22px;
}
.content :deep(p){
    margin-bottom:12px;
}
.back-link{
    display: inline-block;
    margin-top:40px;
    color:#42b883;
    text-decoration: none;
}
.not-found{
    text-align: center;
    padding:60px 0;
} */
</style>