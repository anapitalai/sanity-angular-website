export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'anapitalai/sanity-angular-website'
      }
    },
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
                  buildHookId: '60b715fd61197d79fe5633cb',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-website-studio-a12pgyrw',
                  apiId: 'a5845356-7000-4d98-8fbc-9d5edeca482f'
                },
                {
                  buildHookId: '60b715fde0ef77798bde02a6',
                  title: 'Website',
                  name: 'sanity-angular-website-web-idnmrgtq',
                  apiId: 'b0be1c16-a100-4d09-89cc-c5e91964f640'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/anapitalai/sanity-angular-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-website-web-idnmrgtq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
