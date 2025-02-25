import { ReactElementType } from 'shared/ReactTypes';
import { FiberNode } from './fiber';
import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';

export function ChildReconciler(shouldTrackEffects: boolean) {
	return function reconcileChildFibers(
		returnFiber: FiberNode,
		currentFilber: FiberNode | null,
		newChild?: ReactElementType
	) {
		if (typeof newChild === 'object' && newChild !== null) {
			switch (newChild.$$typeof) {
				case REACT_ELEMENT_TYPE:
					return reconcileSingleElement();

				default:
					if (__DEV__) {
						console.warn('未实现的reconcile类型', newChild);
					}
					break;
			}
		}
        // TODO 多节点的情况 ul>li*3

        // HostText
        if()
	};
}

export const reconcileChildFibers = ChildReconciler(true);
export const mountChildFibers = ChildReconciler(false);
