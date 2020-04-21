export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e9e873a0fe1c28639cf7add',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-rr94u5vw',
                  apiId: '0943c2ce-2ae8-4a55-af73-674dd0058089'
                },
                {
                  buildHookId: '5e9e873ab6188971094f0a2e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-es1yprpi',
                  apiId: '4b0b19d5-6dcd-4210-9291-ac69436ab2f9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ogilgr/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-es1yprpi.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
