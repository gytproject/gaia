import Tree1 from "./Tree1";
import Tree2 from "./Tree2";
import Tree3 from "./Tree3";
import Tree4 from "./Tree4";
import Tree5 from "./Tree5";
import Tree6 from "./Tree6";
import Tree7 from "./Tree7";
import Tree8 from "./Tree8";
import Tree9 from "./Tree9";
import Tree10 from "./Tree10";
import Tree11 from "./Tree11";
import Tree12 from "./Tree12";
import Tree13 from "./Tree13";
import Tree14 from "./Tree14";
import Tree15 from "./Tree15";
import Tree16 from "./Tree16";
import Tree17 from "./Tree17";
import Tree18 from "./Tree18";
import Tree19 from "./Tree19";
import Tree20 from "./Tree20";

const TreeListData = [
    { id: 1, element: Tree1 },
    { id: 2, element: Tree2 },
    { id: 3, element: Tree3 },
    { id: 4, element: Tree4 },
    { id: 5, element: Tree5 },
    { id: 6, element: Tree6 },
    { id: 7, element: Tree7 },
    { id: 8, element: Tree8 },
    { id: 9, element: Tree9 },
    { id: 10, element: Tree10 },
    { id: 11, element: Tree11 },
    { id: 12, element: Tree12 },
    { id: 13, element: Tree13 },
    { id: 14, element: Tree14 },
    { id: 15, element: Tree15 },
    { id: 16, element: Tree16 },
    { id: 17, element: Tree17 },
    { id: 18, element: Tree18 },
    { id: 19, element: Tree19 },
    { id: 20, element: Tree20 },
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
