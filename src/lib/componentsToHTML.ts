import type { ComponentData } from "./EditableComponent.svelte";
import htmlTemplate from './template.html?raw';

export function componentsToHTML(components: readonly ComponentData[]): string {
    const content = components.map(({ position, content }) => 
        `<div id="realContainer" style="left: ${position.x}px; top: ${position.y}px">${content}</div>`).join("\n");
    return htmlTemplate.replace("{{content}}", content);
}
