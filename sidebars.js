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

  tutorialSidebar: [
    {
      type: 'category',
      label: 'Overview',
      items: [
        'introduction',
        {
          type: 'category',
          label: 'FAQ',
          items: [
            'faq/stfil',
            'faq/stake',
          ]
        },
        'contract',
        'glossary',
      ],
    },
    {
      type: 'category',
      label: 'Guide',
      items: [
          'guide/intro',
          'guide/stfil',
          'guide/emergency_model',
        'guide/debt',
      ],
    },
    {
      type: 'category',
      label: 'FDO',
      items: [
        {
          type: 'category',
          label: '治理',
          items: [
            'fdo/governance/info',
            'fdo/governance/fdo-structure',
            'fdo/governance/fdo-right',
            'fdo/governance/fdo-qualify',
            'fdo/governance/communication-channel',
            'fdo/governance/incentive'
          ]
        },
        {
          type: 'category',
          label: '提案过程',
          items: [
            'fdo/proposal/type',
            'fdo/proposal/template',
            'fdo/proposal/phase',
            'fdo/proposal/conflict_resolution',
            'fdo/proposal/other',
          ]
        },
        {
          type: 'category',
          label: '投票',
          items: [
            'fdo/vote/mechanism',
            'fdo/vote/process',
            'fdo/vote/entrust',
          ]
        },
        {
          type: 'category',
          label: '宪法',
          items: [
            'fdo/constitution/principle',
            'fdo/constitution/right',
            'fdo/constitution/normal',
          ]
        },
        {
          type: 'link',
          label: '提案',
          href: 'http://forum.stfil.io/',
        },
        {
          type: 'link',
          label: '讨论',
          href: 'http://forum.stfil.io/',
        }
      ],
    },
    {
      type: 'category',
      label: 'Developers',
      items: ['introduction'],
    },
    {
      type: 'category',
      label: 'milestones',
      items: [
        'milestones/Aquarius',
        'milestones/Bootes',
        'milestones/Capricorn',
        'milestones/Draco',
      ],
    },
  ],

};

module.exports = sidebars;
