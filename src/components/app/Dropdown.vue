<template>
        <ul v-show="list.open" >
            <li
                v-for="(item, index) in list.subnav"
                :key="'item'+index"
            >
                <router-link
                    :to="item.url"
                    :exact="item.exact"
                >
                    {{ item.title }}
                </router-link>
            </li>
        </ul>
</template>

<script>
    export default {
        name: 'Dropdown',
        props: ['list'],
    };
</script>
