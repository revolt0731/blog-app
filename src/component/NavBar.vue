<script setup>
import { useFavoriteStore } from '@/stores/useFavoriteStore';
const favoriteStore=useFavoriteStore()
// composable
import { useDarkMode } from '@/composables/useDarkMode';
const{isDark,toggleDark}=useDarkMode()
</script>

<template>
    <!-- navbar -->
    <!-- <header class="navbar">
        <a href="/" class="logo">RUNOOB Blog</a>
        <nav>
            <RouterLink to="/">首页</RouterLink>
            <a href="#">关于</a>
        </nav>
    </header> -->

    <!-- composable -->
    <header class="navbar">
        <a href="/" class="logo">RUNOOB Blog</a>
        <nav>
            <a href="/">首页</a>
            <button class="theme-btn" @click="toggleDark">
                {{ isDark ? '&#x2600; 亮色' : '☾ 暗黑' }}
            </button>
            <span class="fav-badge" v-if="favoriteStore.favoriteCount>0">
                收藏{{ favoriteStore.favoriteCount }}
            </span>
        </nav>
    </header>
</template>

<style scoped>
/* navbar */
/* .navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:16px 40px;
    background: #fff;
    box-shadow:0 2px 8px rgba(0, 0, 0, 0.1)
}
.logo{
    font-size:22px;
    font-weight: bold;
    color:#42b883;
    text-decoration: none;
}
nav a{
    margin-left: 24px;
    text-decoration: none;
    color:#333;
    font-size: 15px;
}
nav a:hover{
    color: #42b883;
} */
/* composable */
.navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:16px 40px;
    background: #fff;
    box-shadow:0 2px 8px rgba(0, 0, 0, 0.1)
}
.logo{
    font-size:22px;
    font-weight: bold;
    color:#42b883;
    text-decoration: none;
}
nav a{
    margin-left: 24px;
    text-decoration: none;
    color:#333;
    font-size: 15px;
}
nav a:hover{
    color: #42b883;
}

</style>