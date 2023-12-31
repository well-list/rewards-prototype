export const DEFAULT_THEME = 1;
export const DEFAULT_POINTS = 9999;
export const DEFAULT_SELECTION_MODE = 0;
export const DEFAULT_SELECTED_PLANT = -1;
export const DEFAULT_SELECTED_PLANT_COLOR = 0;

// position in array corresponds to color variation id
const MONEY_PLANT_COSTS = [100, 150, 200, 100, 150, 200, 100, 150, 200, 100, 150, 200, 100, 150, 200, 100, 150, 200];
const MONEY_TREE_COSTS = [200, 250, 300, 200, 250, 300, 200, 250, 300, 200, 250, 300, 200, 250, 300, 200, 250, 300];
const BAMBOO_COSTS = [300, 350, 400, 300, 350, 400, 300, 350, 400, 300, 350, 400, 300, 350, 400, 300, 350, 400];
const ELM_BONZAI_COSTS = [400, 450, 500, 400, 450, 500, 400, 450, 500, 400, 450, 500, 400, 450, 500, 400, 450, 500];
const JUNIPER_BOMZAI_COSTS = [500, 550, 600, 500, 550, 600, 500, 550, 600, 500, 550, 600, 500, 550, 600, 500, 550, 600];
const VINED_PATHOS_COSTS = [600, 650, 700, 600, 650, 700, 600, 650, 700, 600, 650, 700, 600, 650, 700, 600, 650, 700];

// position in array corresponds to plant id
export const PLANT_COSTS = [
    MONEY_PLANT_COSTS,
    MONEY_TREE_COSTS,
    BAMBOO_COSTS,
    ELM_BONZAI_COSTS,
    JUNIPER_BOMZAI_COSTS,
    VINED_PATHOS_COSTS
]