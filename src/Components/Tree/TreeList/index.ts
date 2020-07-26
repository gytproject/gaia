import Tree1 from "./Tree1";
import Tree2 from "./Tree2";
import Tree3 from "./Tree3";
import Tree4 from "./Tree4";
import Tree5 from "./Tree5";
import Tree6 from "./Tree6";
import Tree7 from "./Tree7";

const TreeListData = [
    { id: 1, element: Tree1 },
    { id: 2, element: Tree2 },
    { id: 3, element: Tree3 },
    { id: 4, element: Tree4 },
    { id: 5, element: Tree5 },
    { id: 6, element: Tree6 },
    { id: 7, element: Tree7 },
]

export default class TreeList {

    private readonly _treeListData = TreeListData

    getTreeById(treeId: number): Function{
        try {
            return this._treeListData.find(tree => tree.id === treeId)?.element!
        } catch (error) {
            throw new Error(error)
        }
    }

}
