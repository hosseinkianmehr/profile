export default function handler(req, res) {
    res.status(200).json(itemData)
}


const itemData =
{
    skills: [
        {
            id: 1,
            title: 'Front-End Development',
            skill: [
                {
                    id: 1,
                    skill: 'React'
                },
                {
                    id: 1,
                    skill: 'Next js'
                },
                {
                    id: 1,
                    skill: 'MUI(materual ui)'
                }, {
                    id: 1,
                    skill: 'Bootstrap'
                },
                {
                    id: 1,
                    skill: 'Antd'
                },
            ]
        },
        {
            id: 1,
            title: 'Programming Languages',
            skill: [
                {
                    id: 1,
                    skill: 'Python'
                },
                {
                    id: 1,
                    skill: 'JavaScript'
                },
                {
                    id: 1,
                    skill: 'Matlab'
                }
            ]
        },
        {
            id: 1,
            title: 'Back-End Development',
            skill: [
                {
                    id: 1,
                    skill: 'Django'
                },
                {
                    id: 1,
                    skill: 'Django REST framework'
                },
                {
                    id: 1,
                    skill: 'GraphQL'
                }
            ]
        },
        {
            id: 1,
            title: 'DevOps',
            skill: [
                {
                    id: 1,
                    skill: 'Docker'
                },
                {
                    id: 1,
                    skill: 'Nginx'
                },
            ]
        },
    ],
    Evidence: [
        {
            img: '/logo/SRBIAU.png',
            Certificate: 'django',
            provider: 'maktabkhooneh ',
            Description: '@bkristastucchio',
            date: '2/5/8'
        },
        {
            img: '/logo/SRBIAU.png',
            Certificate: 'django',
            provider: 'maktabkhooneh ',
            Description: '@bkristastucchio',
            date: '2019/8/7'
        },

    ],
    projects: [
        {
            title: 'Breakfast',
            Description: 'A blog (a truncation of "weblog")[1] is a discussion or informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order, so that the most recent post appears first, at the top of the web page. Until ',
            tag: [
                {
                    id: 1,
                    tag: 'django'
                },
                {
                    id: 1,
                    tag: 'django'
                },{
                    id: 1,
                    tag: 'django'
                }
            ],
            date: '3/5/6',
            link: 'link'
        },
        {
            title: 'Breakfast',
            Description: 'A blog (a truncation of "weblog")[1] is a discussion or informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order, so that the most recent post appears first, at the top of the web page. Until ',
            tag: [
                {
                    id: 1,
                    tag: 'django'
                },
                {
                    id: 1,
                    tag: 'django'
                },{
                    id: 1,
                    tag: 'django'
                }
            ],
            date: '3/5/6',
            link: 'link'
        },

    ]
}
    ;
