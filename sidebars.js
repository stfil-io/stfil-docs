/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

    // But you can create a sidebar manually

    // tutorialSidebar: [
    //   'introduction',
    //   {
    //     type: 'category',
    //     label: 'Overview',
    //     items: [
    //       'guides/B&C',
    //       'guides/liquidity_protocol',
    //       'guides/stfil',
    //       'guides/borrowing',
    //       'guides/supplyEarning',
    //       'contract',
    //       'glossary',
    //     ],
    //   },
    //   {
    //     type: 'category',
    //     label: 'Guide',
    //     items: [
    //         'guide/emergency_model',
    //       'guide/debt',
    //     ],
    //   },
    //   {
    //     type: 'category',
    //     label: 'FDO',
    //     items: [
    //       {
    //         type: 'category',
    //         label: '治理',
    //         items: [
    //           'governance/governance/info',
    //           'governance/governance/governance-structure',
    //           'governance/governance/governance-right',
    //           'governance/governance/governance-qualify',
    //           'governance/governance/communication-channel',
    //           'governance/governance/incentive'
    //         ]
    //       },
    //       {
    //         type: 'category',
    //         label: 'Proposal Intro',
    //         items: [
    //           'governance/proposal/type',
    //           'governance/proposal/template',
    //           'governance/proposal/phase',
    //           'governance/proposal/conflict_resolution',
    //           'governance/proposal/other',
    //         ]
    //       },
    //       {
    //         type: 'category',
    //         label: 'Voting',
    //         items: [
    //           'governance/vote/mechanism',
    //           'governance/vote/process',
    //           'governance/vote/entrust',
    //         ]
    //       },
    //       {
    //         type: 'link',
    //         label: 'Proposal',
    //         href: 'http://forum.stfil.io/',
    //       },
    //       {
    //         type: 'link',
    //         label: 'Discuss',
    //         href: 'http://forum.stfil.io/',
    //       }
    //     ],
    //   },
    //   {
    //     type: 'category',
    //     label: 'Developers',
    //     items: ['introduction'],
    //   },
    //   {
    //     type: 'category',
    //     label: 'roadmap',
    //     items: [
    //       'roadmap/Aquarius',
    //       'roadmap/Bootes',
    //       'roadmap/Capricorn',
    //       'roadmap/Draco',
    //     ],
    //   },
    // ],
    //   myAutogeneratedSidebar: [
    //       {
    //           type: 'autogenerated',
    //           dirName: '.', // '.' 即当前的文档文件夹
    //       },
    //       {
    //           type: 'link',
    //           label: 'Proposal',
    //           href: 'http://forum.stfil.io/',
    //       },
    //       {
    //           type: 'link',
    //           label: 'Discuss',
    //           href: 'http://forum.stfil.io/',
    //       }
    //   ],
    // myAutogeneratedSidebar: [
    // {
    //     type: 'autogenerated',
    //     dirName: '.', // '.' 即当前的文档文件夹
    // },
    // {
    //     type: 'link',
    //     label: 'Proposal',
    //     href: 'https://forum.stfil.io/',
    // },
    // {
    //     type: 'link',
    //     label: 'Discuss',
    //     href: 'https://forum.stfil.io/',
    // }
    // ],
    overviewSidebar: [
        {
            type: 'autogenerated',
            dirName: 'overview', // '.' 即当前的文档文件夹
        }
    ],
    guidesSidebar: [
        {
            type: 'autogenerated',
            dirName: 'guides', // '.' 即当前的文档文件夹
        }
    ],
    fdoSidebar: [
        {
            type: 'autogenerated',
            dirName: 'governance', // '.' 即当前的文档文件夹
        }
    ],
    devSidebar: [
        {
            type: 'autogenerated',
            dirName: 'development', // '.' 即当前的文档文件夹
        }
    ],
    roadMapSidebar: [
        {
            type: 'autogenerated',
            dirName: 'roadmap', // '.' 即当前的文档文件夹
        }
    ],
};

module.exports = sidebars;
