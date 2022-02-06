import {Timestamp} from 'firebase/firestore';

interface TicketType{
    eventId: string;
    price: number;
    purchased: boolean;
    row: number;
    section: number;
    ticketId: string;
};

interface UserType{
  cover?: string;
  email: string;
  profilePhoto?: string;
  username: string;
};

interface OrderType{
  customerId: string;
  orderId?:string;
  price: number;
  tickets: Array<String>;
};

interface ArtistLink{
    artistId: string;
    artistName: string;
}

interface EventType{
    cover: string;
    date: Timestamp;
    description: string;
    eventId: string;
    lineup: Array<ArtistLink>;
    name: string;
    ticketPrice: number;
    venue: string;
}
interface ArtistType{
    artistId: string,
    name: string,
    profilePhoto:string,
}

export type {
  ArtistType,
  ArtistLink,
  EventType,
  OrderType,
  TicketType,
  UserType,
};
