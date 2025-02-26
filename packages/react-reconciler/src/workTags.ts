export type WorkTag =
	| typeof FunctionComponent
	| typeof HostRoot
	| typeof HostComponenet
	| typeof HostText;
/**
 *
 */
export const FunctionComponent = 0;
/**
 * 项目挂载的根节点
 * ReactDom.render
 */
export const HostRoot = 3;
/**
 * <div>
 */
export const HostComponenet = 5;
/**
 * <div>xxx<div> 标签里的文本
 */
export const HostText = 6;
