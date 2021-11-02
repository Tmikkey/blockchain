import { Tree } from './utils/tree.js'

/**
 * App structure (incomplete) used for navigation and view transitions.
 *
 * @type {WalletAppStructureNode[]}
 */
const appStructure = [
  {
    id: 'home',
    _c: [
      {
        id: 'news',
        _c: [
          {
            id: 'gov-home',
            _c: [
              {
                id: 'gov-proposal-detail',
                _c: [
                  {
                    id: 'gov-proposal-confirmation',
                    _c: [
                      {
                        id: 'gov-proposal-transaction-success-message',
                      },
                      {
                        id: 'gov-proposal-transaction-reject-message',
                      },
                    ],
                  },
                  {
                    id: 'gov-cancel-vote-confirmation',
                    _c: [
                      {
                        id: 'gov-cancel-vote-transaction-success-message',
                      },
                      {
                        id: 'gov-cancel-vote-transaction-reject-message',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]

/** @type {Tree} */
export const appStructureTree = new Tree(appStructure)

export function getAppParentNode(_id) {
  const node = appStructureTree.get(_id)

  return node ? node._p : null
}

export function getAppNodeParents(_id) {
  return appStructureTree.getParents(_id)
}
