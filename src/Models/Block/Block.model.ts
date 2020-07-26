import BlockTreeModel from '../Tree/Tree.model';

export default class BlockModel {

        constructor(
            private _tree? : BlockTreeModel
        ){}

        get Tree(): BlockTreeModel | undefined{
            return this._tree
        }

        set Tree(newTree : BlockTreeModel | undefined){
            this._tree = newTree
        }
}