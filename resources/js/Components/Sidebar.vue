<template>
    <aside class="hidden sm:block w-64 bg-gray-200">
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

<script>
export default {
    name: 'Sidebar',
}
</script>