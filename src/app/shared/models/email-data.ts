import { UserInfo } from "./user-info";

export interface EmailData {
    sender : UserInfo;
    subject: string; 
    body: string; 
    date: string;
    time: string;
    attachments: any[];
}