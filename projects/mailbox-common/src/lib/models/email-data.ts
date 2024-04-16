import { UserInfo } from "./user-info";

export interface EmailData {
    readonly id?: string
    sender : UserInfo;
    subject: string; 
    body: string; 
    date: string;
    time: string;
    unread?: boolean;
    attachments: any[];
}