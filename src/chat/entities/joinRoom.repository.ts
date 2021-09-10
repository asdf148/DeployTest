import { Injectable } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { JoinRoom } from "./JoinRoom.entity";

@Injectable()
@EntityRepository(JoinRoom)
export class JoinRoomRepository extends Repository<JoinRoom>{}