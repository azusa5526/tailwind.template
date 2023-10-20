import type { VNode, Component, ComponentPublicInstance, AppContext, VNodeProps } from 'vue';
import { createVNode, render } from 'vue';

interface RenderComponentParams {
	el: HTMLElement;
	component: Component;
	props: (VNodeProps & Record<string, unknown>) | null | undefined;
	appContext: AppContext;
}

function renderComponent({ el, component, props, appContext }: RenderComponentParams) {
	console.log(el, component, props, appContext);

	let vnode: VNode | undefined = createVNode(component, props);
	vnode.appContext = { ...appContext }; // must spread new object here
	render(vnode, el);

	return () => {
		// destroy component
		render(null, el);
		vnode = undefined;
	};
}

export { renderComponent };
