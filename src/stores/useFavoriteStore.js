import { defineStore } from "pinia";
import{ ref,computed} from 'vue'

export const useFavoriteStore=defineStore('favorite',()=>{
    const favoriteIds =ref([])
    const saved=localStorage.getItem('blog-favorite')
    if(saved){
        favoriteIds.value=JSON.parse(saved)
    }

    const favoriteCount=computed(()=>favoriteIds.value.length)
    function isFavorite(articleId){
        return favoriteIds.value.includes(articleId)
    }
    function toggleFavorite(articleId){
        const index = favoriteIds.value.indexOf(articleId)
        if(index===-1){
            favoriteIds.value.push(articleId)
        }else{
            favoriteIds.value.splice(index,1)
        }
        localStorage.setItem('blog-favorite',JSON.stringify(favoriteIds.value))
    }
    return {favoriteIds,favoriteCount,isFavorite,toggleFavorite}
})