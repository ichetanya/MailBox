export interface MenuItem {
    label : string;
    routerLink: string;
    icon?: string;
    chipCount?: number;
    children?: MenuItem[]; 
}