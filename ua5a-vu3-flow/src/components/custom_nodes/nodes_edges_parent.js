
import {
    Position,
} from "@braks/vue-flow";
const nodes_parent = [
    // {
    //     id: "UA5A",
    //     type: "ua5a",
    //     label: "數位平台",
    //     dragging: false,
    //     position: { x: 0, y: 0 },
    //     data: {
    //         backgroundColor: "#11a0c4",
    //         borderColor: "#000",
    //         color: "#000",
    //         linearStartColor: "#11a0c4",
    //         linearEndColor: "#11a0c4",
    //         hoverBorderColor: "#000",
    //         hoverColor: "#000",
    //         source: "Center",
    //         target: "Center",
    //     },
    // },
    //B2C
    {
        id: "B2C",
        label: "B2C",
        type: "b2c",
        sourcePosition: Position.Bottom,
        targetPosition: Position.Top,
        position: { x: 0, y: 0 },
        data: {
            backgroundColor: "#fff",
            borderColor: "#11a0c4",
            color: "#11a0c4",
            linearStartColor: "#cef4e3",
            linearEndColor: "#71dbff",
            hoverBorderColor: "#11a0c4",
            hoverColor: "#000",
            source: "Center",
            target: "Center",
        },
        style: { width: "120px" },
    },
    //Sales
    {
        id: "SALES",
        label: "SALES",
        type: "sales",
        sourcePosition: Position.Bottom,
        targetPosition: Position.Top,
        position: { x: 160, y: 0 },
        data: {
            backgroundColor: "#fff",
            borderColor: "#8585d6",
            color: "#8585d6",
            linearStartColor: "#cce4ff",
            linearEndColor: "#8585d6",
            hoverBorderColor: "#8585d6",
            hoverColor: "#000",
            source: "Center",
            target: "Center",
        },
        style: { width: "120px" },
    },
    //AORUS
    {
        id: "AORUS",
        label: "AORUS",
        type: "aorus",
        sourcePosition: Position.Bottom,
        targetPosition: Position.Top,
        position: { x: 320, y: -70 },
        data: {
            backgroundColor: "#fff",
            borderColor: "#ff6400",
            color: "#ff6400",
            linearStartColor: "#131313",
            linearEndColor: "#666",
            hoverBorderColor: "#000",
            hoverColor: "#ff6400",
            source: "Center",
            target: "Center",
        },
        style: { width: "120px" },
    },
    //BI
    {
        id: "BI",
        label: "BI / AI",
        type: "powerbi",
        // sourcePosition: Position.Top,
        // targetPosition: Position.Bottom,
        position: { x: 0, y: -70 },
        data: {
            backgroundColor: "#fff",
            borderColor: "#eec230",
            color: "#eec230",
            linearStartColor: "#f7db62",
            linearEndColor: "#d5920f",
            hoverBorderColor: "#eec230",
            hoverColor: "#000",
            source: "Center",
            target: "Center",
        },
        style: { width: "120px" },
    },
    //CXM
    {
        id: "CXM",
        label: "CXM",
        type: "cxm",
        sourcePosition: Position.Bottom,
        targetPosition: Position.Top,
        position: { x: 320, y: 70 },
        style: { width: "120px" },
        data: {
            backgroundColor: "#fff",
            borderColor: "#eec230",
            color: "#eec230",
            linearStartColor: "#f7db62",
            linearEndColor: "#d5920f",
            hoverBorderColor: "#eec230",
            hoverColor: "#000",
            source: "Center",
            target: "Center",
        },
    },
    //ERP
    {
        id: "ERP",
        label: "ERP",
        type: "erp",
        sourcePosition: Position.Bottom,
        targetPosition: Position.Top,
        position: { x: -160, y: 0 },
        style: { width: "120px" },
    },
    //PLM
    {
        id: "PLM",
        label: "PLM",
        type: "plm",
        sourcePosition: Position.Bottom,
        targetPosition: Position.Top,
        position: { x: -320, y: 0 },
        style: { width: "120px" },
    },
    //CN
    {
        id: "CN",
        label: "CN",
        type: "cn",
        sourcePosition: Position.Bottom,
        targetPosition: Position.Top,
        position: { x: -240, y: -70 },
        style: { width: "120px" },
        events: {
            click: (e) => {
                moveToNode(e, 1.8);
                hideNodes([]);
            },
        },
    },
    //SCM
    {
        id: "SCM",
        label: "SCM",
        type: "scm",
        sourcePosition: Position.Bottom,
        targetPosition: Position.Top,
        position: { x: -80, y: -70 },
        data:{
            style:{
                border:'1px dashed #000'
            }
        },
        style: { width: "120px" },
    },
];

const edges_parent = [
    {
        id: "B2C-BI",
        source: "B2C",
        target: "BI",
        type: "smoothstep",
    },
    {
        id: "B2C-SALES",
        source: "B2C",
        target: "SALES",
        type: "smoothstep",
    },
    {
        id: "SALES-CXM",
        source: "SALES",
        target: "CXM",
        type: "straight",
    },
    {
        id: "CXM-AORUS",
        source: "CXM",
        target: "AORUS",
        type: "straight",
    },
    {
        id: "AORUS-SALES",
        source: "AORUS",
        target: "SALES",
        type: "straight",
    },
    {
        id: "B2C-ERP",
        source: "B2C",
        target: "ERP",
        type: "smoothstep",
    },
    {
        id: "ERP-PLM",
        source: "ERP",
        target: "PLM",
        type: "smoothstep",
    },


    // {
    //     id: "UA5A-B2C",
    //     source: "UA5A",
    //     target: "B2C",
    //     type: "smoothstep",
    // },
    // {
    //     id: "UA5A-SALES",
    //     source: "UA5A",
    //     target: "SALES",
    //     type: "smoothstep",
    // },
    // {
    //     id: "UA5A-AORUS",
    //     source: "UA5A",
    //     target: "AORUS",
    //     type: "smoothstep",
    // },
    // {
    //     id: "UA5A-BI",
    //     source: "UA5A",
    //     target: "BI",
    //     type: "smoothstep",
    // },
    // {
    //     id: "UA5A-AI",
    //     source: "UA5A",
    //     target: "AI",
    //     type: "smoothstep",
    // },
    // {
    //     id: "UA5A-CXM",
    //     source: "UA5A",
    //     target: "CXM",
    //     type: "smoothstep",
    // },
    // {
    //     id: "UA5A-ERP",
    //     source: "UA5A",
    //     target: "ERP",
    //     type: "smoothstep",
    // },
    // {
    //     id: "UA5A-PLM",
    //     source: "UA5A",
    //     target: "PLM",
    //     type: "smoothstep",
    // },
    // {
    //     id: "UA5A-CN",
    //     source: "UA5A",
    //     target: "CN",
    //     type: "smoothstep",
    // },
    // {
    //     id: "UA5A-SCM",
    //     source: "UA5A",
    //     target: "SCM",
    //     type: "smoothstep",
    // },
]

export { nodes_parent, edges_parent }