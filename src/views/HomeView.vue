<script setup>
// import {ref,computed} from 'vue'
// import BlogCard from '../component/BlogCard.vue'
// import CategoryFilter from '../component/CategoryFilter.vue'

// const articles=ref([{ id: 1, title: 'Vue3 入门完全指南', summary: '从零开始学习 Vue3 组合式 API', date: '2024-05-10', category: 'Vue' },
//   { id: 2, title: 'JS 异步编程详解', summary: '搞懂 Promise 和 async/await', date: '2024-05-08', category: 'JavaScript' },
//   { id: 3, title: 'CSS Grid 布局实战', summary: '用 Grid 实现响应式布局', date: '2024-05-05', category: 'CSS' },
//   { id: 4, title: 'Vue3 响应式原理', summary: '深入理解 ref 和 reactive', date: '2024-05-03', category: 'Vue' },
//   { id: 5, title: 'Flexbox 完全指南', summary: '一文学会弹性布局', date: '2024-05-01', category: 'CSS' },])

// const categories=computed(()=>{
//     const cats=articles.value.map(a=>a.category)
//     return ["全部",...new Set(cats)]
// })

// const activeCategory=ref('全部')

// const filteredArticles=computed(()=>{
//     if(activeCategory.value==='全部'){
//         return articles.value
//     }
//     return articles.value.filter(a=>a.category===activeCategory.value)
// })

// function  handleCategoryChange(cat){
//     activeCategory.value=cat
// }

// 生命周期
// import{ref,onMounted,}from 'vue'
// import BlogCard from '../component/BlogCard.vue'
// import CategoryFilter from '../component/CategoryFilter.vue'


// const articles=ref([])
// const isLoading=ref(true)
// const error=ref(null)

// async function fetchPosts(){
//     isLoading.value=true
//     error.value=null
//     try{
//         const response = await fetch('../../public/posts.json')
//         if(!response.ok){
//             throw new Error('加载失败：HTTP${response.status}')
//         }
//         const data = await response.json()
//         articles.value=data
//     }catch(err){
//         error.value=err.message
//         console.error('文章数据加载失败:',err)
//     }finally{
//         isLoading.value=false
//     }
// }

// onMounted(()=>{
//     fetchPosts()
// })

// watch与搜索功能
// import{ref,computed,onMounted}from 'vue'
// import BlogCard from '@/component/BlogCard.vue';
// import CategoryFilter from '@/component/CategoryFilter.vue';

// const articles=ref([])
// const isLoading=ref(true)
// const activeCategory=ref('全部')
// const keyword =ref('')

// const categories=computed(()=>{
//     const cats=articles.value.map(a=>a.category)
//     return ['全部',...new Set(cats)]
// })

// const filteredArticles=computed(()=>{
//     let result=articles.value
//     if(activeCategory.value!=='全部'){
//         result=result.filter(a=>a.category===activeCategory.value)
//     }
//     if(keyword.value.trim()){
//         const kw=keyword.value.trim().toLowerCase()
//         result=result.filter(a=>a.title.toLowerCase().includes(kw)||a.summary.toLowerCase().includes(kw))
//     }
//     return result
// })

// function handleCategoryChange(cat){
//     activeCategory.value=cat
// }

// onMounted(async()=>{
//     try{
//         const res=await fetch('../../public/posts.json')
//         articles.value=await res.json()
//     }catch(err){
//         console.error('加载失败',err)
//     }finally{
//         isLoading.value=false
//     }
// })
//composable
import {usePosts} from '../composables/usePosts.js'
import BlogCard from '@/component/BlogCard.vue';
import CategoryFilter from '@/component/CategoryFilter.vue';

const {
    isLoading,
    error,
    activeCategory,
    keyword,
    categories,
    filteredArticles,
    setCategory,
    fetchPosts
}=usePosts()
</script>

<template>
    <!-- <div class="home">
        <h2 class="section-title">最新文章</h2>
        <CategoryFilter 
            :categories="categories" 
            :activeCategory="activeCategory" 
            @update-category="handleCategoryChange"
        />
        <p v-if="filteredArticles.length===0" class="empty-tip">该分类下暂无文章</p>
        <div v-else class="article-grid">
            <BlogCard
            v-for="article in filteredArticles"
            :key="article.id"
            :id="article.id"
            :title="article.title"
            :summary="article.summary"
            :date="article.date"
            :category="article.category"
            />
        </div>
    </div> -->
    <!-- 生命周期 -->
    <!-- <div class="home">
        <h2>最新文章</h2>
        <p v-if="isLoading" class="status-msg">加载中，请稍候...</p>
        <p v-else-if="error" class="status-msg-error">
            加载失败:{{ error }}
            <button @click="fetchPosts">重试</button>
        </p>
        <p v-else-if="articles.length===0" class="status-msg">
            还没有文章，敬请期待。
        </p>
        <template v-else>
            <div class="article-grid">
                <BlogCard
                v-for="article in articles"
                :key="article.id"
                :id="article.id"
                :title="article.title"
                :summary="article.summary"
                :date="article.date"
                :category="article.category"
                />
            </div>
        </template>
    </div> -->
    <!-- watch与搜索功能 -->
    <!-- <div class="home">
        <div class="search-bar">
            <input v-model="keyword" type="text" placeholder="搜索文章标题或摘要..." class="search-input">
            <span v-if="keyword" class="clear-btn" @click="keyword=''">✕</span>
        </div>
        <CategoryFilter 
        :categories="categories"
        :active-category="activeCategory"
        @update-category="handleCategoryChange"
        />
        <p v-if="isLoading">加载中...</p>
        <p v-else-if="filteredArticles.length===0">没有匹配的文章</p>
        <div v-else class="article-grid">
            <BlogCard
            v-for="article in filteredArticles"
            :id="article.id"
            :title="article.title"
            :summary="article.summary"
            :date="article.date"
            :category="article.category"
            />
        </div>
    </div> -->
    <!-- composable -->
    <div class="home">
        <div class="search-bar">
            <input v-model="keyword" type="text" placeholder="搜索文章标题或摘要...">
        </div>
    </div>

    <CategoryFilter 
        :categories="categories"
        :active-category="activeCategory"
        @update-category="setCategory"
    />

    <p v-if="isLoading">加载中</p>
    <p v-else-if="error">加载失败:{{ error }}
        <button @click="fetchPosts">重试</button>
    </p>
    <p v-else-if="filteredArticles.length===0">没有匹配的文章</p>
    <div v-else class="article-grid">
        <BlogCard
            v-for="article in filteredArticles"
            :key="article.id"
            :id="article.id"
            :title="article.title"
            :summary="article.summary"
            :date="article.date"
            :category="article.category"
        />
    </div>
</template>

<style scoped>
/* .home{
    max-width: 960px;
    margin: 0 auto;
    padding:20px;
}
.section-title{
    font-size:24px;
    margin-bottom: 20px;
}
.article-grid{
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(280px,1fr));
    gap:24px;
    margin-top:20px;
}
.empty-tip{
    text-align: center;
    color:#999;
    padding:60px 0;
} */
/* 生命周期 */
 /* .status-msg{
    text-align: center;
    padding:60px 0;
    font-size: 16px;
    color:#999;
 }
 .error{color: #e74c3c;}
 .error button{
    margin-left:10px;
    padding:4px 12px;
    cursor:pointer
 } */
/* watch和搜索功能 */
/* .home{
    max-width: 960px;
    margin: 0 auto;
    padding:20px;
}
.search-bar{
    position: relative;
    margin-bottom: 20px;
}
.search-input{
    width: 100%;
    padding: 12px 40px 12px 16px;
    border: 2px solid #eee;
    border-radius: 8px;
    font-size: 15px;
    outline:none;
    transition: border-color 0.2s;
}
.search-input:focus{
    border-color:#42b883
}
.clear-btn{
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translate(-50%);
    cursor: pointer;
    color: #999;
    font-size: 18px;
}
.article-grid{
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(280px,1fr));
    gap: 24px;
    margin-top: 20px;
} */
/* composable */
.home{
    max-width: 960px;
    margin: 0 auto;
    padding:20px;
}
.search-bar{
    position: relative;
    margin-bottom: 20px;
}
.article-grid{
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(280px,1fr));
    gap: 24px;
    margin-top: 20px;
}
</style>