
function DataModal(value="", indent=1, children=[]) {
    this.value = value;
    this.indent = indent;
    this.children = children;
}
const d = new DataModal("ge", 2);

const dataFeeder = (data=[], dataModal, ref) => {
    let idx = dataModal.indent;
    
}

const data = [
    {
        value:"value hai p1",
        indent:1,
        children:[
            {
                value:"value hai p1c1",
                indent:2,
                children:[
                    
                ]
        
            },
            {
                value:"value hai p1c2",
                indent:2,
                children:[
                    
                ]
        
            }
        ]

    },
    {
        value:"value hai p2 ",
        indent:1,
        children:[
            {
                value:"value hai p2c1",
                indent:2,
                children:[
                    
                ]
        
            },
            {
                value:"value hai p2c2",
                indent:2,
                children:[
                    
                ]
        
            }
        ]

    }
]