<script setup lang="ts">
import AddCircle from '../src/icons/AddCircle.vue';
</script>

<template>
    <main>
        <h1>Icons</h1>
        <AddCircle color='red' data-id="888" class="add-class" />
        <AddCircle color='green' />
        <AddCircle color="royalblue" :size="64" />
        <AddCircle color="orange" :size="32" />
    </main>
</template>