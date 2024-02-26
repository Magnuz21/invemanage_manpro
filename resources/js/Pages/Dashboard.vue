<script setup>
import { ref } from 'vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { Link } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

const showSidebar = ref(false);

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
}

const showingNavigationDropdown = ref(false);

</script>           
<template> 
         <Head title="Dashboard" />
   
    <div>
        <div class="min-h-screen bg-gray-100">
            <nav class="bg-white border-b border-gray-100">
                <!-- Primary Navigation Menu -->
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex">
                            <button @click="toggleSidebar" class="text-black font-extrabold">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>

            </button>          
                        </div>
                        <div class="hidden sm:flex sm:items-center sm:ml-6">
                            <!-- Settings Dropdown -->
                            <div class="ml-3 relative">
                                <Dropdown align="right" width="48">
                                    <template #trigger>
                                        <span class="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {{ $page.props.auth.user.name }}

                                                <svg
                                                    class="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </template>

                                    <template #content>
                                        <DropdownLink :href="route('profile.edit')"> Profile </DropdownLink>
                                        <DropdownLink :href="route('logout')" method="post" as="button">
                                            Log Out
                                        </DropdownLink>
                                    </template>
                                </Dropdown>
                            </div>
                        </div>
                       
                    </div>
                </div>

                <!-- Responsive Navigation Menu -->
                <div
                    :class="{ block: showingNavigationDropdown, hidden: !showingNavigationDropdown }"
                    class="sm:hidden"
                >
                    <div class="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <!-- Responsive Settings Options -->
                    <div class="pt-4 pb-1 border-t border-gray-200">
                        <div class="px-4">
                            <div class="font-medium text-base text-gray-800">
                                {{ $page.props.auth.user.name }}
                            </div>
                            <div class="font-medium text-sm text-gray-500">{{ $page.props.auth.user.email }}</div>
                        </div>

                        <div class="mt-3 space-y-1">
                            <ResponsiveNavLink :href="route('profile.edit')"> Profile </ResponsiveNavLink>
                            <ResponsiveNavLink :href="route('logout')" method="post" as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
                <!--Sidebar-->
              
                <template>
    <aside v-if="showSidebar" class="hidden sm:block w-64 bg-gray-200">
        <nav class="sticky top-0 pt-6 pb-4">
            <ul class="space-y-2">
                <li>
                    <a href="#" class="flex items-center px-4 py-2 text-base font-medium text-gray-900 dark:text-white group hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        <i class="fas fa-chart-line text-gray-500 dark:text-gray-400 mr-3"></i>
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center px-4 py-2 text-base font-medium text-gray-900 dark:text-white group hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        <i class="fas fa-cog text-gray-500 dark:text-gray-400 mr-3"></i>
                        Settings
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center px-4 py-2 text-base font-medium text-gray-900 dark:text-white group hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        <i class="fas fa-users text-gray-500 dark:text-gray-400 mr-3"></i>
                        Users
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center px-4 py-2 text-base font-medium text-gray-900 dark:text-white group hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        <i class="fas fa-store text-gray-500 dark:text-gray-400 mr-3"></i>
                        Products
                    </a>
                </li>
            </ul>
        </nav>
    </aside>
</template>

            </nav>

            <!-- Page Heading -->
            <header class="bg-white shadow" v-if="$slots.header">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <slot name="header" />
                </div>
            </header>

            <!-- Page Content -->
            <main>
                <slot />
            </main>
        </div>
    </div>
</template>
