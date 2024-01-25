<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  value: {
    type: Boolean,
    default: false
  },
  searchInput: {
    type: String,
    default: ''
  }
})

const searchInput = ref(props.searchInput);

const emit = defineEmits(['update:value', 'update:searchInput'])

const resultsCount = ref(0);



watch(() => props.searchInput, (val) => {
    searchInput.value = val;

    //focus searchInput 
    if(val.length > 0){
        let searchInput = document.getElementById('searchInput');
        searchInput.focus();
    }
})

watch(() => searchInput.value, (val) => {
    if(searchInput.value.length == 0){
        emit('update:value', false)
    }
    emit('update:searchInput', val)
})


</script>

<template>
    <transition>
        <div class="search-box" :class="props.value?'active':''">
            <div class="search-div">
                <div class="search-content-top">
                    <div>
                        <span class="material-icons-outlined">
                        search
                        </span>
                        <input type="text" id="searchInput" v-model="searchInput" placeholder="Search...">
                    </div>
                    <div>
                        <span class="material-icons-outlined" @click="$emit('update:value',false)">
                        close
                        </span>
                    </div>
                </div>
                <div class="search-content-results">
                    <div>Results: {{ resultsCount }}</div>
                    <div class="result-list">
                        <div class="result-item">
                            <span class="material-icons-outlined">
                            home
                            </span>
                            <div>
                                首頁
                            </div>
                        </div>
                        <div class="result-item">
                            <span class="material-icons-outlined">
                            home
                            </span>
                            <div>
                                首頁
                            </div>
                        </div>
                        <div class="result-item">
                            <span class="material-icons-outlined">
                            home
                            </span>
                            <div>
                                首頁
                            </div>
                        </div>
                        <div class="result-item">
                            <span class="material-icons-outlined">
                            home
                            </span>
                            <div>
                                首頁
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<style lang="scss" scoped>

.search-box{
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100dvh;
    background: rgba(0,0,0,0.5);
    z-index: 100;
    opacity: 0;
    transition: 0.3s ease-in-out;
    -webkit-backdrop-filter: blur(.3rem);
    backdrop-filter: blur(.3rem);
    background-color: #05050b99;
    will-change: backdrop-filter;
    visibility: hidden;
    .search-div{
        position: relative;
        margin: 0px auto;
        width: 100%;
        max-width: 500px;
        height: auto;

        background: var(--bs-white);
        border-radius: 5px;
        padding: 10px;
        border: 1px solid var(--bs-gray-200);

        transform: translateY(-100%);
        transition: 0.3s ease-in-out;

        .search-content-top{
            display: flex;
            justify-content: space-between;
            align-items: center;
            >div{
                display: flex;
                align-items: center;
                >span{
                    color: var(--bs-primary);
                    font-size: 24px;
                }
                >input{
                    width: 100%;
                    height: 30px;
                    border: none;
                    border-radius: 3px;
                    padding: 0 10px 0 10px;
                    outline: none;
                    background: transparent;
                    box-shadow: none;
                    font-size: 14px;
                    font-weight: 700;
                    &:active{
                        border: none;
                    }
                    &:focus{
                        border: none;
                    }
                }
            }
        }
        
        .search-content-results{
            margin-top: 10px;
            >div{
                font-size: 13px;
                font-weight: 400;
                color: var(--bs-gray-500);
                margin-bottom: 5px;
            }
            .result-list{
                .result-item{
                    display: flex;
                    align-items: center;
                    padding: 13px;
                    font-size: 13px;
                    color:var(--bs-dark);
                    background: rgba(0,0,0,0.04);
                    border-radius: 3px;
                    cursor: pointer;
                    &:nth-child(even){
                        background: var(--bs-white);
                    }
                    &:hover{
                        background: var(--bs-gray-200);
                    }
                    >span{
                        color: var(--bs-primary);
                        font-size: 20px;
                    }
                    >div{
                        margin-left: 5px;
                    }
                }
            }
        }
    }
    &.active{
        opacity: 1;
        visibility: visible;
        .search-div{
            transform: translateY(30px);
        }
    }
}

</style>
