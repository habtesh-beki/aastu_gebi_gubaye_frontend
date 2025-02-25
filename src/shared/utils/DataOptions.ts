import { Options } from "react-select";
type DepartmentI = {
    value: string;
    label: string;
};
//language options
export const optionslanguage: Options<{ value: string; label: string }> = [
    { value: "ef7d3e8a-2034-4d03-816d-e694ac6d0e79", label: "Amharic" },
    { value: "f36bbaa6-0dbe-4b83-b63d-47e70b8b0f70", label: "Afan Oromo" },
    { value: "a144fe60-da72-466b-82ec-bd73e88c322e", label: "Tigrigna" },
];
///service options
export const optionsService: Options<{ value: string; label: string }> = [
    { value: "43777475-7ff2-49fe-ac0f-71601b2a9b1f", label: "Mezemur" },
    { value: "b3df39d0-dee9-4824-81a0-1b1d92392f2c", label: "Timhirt" },
    { value: "fb857962-a705-4c5e-948e-778d23cd588c", label: "Muya" },
    { value: "f0481d3a-1a60-459e-9973-37e55529c1ca", label: "Bache" },
    { value: "e05a9b3a-5142-4f65-88b6-00f85e8856cd", label: "Plan" },
    { value: "34262273-5155-4bb9-8753-1340a600f4ee", label: "Audit" },
    { value: "790cb7e1-48f7-445a-923b-7266463f32f3", label: "Abalat" },
    { value: "7fe8b2ff-299b-4005-8f79-447abd3b3af1", label: "Hisab" },
    { value: "e59ea122-c91f-41fe-8d7e-e1fa7fe388de", label: "Lemat" },
    { value: "f53edf17-42ce-4855-b34c-917f6726b44d", label: "language" },
];
//department options
export const department: DepartmentI[] = [
    { value: "31e4ed2b-8a15-4b4d-852d-805f2d483b5c", label: "Electrical" },
    { value: "af0905fc-3ae8-4672-a9aa-314c054254e7", label: "Software" },
    { value: "607377c1-79a6-4d8d-aa88-e7c35e191d94", label: "Electro" },
    { value: "5642c05f-bd40-449a-9322-5817a3631877", label: "Arch" },
    { value: "5bf6384c-76e5-41a5-b183-4b0981b78033", label: "Environmental" },
    { value: "2464f17a-336d-462e-9ec6-2639567c4a9c", label: "Food" },
    { value: "3ccc6aeb-a0a0-44ce-b106-0f2de302975c", label: "Chemical" },
    { value: "f3c1d465-d69f-431f-9c80-7d19e1f7ed22", label: "Civil" },
    { value: "588cbae8-868c-45b6-9ac7-376013b0e2e9", label: "Mechanical" },
    { value: "1d371b26-b1af-4268-a1c8-615edd124d41", label: "Biotechnology" },
    { value: "93442573-6802-4c63-ac16-b15c9f132499", label: "Geology" },
    { value: "690d7d7c-2ffc-4cd8-99c8-9aaff1d4c563", label: "Industrial" },
    { value: "c03631a1-2f69-42b6-8ee1-0ba439507f10", label: "Mining" },
];
