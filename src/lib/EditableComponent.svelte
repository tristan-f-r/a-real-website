<script lang="ts" module>
    import { string, object, number, type InferInput } from 'valibot';

    export const ComponentDataSchema = object({
        content: string(),
        position: object({
            x: number(),
            y: number()
        })
    });

    export type ComponentData = InferInput<typeof ComponentDataSchema>;
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
