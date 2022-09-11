export default function handler(req, res) {
    res.status(200).json(itemData)
}


const itemData = [
    {
        skills: [
            {
                id: 1,
                title: 'Breakfast',
                skill: [
                    {
                        id: 1,
                        skill: 'next js'
                    },
                    {
                        id: 1,
                        skill: 'next js'
                    },
                    {
                        id: 1,
                        skill: 'next js'
                    }
                ]
            },
            {
                id: 1,
                title: 'Breakfast',
                skill: [
                    {
                        id: 1,
                        skill: 'next js'
                    },
                    {
                        id: 1,
                        skill: 'next js'
                    },
                    {
                        id: 1,
                        skill: 'next js'
                    }
                ]
            },
        ],
        Evidence: [
            {
                img: '',
                Certificate: 'django',
                provider: 'maktabkhooneh ',
                Description: '@bkristastucchio',
                date: ''
            },
            {
                img: '',
                Certificate: 'django',
                provider: 'maktabkhooneh ',
                Description: '@bkristastucchio',
                date: ''
            },

        ],
        Work: [
            {
                title: 'Breakfast',
                Description: '@bkristastucchio',
                tag: [
                    {
                        id: 1,
                        tag: 'django'
                    }
                ]
            },
            {
                title: 'Breakfast',
                Description: '@bkristastucchio',
                tag: [
                    {
                        id: 1,
                        tag: 'django'
                    }
                ]
            },

        ]
    }
];
