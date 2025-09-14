import { Dropdown } from '../components/Dropdown';

export default {
    title: "Example/Dropdown",
    component: Dropdown,
}

export const DropdownMain = {
    args: {
        portal: false,
        multipleSelect: true,
        search: true,
        isClearable: true,
        showElementWithMoreThan9999ZIndex: false,
    }
} 