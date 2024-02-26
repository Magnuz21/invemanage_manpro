<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-200">
        <div>
            <Link href="/">
                <ApplicationLogo class="w-20 h-20 fill-current text-gray-500" />
            </Link>
        </div>
        <div class="w-full py-6 sm:max-w-md mt-6 bg-gradient-to-bl from-green-600  to-yellow-500 shadow-lg overflow-hidden sm:rounded-t-lg"></div>
        <div
            class="w-full sm:max-w-md px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-b-lg"
    
        >
            <slot />
        </div>
       </div>
      

</template>
