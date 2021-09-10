import { JoinRoom } from "src/chat/entities/JoinRoom.entity";
import { Message } from "src/chat/entities/Message.entity";
import { Product } from "src/product/entity/product.entity";
import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    name: string;

    gcn: number;

    email: string;

    @OneToMany(
        ()=> Product,
        (product) => product.user
    )
    products: Product[];

    @OneToMany(
        ()=>Message,
        (message)=>message.user
    )
    messages: Message[];

    @OneToMany(
        ()=>JoinRoom,
        (joinRoom)=>joinRoom.user
    )
    joinRooms: JoinRoom[];
}