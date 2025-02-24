import { Key, Props, Ref } from 'shared/ReactTypes';
import { WorkTag } from './workTabs';
import { Flags, NoFlags } from './fiberFlags';

export class FiberNode {
	type: any;
	tag: WorkTag;
	pendingProps: Props;
	key: Key;

	stateNode: any;
	ref: Ref;
	return: FiberNode | null;
	sibling: FiberNode | null;
	child: FiberNode | null;
	index: number;
	memoizedProps: Props | null;

	alternate: FiberNode | null;
	flags: Flags;

	constructor(tag: WorkTag, pendingProps: Props, key: Key) {
		// FiberNode实例属性
		this.tag = tag;
		this.key = key;
		// 比如对于一个HostComponent是一个<div>则stateNode保存了div的dom
		this.stateNode = null;
		// FiberNode类型
		this.type = null;
		// 指向父fiberNode
		this.return = null;
		// 指向兄弟fiberNode
		this.sibling = null;
		// 指向子fiberNode
		this.child = null;
		this.index = 0;

		this.ref = null;

		// 作为工作单元
		this.pendingProps = pendingProps;
		// 确定的props
		this.memoizedProps = null;

		this.alternate = null;

		this.flags = NoFlags;
	}
}
