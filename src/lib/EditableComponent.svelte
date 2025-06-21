<script lang="ts" module>
    export interface ComponentData {
        content: string;
        position: {
            x: number;
            y: number;
        };
    }
</script>

<script lang="ts">
    import { draggable } from '@neodrag/svelte';

    let { content = $bindable(), position = $bindable() }: ComponentData = $props();
</script>

<div use:draggable={{
    position,
    onDrag: ({ offsetX, offsetY }) => {
        position = { x: offsetX, y: offsetY };
    },
}} contenteditable bind:innerHTML={content}></div>

<style>
    div {
        position: absolute;
        width: fit-content;
    }
</style>
