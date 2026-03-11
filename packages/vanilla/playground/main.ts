import * as DuoIcons from "../src";

DuoIcons.createIcons({
    root: "#v1",
    attributes: {
        class: 'size-5',
        'data-tooltip': 'My icon'
    },
    icons: {
        'my-icon': '<svg>...</svg>' // Custom icon
    }
});


DuoIcons.createIcons({
    root: "#v2"
});

console.log("Icons: ", DuoIcons.icons);
