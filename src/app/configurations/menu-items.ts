import { MenuItem } from "../shared/models/menu-item";
import { RouterConfiguration } from "./router-config";

export const Inbox: MenuItem = {
    label: 'Inbox',
    routerLink: RouterConfiguration.inbox,
    icon: 'inbox.svg',
    chipCount: 20
}

export const Flagged: MenuItem = {
    label: 'Flagged',
    routerLink: RouterConfiguration.flagged,
    icon: 'star.svg',
}

export const Draft: MenuItem = {
    label: 'Draft',
    routerLink: RouterConfiguration.draft,
    icon: 'draft.svg',
}

export const Sent: MenuItem = {
    label: 'Sent',
    routerLink: RouterConfiguration.sent,
    icon: 'sent.svg',
}

export const Trash: MenuItem = {
    label: 'Trash',
    routerLink: RouterConfiguration.trash,
    icon: 'trash.svg',
}