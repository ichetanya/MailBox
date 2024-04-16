import { EmailData } from "../models/email-data";
import { v4 as uuid } from 'uuid';

export const mockedEmails: EmailData[] = [
    {
        id: uuid(),
        sender: {
            firstName: "Sam",
            lastName: "Miller",
            emailAddress: "sammiller@gmail.com",
            image: "mike.png"
        },
        subject: "Portfolio",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: "2024-04-15",
        time: "08:45 AM",
        attachments: ["agenda.pdf"]
    },
    {
        id: uuid(),
        sender: {
            firstName: "John",
            lastName: "Doe",
            emailAddress: "john.doe@example.com",
            image: "mike.png"
        },
        subject: "Meeting Reminder",
        body: "Just a reminder that our meeting is scheduled for tomorrow at 10:00 AM.",
        date: "2024-04-15",
        time: "09:00 AM",
        attachments: ["agenda.pdf"]
    },
    {
        id: uuid(),
        sender: {
            firstName: "Mary",
            lastName: "Smith",
            emailAddress: "mary.smith@example.com",
            image: "lily.png"
        },
        subject: "Project Update",
        body: "Here's the latest update on the project progress.",
        date: "2024-04-14",
        time: "03:30 PM",
        attachments: []
    },
    {
        id: uuid(),
        sender: {
            firstName: "User",
            lastName: "One",
            emailAddress: "user1@example.com",
            image: "patrick.png"
        },
        subject: "Re: Meeting Reminder",
        body: "Thanks for the reminder. Looking forward to the meeting.",
        date: "2024-04-15",
        time: "09:30 AM",
        attachments: []
    },
    {
        id: uuid(),
        sender: {
            firstName: "John",
            lastName: "Doe",
            emailAddress: "john.doe@example.com",
            image: "mike.png"
        },
        subject: "Meeting Reminder",
        body: "Just a reminder that our meeting is scheduled for tomorrow at 10:00 AM.",
        date: "2024-04-15",
        time: "09:00 AM",
        attachments: ["agenda.pdf"]
    },
    {
        id: uuid(),
        sender: {
            firstName: "Mary",
            lastName: "Smith",
            emailAddress: "mary.smith@example.com",
            image: "lily.png"
        },
        subject: "Project Update",
        body: "Here's the latest update on the project progress.",
        date: "2024-04-14",
        time: "03:30 PM",
        attachments: []
    },
    {
        id: uuid(),
        sender: {
            firstName: "User",
            lastName: "One",
            emailAddress: "user1@example.com",
            image: "patrick.png"
        },
        subject: "Re: Meeting Reminder",
        body: "Thanks for the reminder. Looking forward to the meeting.",
        date: "2024-04-15",
        time: "09:30 AM",
        attachments: []
    },
    {
        id: uuid(),
        sender: {
            firstName: "John",
            lastName: "Doe",
            emailAddress: "john.doe@example.com",
            image: "mike.png"
        },
        subject: "Meeting Reminder",
        body: "Just a reminder that our meeting is scheduled for tomorrow at 10:00 AM.",
        date: "2024-04-15",
        time: "09:00 AM",
        attachments: ["agenda.pdf"]
    },
    {
        id: uuid(),
        sender: {
            firstName: "Mary",
            lastName: "Smith",
            emailAddress: "mary.smith@example.com",
            image: "lily.png"
        },
        subject: "Project Update",
        body: "Here's the latest update on the project progress.",
        date: "2024-04-14",
        time: "03:30 PM",
        attachments: []
    },
    {
        id: uuid(),
        sender: {
            firstName: "User",
            lastName: "One",
            emailAddress: "user1@example.com",
            image: "patrick.png"
        },
        subject: "Re: Meeting Reminder",
        body: "Thanks for the reminder. Looking forward to the meeting.",
        date: "2024-04-15",
        time: "09:30 AM",
        attachments: []
    }
];
