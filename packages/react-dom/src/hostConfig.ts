export type Container = Element;
export type Instance = Element;

export const createInstance = (type: string, props: any): Instance => {
	// TODO 处理props
	const element = document.createElement(type);
	return element;
};

export const appendInitialChild = (
	parent: Instance | Container,
	child: Instance
) => {
	return {} as any;
};

export const createTextInstance = (...args: any) => {
	return {} as any;
};
export const appendChildToContainer = (...args: any) => {
	return {} as any;
};
