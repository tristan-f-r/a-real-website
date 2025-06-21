<script lang="ts">
	import ConsoleHook from "$lib/ConsoleHook.svelte";
    import EditableComponent, { type ComponentData } from "$lib/EditableComponent.svelte";
	import Toolbar from "$lib/Toolbar.svelte";

    const defaultComponent = Object.freeze({
        content: "<h1>my component</h1>",
        position: { x: 0, y: 0 }
    });

    let components: ComponentData[] = $state([structuredClone(defaultComponent)])
</script>

<Toolbar bind:components={components} {defaultComponent} />
<ConsoleHook bind:components={components} />

<main>
    {#each components as _, i}
        <EditableComponent
            bind:content={components[i].content}
            bind:position={components[i].position}
        />
    {/each}
</main>
