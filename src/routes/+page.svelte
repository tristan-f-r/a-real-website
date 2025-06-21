<script lang="ts">
	import EditableComponent, { type ComponentData } from "$lib/EditableComponent.svelte";

    const defaultComponent = Object.freeze({
        content: "<h1>my component</h1>",
        position: { x: 0, y: 0 }
    })

    const components: ComponentData[] = $state([structuredClone(defaultComponent)])
</script>

<div class="toolbar">
    <button onclick={() => components.push(structuredClone(defaultComponent))}>new component</button>
    <button>export as html</button>
    <button>export as json</button>
</div>

<main>
    {#each components as { content }, i}
        <EditableComponent {content} bind:position={components[i].position} />
    {/each}
</main>

<style>
    .toolbar {
        position: fixed;
        top: 50px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
    }
</style>
