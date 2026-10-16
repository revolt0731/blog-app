import{ref,computed,onMounted} from 'vue'

export function usePosts(){
    const articles=ref([])
    const isLoading=ref(true)
    const error=ref(null)
    const activeCategory=ref('全部')
    const keyword=ref('')
    
    const categories=computed(()=>{
        const cats=articles.value.map(a=>a.category)
        return ['全部',...new Set(cats)]
    })

    const filteredArticles = computed(()=>{
        let result =articles.value
        if(activeCategory.value!=='全部'){
            result=result.filter(a=>a.category===activeCategory.value)
        }
        if(keyword.value.trim()){
            const kw = keyword.value.trim().toLowerCase()
            result=result.filter(a=>a.title.toLowerCase().includes(kw)||a.summary.toLowerCase().includes(kw))
        }
        return result
    })

    function getArticleById(id){
        return articles.value.find(a=>a.id===id)
    }

    function setCategory(cat){
        activeCategory.value=cat
    }

    async function fetchPosts(){
        isLoading.value=true
        error.value=null
        try{
            const res=await fetch('/posts.json')
            if(!res.ok){
                throw new Error('HTTP ${res.status}')
            }
            articles.value=await res.json()
        }catch(err){
            error.value=err.message
        }finally{
            isLoading.value=false
        }
    }

    onMounted(()=>{
        fetchPosts()
    })

    return{
        articles,
        isLoading,
        error,
        activeCategory,
        keyword,
        categories,
        filteredArticles,
        getArticleById,
        setCategory,
        fetchPosts
    }
}

