import { DSVRowArray } from "d3-dsv";
import { Chart } from "./chart-interface";
import { GroupComponent as Group } from "./Group";
export declare abstract class ChartComponent extends Group implements Chart {
    dateKey: string;
    valueKey: string;
    idKey: string;
    colorKey: string;
    loadData(path: string | any): Promise<void>;
    update(): void;
    private readCsv;
    loadMeta(path: string | any): Promise<void>;
    data: DSVRowArray<string>;
    meta: DSVRowArray<string>;
}
