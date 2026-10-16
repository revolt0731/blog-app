
<script setup>
// 模版语法渲染
// import {ref} from 'vue'
// const articles=ref([
//   {
//     id: 1,
//     title: 'Vue3 入门完全指南',
//     summary: '从零开始学习 Vue3 组合式 API，涵盖 ref、reactive、computed 等核心概念。',
//     date: '2024-05-10',
//     category: 'Vue',
//     cover: '/images/OIP-C.webp'
//   },
//   {
//     id: 2,
//     title: 'JavaScript 异步编程详解',
//     summary: '一文搞懂 Promise、async/await、事件循环与微任务队列。',
//     date: '2024-05-08',
//     category: 'JavaScript',
//     cover: '/images/js.png'
//   },
//   {
//     id: 3,
//     title: 'CSS Grid 布局实战',
//     summary: '用 CSS Grid 轻松实现复杂的响应式布局。',
//     date: '2024-05-05',
//     category: 'CSS',
//     cover: '/images/css.png'
//   }
// ])
// // 响应式数据
// import {ref,computed} from 'vue'
// const articles=ref([
//   { id: 1, title: 'Vue3 入门完全指南', summary: '从零开始学 Vue3', category: 'Vue', date: '2024-05-10' },
//   { id: 2, title: 'JS 异步编程详解', summary: '搞懂 Promise 和 async/await', category: 'JavaScript', date: '2024-05-08' },
//   { id: 3, title: 'CSS Grid 布局实战', summary: '用 Grid 实现响应式布局', category: 'CSS', date: '2024-05-05' },
//   { id: 4, title: 'Vue3 响应式原理', summary: '深入理解 ref 和 reactive', category: 'Vue', date: '2024-05-03' },
//   { id: 5, title: 'Flexbox 完全指南', summary: '一文学会弹性布局', category: 'CSS', date: '2024-05-01' },
// ])
// const categories = computed(()=>{
//   const cats = articles.value.map(a=>a.category)
//   return ['全部',...new Set(cats)]
// })
// const activeCategory=ref('全部')
// const filteredArticles=computed(()=>{
//   if(activeCategory.value==='全部'){
//     return articles.value
//   }
//   return articles.value.filter(a=>a.category===activeCategory.value)
// })
// 拆分组件
import {ref} from 'vue'
import BlogCard from './component/BlogCard.vue';
import NavBar from './component/NavBar.vue'
const articles =ref(
  [{ id: 1, title: 'Vue3 入门', summary: '从零学 Vue3', date: '2024-05-10', category: 'Vue' },
  { id: 2, title: 'Promise 详解', summary: '搞懂异步', date: '2024-05-08', category: 'JavaScript' }]
)
</script> 

<template>
  <NavBar />
  <main>  
    <!-- RouterView 是魔法位置：当前路由匹配到的组件会在这里渲染 -->
    <RouterView />
  </main>
  <!-- <div id="app">
    顶部导航栏
    <header class="navbar">
        <h1> My blog</h1>
        <nav>
            <a href="/">首页</a>
            <a href="#">关于</a>
        </nav> 
    </header>
    主内容区
    <main class="container">
      <p>内容将在这里展示</p>
    </main>

    模版语法渲染
    <div class="home">
        <h2 class="section-title">最新文章</h2>
        <p v-if="!articles.length" class="empty-tip">还没有文章，敬请期待。</p>
        <div v-else class="article-grid">
            <div 
            v-for="article in articles"
            :key="article.id"
            class="article-card">
                <img :src="article.cover" :alt="article.title" class="card-cover">
                <div class="card-content">
                    <span class="card-category">{{ article.category }}</span>
                    <h3 class="card-title">{{ article.title }}</h3>
                    <p class="card-summary">{{ article.summary }} </p>
                    <span class="card-date">{{ article.date }}</span>
                </div>
            </div>
        </div>
    </div>
    响应式数据
    <div class="home">
      <h2>最新文章</h2>

      分类筛选按钮
      <div class="category-bar">
        <button v-for="cat in categories" :key="cat" :class="{active:activeCategory===cat}" @click="activeCategory=cat">{{ cat }}</button>
      </div>
      筛选结果数量
      <p class="result-info">共{{ filteredArticles.length }}篇</p>
      文章列表
      <div class="article-grid">
        <div v-for="article in filteredArticles" :key="article.id" class="card">
          <span class="tag">{{ article.category }}</span>
          <h3>{{ article.title }}</h3>
          <p>{{ article.summary }}</p>
          <span>{{ article.date }}</span>
        </div>
      </div>
    </div>
    拆分组件
    <div>
      <BlogCard v-for="article in articles" 
      :key="article.id" 
      :title="article.title"
      :summary="article.summary"
      :date="article.date"
      :category="article.category"></BlogCard>
    </div>

    页脚
    <footer class="footer">
      <p>© 2024 My Blog. Powered by Vue3.</p>
    </footer>
  </div> -->
</template>


<style scoped> 
/* *{
 margin:0;
 padding:0;
 box-sizing:border-box; 
}
body{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background:#f5f5f5;
  color:#333;
}
.navbar{
  display:flex;
  justify-content: space-between;
  align-items:center;
  padding:16px 40px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.navbar h1{
  font-size:24px;
  color:#42b883;
}
.navbar a{
  margin-left:20px;
  text-decoration: none;
  color:#333;
}
.container{
  max-width: 960px;
  margin:40px auto;
  padding:0 20px;
}
.footer{
  text-align: center;
  padding: 20px;
  color:#999;
  border-top:1px solid #eee;
} */

/* 模版语法渲染
.home{
  max-width:960px;
  margin:0 auto;
  padding:20px;
}
.section-title{
  font-size:24px;
  margin-bottom:20px;
  color:#333;
}
.article-grid{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(280px,1fr));
  gap:24px;
} 
.article-card{
  background:#fff;
  border-radius:12px;
  overflow: hidden;
  box-shadow:0 2px 12px rgba(0,0,0,0.08);
  transition:transform 0.2s,box-shadow 0.2s;
  cursor: pointer;
}
.article-card:hover {
  transform:translate(-4px);
  box-shadow:0 8px 24px rgba(0,0,0,0.12);
}
.card-cover{
  width:100%;
  height:180px;
  object-fit: cover;
}
.card-content{
  padding:16px;
}
.card-category{
  display:inline-block;
  padding:2px 10px;
  background:#e8f5e9;
  color: #42b883;
  border-radius:12px;
  font-size:12px;
  margin-bottom: 8px;
}
.card-title{
  font-size: 18px;
  margin-bottom: 8px;
  color: #222;
}
.card-summary{
  font-size:14px;
  color:#666;
  line-height: 1.6;
  margin-bottom:12px;
}
.card-date{
  font-size:12px;
  color: #999;
}
.empty-tip{
  text-align:center;
  color:#999;
  padding:60px 0;
  font-size:16px;
} */

/* 响应式数据
.category-bar{
  display: flex;
  gap:10px;
  margin-bottom:20px;
  flex-wrap: wrap;
}
.category-bar button{
  padding: 6px 16px;
  border: 1px solid #ddd;
  border-radius: 20px;
  background: #fff;
  cursor: pointer;
  font-size:14px;
  transition: all 0.2s;
}
.category-bar button.active{
  background: #42b883;
  color:#fff;
  border-color:#42b883;
}
.category-bar button:hover{
  border-color:#42b883
}
.result-info{
  color:#999;
  font-size:14px;
  margin-bottom: 16px;
} */
</style>