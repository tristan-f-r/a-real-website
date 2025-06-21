<script lang="ts">
	import { componentsToHTML } from "./componentsToHTML";
    import type { ComponentData } from "./EditableComponent.svelte";
    import download from 'downloadjs'

    interface Props {
        components: ComponentData[],
        readonly defaultComponent: ComponentData
    }

    let { components = $bindable(), defaultComponent }: Props = $props();

    function exportAsJson() {
        download(JSON.stringify(components, null, 2), "components.json", "text/plain")
    }

    function exportAsHtml() {
        download(componentsToHTML(components), "index.html", "text/html")
    }
</script>

<div class="toolbar">
    <button onclick={() => components.push(structuredClone(defaultComponent))}>new component</button>
    <button onclick={exportAsHtml}>export as html</button>
    <button onclick={exportAsJson}>export as json</button>
    <button>advanced settings</button>
</div>

<style>
    .toolbar {
        position: fixed;
        top: 50px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
    }
</style>
